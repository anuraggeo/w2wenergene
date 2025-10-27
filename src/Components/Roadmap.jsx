import React from "react";

export default function Roadmap() {
  const milestones = [
    {
      title: "Phase 1 — Sample Collection & Characterization",
      date: "Dec 2024 – Apr 2025",
      desc: "Collection of coal fly ash, bottom ash, and AMD samples from major thermal power plants and coalfields. Mineralogical, geochemical, and microbial characterization.",
    },
    {
      title: "Phase 2 — Bioleaching Optimization",
      date: "May 2025 – Oct 2025",
      desc: "Isolation of indigenous microbes and optimization of REE bioleaching parameters using both direct and indirect approaches.",
    },
    {
      title: "Phase 3 — Genetic Engineering & Consortia Development",
      date: "Nov 2025 – Apr 2026",
      desc: "Enhancement of acid-producing and metal-mobilizing capability through genetic modifications and microbial consortia design.",
    },
    {
      title: "Phase 4 — Pilot-scale Testing & Techno-economic Evaluation",
      date: "May 2026 – 2027",
      desc: "Pilot-scale bioleaching and recovery of REEs from coal-based waste, integrated with CO₂ sequestration and cost-benefit analysis.",
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative py-16 bg-neutral-950 text-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-10 text-center">
          Roadmap
        </h2>

        <div className="relative border-l border-brand2/40 pl-6 space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-[10px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-brand1 to-brand3 shadow-md"></div>

              {/* Content */}
              <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-brand2/50 transition-all">
                <h3 className="text-xl font-semibold text-brand2">
                  {m.title}
                </h3>
                <p className="text-sm opacity-70 mb-2">{m.date}</p>
                <p className="text-neutral-200">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
