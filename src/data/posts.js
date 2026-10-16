import ALL_POSTS from "./posts.json";

// To add an update, add an entry to posts.json in this folder.
// Fields: id (used in the URL), title, date (YYYY-MM-DD), tags, excerpt, content_html.
// Posts with "draft": true are kept out of the site, sitemap and RSS feed.
export const POSTS = ALL_POSTS.filter((p) => !p.draft);

export function getPost(id) {
  return POSTS.find((p) => p.id === id);
}
