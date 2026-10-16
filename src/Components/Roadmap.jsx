// status: set to "Completed", "In progress" or "Upcoming" for each phase.
// Leave it as null to hide the badge.
const MILESTONES = [
  {
    title: "Phase 1 — Sample collection & characterisation",
    date: "Dec 2024 – Apr 2025",
    status: null,
    desc: "Collection of coal fly ash, bottom ash and acid mine drainage samples from major thermal power plants and coalfields, followed by mineralogical, geochemical and microbial characterisation.",
  },
  {
    title: "Phase 2 — Bioleaching optimisation",
    date: "May 2025 – Oct 2025",
    status: null,
    desc: "Isolation of indigenous microbes and optimisation of REE bioleaching parameters using both direct and indirect approaches.",
  },
  {
    title: "Phase 3 — Genetic engineering & consortia development",
    date: "Nov 2025 – Apr 2026",
    status: null,
    desc: "Enhancing acid production and metal mobilisation through genetic modification and microbial consortium design.",
  },
  {
    title: "Phase 4 — Pilot-scale testing & techno-economic evaluation",
    date: "May 2026 – 2027",
    status: null,
    desc: "Pilot-scale bioleaching and recovery of REEs from coal-based waste, integrated with CO₂ sequestration and a cost–benefit analysis.",
  },
];

const STATUS_STYLE = {
  Completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  "In progress": "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  Upcoming: "border-white/20 bg-white/5 text-neutral-300",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Roadmap</h2>

        <ol className="relative border-l border-brand2/40 pl-6 space-y-10">
          {MILESTONES.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[33px] top-6 w-4 h-4 rounded-full bg-gradient-to-r from-brand1 to-brand3 shadow-md" aria-hidden="true" />
              <div className="p-5 rounded-xl bg-neutral-900/60 border border-white/10 hover:border-brand2/50 transition-all">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-brand2">{m.title}</h3>
                  {m.status && (
                    <span className={`rounded-full border px-2.5 py-0.5 text-xs ${STATUS_STYLE[m.status]}`}>{m.status}</span>
                  )}
                </div>
                <p className="text-sm opacity-70 mt-1 mb-2">{m.date}</p>
                <p className="text-neutral-200">{m.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
