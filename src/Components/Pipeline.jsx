// src/Components/Pipeline.jsx
const nodes = [
  { id: 1, title: "Activation", href: "/step1", color: "from-emerald-400 to-emerald-300" },
  { id: 2, title: "Bioleaching", href: "/step2", color: "from-cyan-400 to-cyan-300" },
  { id: 3, title: "Precipitation", href: "/step3", color: "from-indigo-400 to-indigo-300" },
  { id: 4, title: "CO₂ Sequestration", href: "/step4", color: "from-teal-300 to-emerald-300" },
];

export default function Pipeline() {
  return (
    <section id="steps" className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Process steps</h2>
        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {nodes.map((n, i) => (
            <div key={n.id} className="flex items-center gap-4">
              <a href={n.href}
                 className={`rounded-2xl px-5 py-5 bg-gradient-to-r ${n.color} text-slate-900 font-semibold shadow-lg hover:shadow-xl`}>
                STEP-{n.id} · {n.title}
              </a>
              {i < nodes.length - 1 && (
                <div className="hidden md:block w-10 h-[2px] bg-white/20 relative">
                  <div className="absolute -right-1 -top-1 rotate-45 w-3 h-3 bg-white/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
