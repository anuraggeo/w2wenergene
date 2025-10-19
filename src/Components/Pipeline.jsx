import React from "react";
import { ArrowRight } from "lucide-react";

export default function Pipeline() {
  return (
    <section id="steps" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Process Pipeline</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
          A stepwise transformation from coal ash to rare-earth recovery and CO₂ locking.
        </p>

        

        {/* 🔹 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          <a href="/step1"
             className="group card rounded-2xl p-6 bg-gradient-to-br from-brand1/10 to-brand2/10 hover:from-brand1/20 hover:to-brand2/20 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 text-brand1">STEP 1</h3>
            <p className="font-bold text-white mb-3">Pretreatment & Activation</p>
            <p className="text-sm opacity-80">Desilication, alkali roasting, or FJH to expose REE-bearing phases.</p>
            <ArrowRight className="mt-4 mx-auto opacity-60 group-hover:opacity-100 transition" />
          </a>

          <a href="/step2"
             className="group card rounded-2xl p-6 bg-gradient-to-br from-brand2/10 to-brand3/10 hover:from-brand2/20 hover:to-brand3/20 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 text-brand2">STEP 2</h3>
            <p className="font-bold text-white mb-3">Bioleaching</p>
            <p className="text-sm opacity-80">Acid-producing and redox-active microbes solubilize critical metals.</p>
            <ArrowRight className="mt-4 mx-auto opacity-60 group-hover:opacity-100 transition" />
          </a>

          <a href="/step3"
             className="group card rounded-2xl p-6 bg-gradient-to-br from-brand3/10 to-brand1/10 hover:from-brand3/20 hover:to-brand1/20 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 text-brand3">STEP 3</h3>
            <p className="font-bold text-white mb-3">Precipitation</p>
            <p className="text-sm opacity-80">REEs selectively recovered as oxalates or phosphates for refining.</p>
            <ArrowRight className="mt-4 mx-auto opacity-60 group-hover:opacity-100 transition" />
          </a>

          <a href="/step4"
             className="group card rounded-2xl p-6 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 hover:from-emerald-400/20 hover:to-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">STEP 4</h3>
            <p className="font-bold text-white mb-3">CO₂ Sequestration</p>
            <p className="text-sm opacity-80">Carbonated residues locked as stable minerals — circular economy realized.</p>
            <ArrowRight className="mt-4 mx-auto opacity-60 group-hover:opacity-100 transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
