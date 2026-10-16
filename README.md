# W2W EnerGene website

Source for [www.w2wenergene.com](https://www.w2wenergene.com) — React + Vite, deployed on Cloudflare Pages.

## Everyday edits

| What | Where |
| --- | --- |
| Email, phone, location, company status line, contact-form endpoint | `src/data/site.js` (`SITE`) |
| Page titles and descriptions (what Google and link previews show) | `src/data/site.js` (`PAGES`, `TECH_STEPS`) |
| News / updates | `src/data/posts.json` — add an entry; `"draft": true` hides it |
| Team members, photos, LinkedIn / Scholar links | `src/Components/People.jsx` (`TEAM`) |
| Impact numbers and whether each is a lab result, target or estimate | `src/Components/KPIs.jsx` |
| Roadmap phases and their status | `src/Components/Roadmap.jsx` |
| "Why it matters" facts (keep a source link on each) | `src/Components/WhyItMatters.jsx` |
| Technology step pages | `src/Steps/Step1.jsx` … `Step4.jsx` |

## Contact form

The form sends messages to whatever endpoint is set in `SITE.formEndpoint` (or the
`VITE_FORM_ENDPOINT` environment variable in Cloudflare Pages). A free
[Formspree](https://formspree.io) form works out of the box: create one that delivers to
`contact@w2wenergene.com` and paste its `https://formspree.io/f/…` address in.
Until an endpoint is set, the form opens the visitor's email app with the message filled in.

Make sure `contact@w2wenergene.com` actually receives mail (for example with Cloudflare Email
Routing forwarding to your personal inbox).

## Commands

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

`npm run build` runs `vite build` and then `scripts/prerender.mjs`, which writes a real HTML file
for every page (with its title, description and link-preview tags), plus `sitemap.xml`,
`robots.txt`, `feed.xml` and `404.html`. If pre-rendering ever fails, the build still succeeds and
the site works as a normal single-page app; look for `[prerender]` warnings in the build log.

New routes must be added in both `src/AppRoutes.jsx` and `src/data/site.js` so they get pre-rendered.

## After deploying

1. Add the site to [Google Search Console](https://search.google.com/search-console) and submit
   `https://www.w2wenergene.com/sitemap.xml`.
2. Check the link preview with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Next technical step

Tailwind is still loaded from its CDN at runtime (`index.html`), which Tailwind recommends only
for prototypes. Installing it as a build-time dependency will make pages load faster; check the
pages afterwards, since class names differ slightly between Tailwind versions.
These packages are no longer used and can be removed with
`npm uninstall react-countup react-toastify react-tsparticles tsparticles`.
