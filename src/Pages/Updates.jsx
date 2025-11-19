// src/Components/Updates.jsx
import React, { useEffect, useMemo, useState } from "react";

export default function Updates() {
  const [allPosts, setAllPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [activeTags, setActiveTags] = useState(new Set());

  // Load posts.json from /public
  useEffect(() => {
    fetch("/posts.json")
      .then((r) => r.json())
      .then((data) => setAllPosts(Array.isArray(data) ? data : []))
      .catch(() => setAllPosts([]));
  }, []);

  // All unique tags
  const allTags = useMemo(() => {
    const t = new Set();
    for (const p of allPosts) {
      (p.tags || []).forEach((x) => t.add(x));
    }
    return Array.from(t).sort((a, b) => a.localeCompare(b));
  }, [allPosts]);

  // Helper: cycle some nice colours for tag pills
  const tagColorClass = (index) => {
    const palette = [
      "bg-emerald-500/15 text-emerald-200 border-emerald-400/40",
      "bg-cyan-500/15 text-cyan-200 border-cyan-400/40",
      "bg-indigo-500/15 text-indigo-200 border-indigo-400/40",
    ];
    return palette[index % palette.length];
  };

  // Filter + sort posts
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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* Grid background */}
      <div className="grid-bg" />

      {/* HEADER – same style as home page */}
      <header className="sticky top-0 z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* logo from /public/Images/logo.png */}
            <img
              src="/Images/logo.png"
              alt="W2W EnerGene"
              className="h-8 w-auto"
            />
            <a href="/" className="font-extrabold tracking-tight text-xl">
              W2W <span className="text-brand1">Ener</span>
              <span className="text-brand3">Gene</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="/#tech" className="hover:opacity-100 opacity-80">
              Technology
            </a>
            <a href="/#impact" className="hover:opacity-100 opacity-80">
              Impact
            </a>
            <a href="/#roadmap" className="hover:opacity-100 opacity-80">
              Roadmap
            </a>
            <a href="/#contact" className="hover:opacity-100 opacity-80">
              Contact
            </a>
            <a href="/updates" className="hover:opacity-100 opacity-80">
              Updates
            </a>
          </nav>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg"
          >
            Get early access →
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          Updates
        </h1>

        <div className="grid md:grid-cols-[1fr,280px] gap-8">
          {/* LEFT: search/sort + posts */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search updates…"
                className="w-full sm:w-96 rounded-xl bg-neutral-800/80 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl bg-neutral-800/80 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1 w-full sm:w-auto"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>

            <div className="space-y-4">
              {filtered.map((p, idxPost) => (
                <article
                  key={p.id}
                  className="rounded-2xl card border border-white/10 p-5 hover:bg-white/5 transition-colors shadow-lg shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
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
                    {(p.tags || []).map((t, i) => (
                      <button
                        key={`${p.id}-${t}`}
                        onClick={() => toggleTag(t)}
                        className={`px-3 py-1 rounded-full text-xs border ${tagColorClass(
                          i
                        )} ${
                          activeTags.has(t)
                            ? "ring-1 ring-brand3/60"
                            : "hover:brightness-110"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
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

          {/* RIGHT: Tags + RSS */}
          <aside>
            <div className="rounded-2xl card p-4 border border-white/10">
              <h2 className="font-semibold mb-2">Tags</h2>

              <div className="flex flex-wrap gap-2">
                {allTags.length === 0 && (
                  <div className="text-sm opacity-70">No tags yet</div>
                )}

                {allTags.map((t, i) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`px-3 py-1 rounded-full text-sm border ${tagColorClass(
                      i
                    )} ${
                      activeTags.has(t)
                        ? "ring-1 ring-brand3/60"
                        : "bg-neutral-800/80 hover:bg-neutral-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <button
                onClick={clearTags}
                className="mt-3 text-sm opacity-80 underline hover:opacity-100"
              >
                Clear filters
              </button>
            </div>

            <div className="rounded-2xl card p-4 mt-4 border border-white/10">
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

      {/* FOOTER – same as home page */}
      <footer className="border-t border-white/5">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand1 via-brand2 to-brand3" />
            <div className="font-bold">W2W EnerGene</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#contact">Contact</a>
            <a href="/updates">Updates</a>
          </div>
          <div className="opacity-60">
            © {new Date().getFullYear()} W2W EnerGene. All rights reserved.
          </div>
        </section>
      </footer>
    </div>
  );
}
