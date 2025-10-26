import React, { useEffect, useState } from "react";

export default function Updates() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [tags, setTags] = useState([]);
  const [activeTags, setActiveTags] = useState(new Set());
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  // Fetch posts.json once
  useEffect(() => {
    fetch("/posts.json")
      .then((r) => r.json())
      .then((data) => {
        setAllPosts(data);
      });
  }, []);

  // Render tags + filter/sort whenever inputs change
  useEffect(() => {
    let filtered = [...allPosts];

    // Search filter
    const q = search.trim().toLowerCase();
    if (q) {
      filtered = filtered.filter((p) =>
        (p.title + " " + p.excerpt + " " + (p.tags || []).join(" "))
          .toLowerCase()
          .includes(q)
      );
    }

    // Tag filter
    if (activeTags.size > 0) {
      filtered = filtered.filter(
        (p) => p.tags && p.tags.some((t) => activeTags.has(t))
      );
    }

    // Sort
    filtered.sort((a, b) =>
      sort === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    setFilteredPosts(filtered);

    // Generate unique tags
    const allTags = Array.from(new Set(allPosts.flatMap((p) => p.tags || [])));
    setTags(allTags.sort());
  }, [allPosts, search, sort, activeTags]);

  const toggleTag = (tag) => {
    const newTags = new Set(activeTags);
    if (newTags.has(tag)) newTags.delete(tag);
    else newTags.add(tag);
    setActiveTags(newTags);
  };

  const clearTags = () => setActiveTags(new Set());

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      <div className="grid-bg absolute inset-0 opacity-5 pointer-events-none" />
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="W2W EnerGene" className="h-8 w-auto" />
            <a href="/" className="font-extrabold tracking-tight text-xl">
              W2W <span className="text-brand1">Ener</span>
              <span className="text-brand3">Gene</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#contact">Contact</a>
            <a href="/updates" className="text-brand2 font-semibold">
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
          Updates
        </h1>

        <div className="grid md:grid-cols-[1fr,280px] gap-8">
          {/* --- LEFT PANEL: POSTS --- */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
              <input
                className="w-full sm:w-96 rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
                placeholder="Search updates…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
                className="rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1 w-full sm:w-auto"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
            </div>

            <div className="space-y-4">
              {filteredPosts.map((p) => (
                <article
                  key={p.id}
                  className="rounded-2xl card p-5 hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <a
                      className="text-xl font-semibold hover:underline"
                      href={`/post?id=${encodeURIComponent(p.id)}`}
                    >
                      {p.title}
                    </a>
                    <time className="text-sm opacity-70">
                      {new Date(p.date).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="mt-2 opacity-90">{p.excerpt}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(p.tags || []).map((t) => (
                      <button
                        key={t}
                        onClick={() => toggleTag(t)}
                        className="px-3 py-1 rounded-full text-xs bg-brand1/10 border border-brand1/30 hover:bg-brand1/20"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* --- RIGHT PANEL: TAGS + RSS --- */}
          <aside>
            <div className="rounded-2xl card p-4">
              <h2 className="font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeTags.has(t)
                        ? "bg-brand3/20 border border-brand3/40"
                        : "bg-neutral-800 border border-white/10 hover:bg-white/5"
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

      {/* Footer */}
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
