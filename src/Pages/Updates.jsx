import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "../Components/PageShell.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { getPageMeta, formatDate } from "../data/site.js";
import { POSTS } from "../data/posts.js";

const PALETTE = [
  "bg-emerald-500/15 text-emerald-200 border-emerald-400/40",
  "bg-cyan-500/15 text-cyan-200 border-cyan-400/40",
  "bg-indigo-500/15 text-indigo-200 border-indigo-400/40",
];

export default function Updates() {
  usePageMeta(getPageMeta("/updates"));

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("newest");
  const [activeTags, setActiveTags] = useState(() => new Set());

  const allTags = useMemo(
    () => Array.from(new Set(POSTS.flatMap((p) => p.tags || []))).sort((a, b) => a.localeCompare(b)),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) => !q || `${p.title} ${p.excerpt} ${(p.tags || []).join(" ")}`.toLowerCase().includes(q))
      .filter((p) => activeTags.size === 0 || (p.tags || []).some((t) => activeTags.has(t)))
      .sort((a, b) => (sort === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));
  }, [query, sort, activeTags]);

  const toggleTag = (t) => {
    const next = new Set(activeTags);
    if (next.has(t)) next.delete(t);
    else next.add(t);
    setActiveTags(next);
  };

  return (
    <PageShell current="/updates">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Updates</h1>

        <div className="grid md:grid-cols-[1fr_280px] gap-8">
          <section aria-label="Posts">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search updates…"
                aria-label="Search updates"
                className="w-full sm:w-96 rounded-xl bg-neutral-800/80 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                aria-label="Sort order"
                className="rounded-xl bg-neutral-800/80 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1 w-full sm:w-auto"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>

            <div className="space-y-4">
              {filtered.map((p) => (
                <article key={p.id} className="rounded-2xl card border border-white/10 p-5 hover:bg-white/5 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h2 className="text-xl font-semibold">
                      <Link to={`/updates/${p.id}`} className="hover:underline">
                        {p.title}
                      </Link>
                    </h2>
                    <time dateTime={p.date} className="text-sm opacity-70">
                      {formatDate(p.date)}
                    </time>
                  </div>
                  {p.excerpt && <p className="mt-2 opacity-90">{p.excerpt}</p>}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags || []).map((t, i) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleTag(t)}
                        aria-pressed={activeTags.has(t)}
                        className={`px-3 py-1 rounded-full text-xs border ${PALETTE[i % PALETTE.length]} ${activeTags.has(t) ? "ring-1 ring-brand3/60" : "hover:brightness-110"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </article>
              ))}

              {filtered.length === 0 && (
                <div className="rounded-2xl card p-6 text-sm opacity-80">No posts match your search or filters.</div>
              )}
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl card p-4 border border-white/10">
              <h2 className="font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {allTags.map((t, i) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTag(t)}
                    aria-pressed={activeTags.has(t)}
                    className={`px-3 py-1 rounded-full text-sm border ${PALETTE[i % PALETTE.length]} ${activeTags.has(t) ? "ring-1 ring-brand3/60" : "hover:brightness-110"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              {activeTags.size > 0 && (
                <button type="button" onClick={() => setActiveTags(new Set())} className="mt-3 text-sm opacity-80 underline hover:opacity-100">
                  Clear filters
                </button>
              )}
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
    </PageShell>
  );
}
