// Runs after `vite build`. For every page it writes a real HTML file with the right
// <title>, description and link-preview tags, plus the rendered page content, so that
// search engines, LinkedIn/WhatsApp previews and visitors without JavaScript all see the page.
// It also writes sitemap.xml, robots.txt, feed.xml and 404.html.
//
// It never fails the build: if rendering breaks, the site still works as before
// (the browser draws the page), and a warning is printed in the build log.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, PAGES, NOT_FOUND, postMeta } from "../src/data/site.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, process.argv[2] || "dist");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const abs = (p) => SITE.url + (p === "/" ? "/" : p);

function seoBlock(meta) {
  const url = abs(meta.path);
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.path === NOT_FOUND.path ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.type || "website"}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
  ].join("\n    ");
}

// Shown only if rendering fails: enough for search engines to understand the page.
function fallbackBody(meta) {
  return `<main style="max-width:48rem;margin:0 auto;padding:4rem 1.5rem"><h1>${esc(meta.title)}</h1><p>${esc(
    meta.description
  )}</p><p><a href="/">Home</a> · <a href="/people">People</a> · <a href="/updates">Updates</a> · <a href="/#contact">Contact</a></p></main>`;
}

function outFile(p) {
  if (p === "/") return path.join(dist, "index.html");
  if (p === NOT_FOUND.path) return path.join(dist, "404.html");
  return path.join(dist, `${p.slice(1)}.html`); // /people -> people.html (served at /people)
}

function buildPage(template, meta, html) {
  const seo = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, seoBlock(meta));
  return html
    ? seo.replace('<div id="root"><!--app-html--></div>', `<div id="root" data-prerendered="true">${html}</div>`)
    : seo.replace("<!--app-html-->", fallbackBody(meta));
}

function writeExtras(routes, posts) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .filter((r) => r.path !== NOT_FOUND.path)
    .map((r) => `  <url><loc>${abs(r.path)}</loc><lastmod>${r.date || today}</lastmod></url>`)
    .join("\n");
  fs.writeFileSync(
    path.join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );

  fs.writeFileSync(path.join(dist, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

  const items = [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${abs(`/updates/${p.id}`)}</link>
      <guid isPermaLink="true">${abs(`/updates/${p.id}`)}</guid>
      <pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.excerpt || "")}</description>
    </item>`
    )
    .join("\n");
  fs.writeFileSync(
    path.join(dist, "feed.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>W2W EnerGene — Updates</title>
    <link>${abs("/updates")}</link>
    <description>Research milestones, talks and news from W2W EnerGene</description>
    <language>en</language>
${items}
  </channel>
</rss>
`
  );
}

async function loadRenderer() {
  const { createServer } = await import("vite");
  const vite = await createServer({
    root,
    logLevel: "error",
    appType: "custom",
    server: { middlewareMode: true, hmr: false, watch: null },
  });
  try {
    const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");
    return { render, close: () => vite.close() };
  } catch (err) {
    await vite.close();
    throw err;
  }
}

async function main() {
  const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  if (!template.includes("<!--seo:start-->") || !template.includes("<!--app-html-->")) {
    console.warn("[prerender] index.html markers missing — skipping.");
    return;
  }

  const posts = JSON.parse(fs.readFileSync(path.join(root, "src/data/posts.json"), "utf8")).filter((p) => !p.draft);
  const routes = [...PAGES, ...posts.map((p) => ({ ...postMeta(p), date: p.date })), NOT_FOUND];

  writeExtras(routes, posts);

  let renderer = null;
  try {
    renderer = await loadRenderer();
  } catch (err) {
    console.warn(`[prerender] Could not load the app for rendering (${err.message}). Writing pages with tags only.`);
  }

  const pages = [];
  for (const meta of routes) {
    let html = "";
    if (renderer) {
      try {
        html = renderer.render(meta.path === NOT_FOUND.path ? "/__not-found__" : meta.path);
      } catch (err) {
        console.warn(`[prerender] ${meta.path}: render failed (${err.message}). Writing tags only.`);
      }
    }
    pages.push([outFile(meta.path), buildPage(template, meta, html), meta.path]);
  }
  if (renderer) await renderer.close();

  // Write the 404 page last. Its presence switches the host from "send every unknown URL to
  // the home page" to real 404s, so only add it once every other page exists.
  pages.sort((a, b) => (a[2] === NOT_FOUND.path) - (b[2] === NOT_FOUND.path));
  for (const [file, html, p] of pages) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`[prerender] ${p} → ${path.relative(dist, file)}`);
  }
}

main().catch((err) => {
  console.warn(`[prerender] Skipped: ${err.stack || err.message}`);
});
