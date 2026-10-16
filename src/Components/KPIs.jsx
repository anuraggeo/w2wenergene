import { FaAtom, FaFlask, FaWater, FaCloud } from "react-icons/fa";
import CountUp from "./CountUp.jsx";

// basis: be precise about where each number comes from.
//   "Lab result"   – measured in your own bench trials
//   "Pilot target" – the goal you are designing the pilot for
//   "Estimate"     – a calculation or literature-based estimate, not yet measured
const KPIS = [
  { Icon: FaAtom, color: "text-brand2", end: 70, prefix: "", suffix: "%", label: "REE recovery in bench-scale bioleaching", basis: "Lab result" },
  { Icon: FaFlask, color: "text-brand1", end: 40, prefix: "−", suffix: "%", label: "Mineral acid use vs. conventional acid leaching", basis: "Pilot target" },
  { Icon: FaWater, color: "text-brand3", end: 80, prefix: ">", suffix: "%", label: "Process water recycled", basis: "Pilot target" },
  { Icon: FaCloud, color: "text-cyan-400", end: 250, prefix: "", suffix: " kg/t", label: "CO₂ locked per tonne of ash", basis: "Estimate" },
];

const BASIS_STYLE = {
  "Lab result": "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
  "Pilot target": "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  Estimate: "border-indigo-400/40 bg-indigo-400/10 text-indigo-200",
};

export default function KPIs() {
  return (
    <section id="impact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Impact metrics</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KPIS.map(({ Icon, color, end, prefix, suffix, label, basis }) => (
            <div key={label} className="card p-6 rounded-2xl glass flex flex-col items-center">
              <Icon className={`text-4xl mb-3 ${color}`} aria-hidden="true" />
              <p className="text-3xl font-bold">
                {prefix}
                <CountUp end={end} />
                {suffix}
              </p>
              <p className="mt-1 opacity-80 text-sm">{label}</p>
              <span className={`mt-3 rounded-full border px-2.5 py-0.5 text-xs ${BASIS_STYLE[basis]}`}>{basis}</span>
            </div>
          ))}
        </div>

        <p className="text-sm text-neutral-400 mt-6 max-w-3xl mx-auto">
          Lab results come from bench-scale trials at IIT Bombay (2025). Pilot targets are design goals
          and estimates are calculations; both will be replaced with measured values as the pilot runs.
        </p>
      </div>
    </section>
  );
}
