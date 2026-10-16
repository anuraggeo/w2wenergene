import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TECH_STEPS } from "../data/site.js";

const CARD_STYLE = [
  { text: "text-brand1", bg: "from-brand1/10 to-brand2/10 hover:from-brand1/20 hover:to-brand2/20", blurb: "Desilication, alkali roasting or flash Joule heating expose the REE-bearing phases." },
  { text: "text-brand2", bg: "from-brand2/10 to-brand3/10 hover:from-brand2/20 hover:to-brand3/20", blurb: "Acid-producing and redox-active microbes dissolve the critical metals." },
  { text: "text-brand3", bg: "from-brand3/10 to-brand1/10 hover:from-brand3/20 hover:to-brand1/20", blurb: "REEs are selectively recovered as oxalates or phosphates for refining." },
  { text: "text-emerald-400", bg: "from-emerald-400/10 to-cyan-400/10 hover:from-emerald-400/20 hover:to-cyan-400/20", blurb: "The carbonated residue locks CO₂ away as stable minerals." },
];

export default function Pipeline() {
  return (
    <section id="technology" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
          Four steps take coal ash from waste to recovered rare earths, with CO₂ locked into what is
          left over.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STEPS.map((s, i) => (
            <Link
              key={s.path}
              to={s.path}
              className={`group card rounded-2xl p-6 bg-gradient-to-br ${CARD_STYLE[i].bg} transition-all duration-300 hover:-translate-y-2`}
            >
              <p className={`text-sm font-semibold tracking-widest mb-2 ${CARD_STYLE[i].text}`}>STEP {s.step}</p>
              <h3 className="font-bold text-lg text-white mb-3">{s.name}</h3>
              <p className="text-sm opacity-80">{CARD_STYLE[i].blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm opacity-70 group-hover:opacity-100 transition">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
