import { FaAtom, FaFlask, FaWater, FaCloud } from "react-icons/fa";
import CountUp from "react-countup";

export default function KPIs() {
  return (
    <section id="impact" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Impact Metrics</h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {/* 🔹 Glowing connector line (desktop view) */}
<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-brand1/30 via-brand2/40 to-brand3/30 animate-flowLine -z-10"></div>

          {/* 1️⃣ REE Recovery */}
          <div className="card p-6 rounded-2xl glass hover:shadow-lg transition-all bg-gradient-to-br from-brand1/10 to-brand2/10">
            <FaAtom className="text-4xl text-brand2 mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">
              <CountUp end={70} duration={2.5} />%
            </h3>
            <p className="opacity-80 text-sm">REE recovery (target pilot)</p>
          </div>

          {/* 2️⃣ Acid Reduction */}
          <div className="card p-6 rounded-2xl glass hover:shadow-lg transition-all bg-gradient-to-br from-brand3/10 to-brand1/10">
            <FaFlask className="text-4xl text-brand1 mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">
              -<CountUp end={40} duration={2.5} />%
            </h3>
            <p className="opacity-80 text-sm">Acid usage reduction</p>
          </div>

          {/* 3️⃣ Water Recycle */}
          <div className="card p-6 rounded-2xl glass hover:shadow-lg transition-all bg-gradient-to-br from-brand2/10 to-brand3/10">
            <FaWater className="text-4xl text-brand3 mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">
              &gt;<CountUp end={80} duration={2.5} />%
            </h3>
            <p className="opacity-80 text-sm">Water recycle efficiency</p>
          </div>

          {/* 4️⃣ CO₂ Locked */}
          <div className="card p-6 rounded-2xl glass hover:shadow-lg transition-all bg-gradient-to-br from-brand1/10 to-brand3/10">
            <FaCloud className="text-4xl text-cyan-400 mb-3 mx-auto" />
            <h3 className="text-3xl font-bold">
              <CountUp end={250} duration={2.5} /> kg/t
            </h3>
            <p className="opacity-80 text-sm">CO₂ locked (illustrative)</p>
          </div>

        </div>

        <p className="text-sm text-neutral-400 mt-6">
          *Measured in lab-scale bioleaching trials, IIT Bombay (2025)
        </p>
      </div>
    </section>
  );
}
