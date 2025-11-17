import React, { useEffect, useMemo, useState } from "react";



/**
 * Updates page
 * - Mirrors the original HTML look/behavior (search, sort, tags, RSS box)
 * - Expects posts.json in /public (fetch('/posts.json'))
 * - Each post is { id, title, excerpt, date, tags: [] }
 */
export default function Updates() {
  const [allPosts, setAllPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest"); // "newest" | "oldest"
  const [activeTags, setActiveTags] = useState(new Set());

  // Load posts.json from the public folder
  useEffect(() => {
    // Keep exactly this path if posts.json is in /public
    fetch("/posts.json")
      .then((r) => r.json())
      .then((data) => setAllPosts(Array.isArray(data) ? data : []))
      .catch(() => setAllPosts([]));
  }, []);

  // Unique, sorted tags from all posts
  const allTags = useMemo(() => {
    const t = new Set();
    for (const p of allPosts) {
      (p.tags || []).forEach((x) => t.add(x));
    }
    return Array.from(t).sort((a, b) => a.localeCompare(b));
  }, [allPosts]);

  // Filter + sort
  const filtered = useMemo(() => {
    let out = [...allPosts];

    // search
    const q = query.trim().toLowerCase();
    if (q) {
      out = out.filter((p) =>
        `${p.title ?? ""} ${p.excerpt ?? ""} ${(p.tags || []).join(" ")}`
          .toLowerCase()
          .includes(q)
      );
    }

    // tag filters
    if (activeTags.size > 0) {
      out = out.filter(
        (p) => p.tags && p.tags.some((t) => activeTags.has(t))
      );
    }

    // sort
    out.sort((a, b) => {
      const da = new Date(a.date || 0).getTime();
      const db = new Date(b.date || 0).getTime();
      return sort === "newest" ? db - da : da - db;
    });

    return out;
  }, [allPosts, query, sort, activeTags]);

  // Tag interactions
  const toggleTag = (t) => {
    const next = new Set(activeTags);
    next.has(t) ? next.delete(t) : next.add(t);
    setActiveTags(next);
  };

  const clearTags = () => setActiveTags(new Set());

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
        Updates
      </h1>

      <div className="grid md:grid-cols-[1fr,280px] gap-8">
        {/* Left: search/sort + posts list */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search updates…"
              className="w-full sm:w-96 rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
            />

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1 w-full sm:w-auto"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>

          <div className="space-y-4">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="rounded-2xl card p-5 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  {/* Keep the same URL pattern as in your original HTML.
                     If you later move to a React route, swap this <a> for <Link to={`/post?id=${encodeURIComponent(p.id)}`}> */}
                  <a
                    className="text-xl font-semibold hover:underline"
                    href={`/post.html?id=${encodeURIComponent(p.id)}`}
                  >
                    {p.title}
                  </a>

                  <time className="text-sm opacity-70">
                    {p.date
                      ? new Date(p.date).toLocaleDateString()
                      : "—"}
                  </time>
                </div>

                {p.excerpt && (
                  <p className="mt-2 opacity-90">{p.excerpt}</p>
                )}

                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.tags || []).map((t) => {
                    const on = activeTags.has(t);
                    return (
                      <button
                        key={t}
                        onClick={() => toggleTag(t)}
                        className={`px-3 py-1 rounded-full text-xs transition-colors ${
                          on
                            ? "bg-brand3/20 border border-brand3/40"
                            : "bg-brand1/10 border border-brand1/30 hover:bg-brand1/20"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="rounded-2xl card p-6 text-sm opacity-80">
                No posts match your search/filters.
              </div>
            )}
          </div>
        </section>

        {/* Right: tags + RSS */}
        <aside>
          <div className="rounded-2xl card p-4">
            <h2 className="font-semibold mb-2">Tags</h2>

            <div className="flex flex-wrap gap-2">
              {allTags.length === 0 && (
                <div className="text-sm opacity-70">No tags yet</div>
              )}

              {allTags.map((t) => {
                const on = activeTags.has(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      on
                        ? "bg-brand3/20 border border-brand3/40"
                        : "bg-neutral-800 border border-white/10 hover:bg-white/5"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <button
              onClick={clearTags}
              className="mt-3 text-sm opacity-80 underline hover:opacity-100"
            >
              Clear filters
            </button>
          </div>

          <div className="rounded-2xl card p-4 mt-4">
            <h2 className="font-semibold mb-2">RSS</h2>
            <p className="text-sm opacity-80">
              Subscribe via{" "}
              <a className="underline" href="/feed.xml">
                feed.xml
              </a>
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
