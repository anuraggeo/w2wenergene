import React, { useEffect, useMemo, useState } from "react";

/**
 * Updates page (React)
 * - Restores previous dark theme + card look
 * - Uses the global .card and .grid-bg styles (see CSS patch below)
 * - Expects posts.json in /public
 */
export default function Updates() {
  const [allPosts, setAllPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [activeTags, setActiveTags] = useState(new Set());

  useEffect(() => {
    fetch("/posts.json")
      .then((r) => r.json())
      .then((data) => setAllPosts(Array.isArray(data) ? data : []))
      .catch(() => setAllPosts([]));
  }, []);

  // brand “chip” colors to make tags colorful (brand1, brand2, brand3 rotate)
  const tagColor = (idx) => {
    const i = idx % 3;
    if (i === 0) return "bg-brand1/10 border border-brand1/30 text-brand1";
    if (i === 1) return "bg-brand2/10 border border-brand2/30 text-brand2";
    return "bg-brand3/10 border border-brand3/30 text-brand3";
  };

  const allTags = useMemo(() => {
    const s = new Set();
    for (const p of allPosts) (p.tags || []).forEach((t) => s.add(t));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, [allPosts]);

  const filtered = useMemo(() => {
    let out = [...allPosts];

    const q = query.trim().toLowerCase();
    if (q) {
      out = out.filter((p) =>
        `${p.title ?? ""} ${p.excerpt ?? ""} ${(p.tags || []).join(" ")}`
          .toLowerCase()
          .includes(q)
      );
    }

    if (activeTags.size > 0) {
      out = out.filter(
        (p) => p.tags && p.tags.some((t) => activeTags.has(t))
      );
    }

    out.sort((a, b) => {
      const da = new Date(a.date || 0).getTime();
      const db = new Date(b.date || 0).getTime();
      return sort === "newest" ? db - da : da - db;
    });

    return out;
  }, [allPosts, query, sort, activeTags]);

  const toggleTag = (t) => {
    const next = new Set(activeTags);
    next.has(t) ? next.delete(t) : next.add(t);
    setActiveTags(next);
  };

  const clearTags = () => setActiveTags(new Set());

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative updates-root">
      {/* grid background like your original site */}
      <div className="grid-bg" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          Updates
        </h1>

        <div className="grid md:grid-cols-[1fr,280px] gap-8">
          {/* Left column */}
          <section>
            {/* Search + sort */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search updates…"
                className="w-full sm:w-96 rounded-xl bg-neutral-800/90 text-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl bg-neutral-800/90 text-neutral-100 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1 w-full sm:w-auto"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {filtered.map((p, i) => (
                <article
                  key={p.id ?? i}
                  className="rounded-2xl card p-5 hover:bg-white/5 transition-colors border border-white/10"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <a
                      className="text-xl font-semibold hover:underline"
                      href={`/post.html?id=${encodeURIComponent(p.id)}`}
                    >
                      {p.title}
                    </a>
                    <time className="text-sm opacity-70">
                      {p.date ? new Date(p.date).toLocaleDateString() : "—"}
                    </time>
                  </div>

                  {p.excerpt && (
                    <p className="mt-2 opacity-90">{p.excerpt}</p>
                  )}

                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags || []).map((t, ti) => {
                      const on = activeTags.has(t);
                      return (
                        <button
                          key={`${t}-${ti}`}
                          onClick={() => toggleTag(t)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors
                            ${on ? "ring-1 ring-white/40" : ""}
                            ${tagColor(ti)}
                          `}
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

          {/* Right column: Tags + RSS */}
          <aside className="space-y-4">
            <div className="rounded-2xl card p-4 border border-white/10">
              <h2 className="font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.length === 0 && (
                  <div className="text-sm opacity-70">No tags yet</div>
                )}
                {allTags.map((t, ti) => {
                  const on = activeTags.has(t);
                  return (
                    <button
                      key={t}
                      onClick={() => toggleTag(t)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors
                        ${on ? "ring-1 ring-white/40" : ""}
                        ${tagColor(ti)}
                      `}
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

            <div className="rounded-2xl card p-4 border border-white/10">
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
    </div>
  );
}
