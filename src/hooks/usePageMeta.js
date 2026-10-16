import { useEffect } from "react";
import { SITE } from "../data/site.js";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

// Keeps the browser tab title, description and link-preview tags in step with the current page
// when people move around the site without a full page load. The build script writes the same
// tags into each page's HTML for search engines and link previews.
export default function usePageMeta({ title, description, path, type = "website" }) {
  useEffect(() => {
    const url = SITE.url + (path === "/" ? "/" : path);
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, type]);
}
