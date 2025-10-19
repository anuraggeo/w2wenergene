import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Step3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-slate-950 text-neutral-100 px-6 py-16">
      <button onClick={() => navigate("/")} className="mb-10 flex items-center gap-2 text-sm px-4 py-2 bg-neutral-900/70 rounded-xl hover:bg-neutral-800 transition">
        <ArrowLeft size={16} /> Back to Process
      </button>

      <h1 className="text-5xl font-extrabold text-brand3 mb-4">Step 3 · Precipitation & Recovery</h1>
      <p className="text-lg max-w-4xl leading-relaxed text-neutral-300">
        The REE-rich leachate from bioleaching is purified and the metals are selectively recovered
        as oxalates or phosphates. Oxalic acid precipitation is the most common method, yielding
        high-purity REE oxalates that can be calcined to oxides.
      </p>

      <ul className="mt-8 space-y-4 text-neutral-300">
       <li>
  🧮 <b>Reaction:</b> REE³⁺ + 1.5 C₂O₄²⁻ &rarr; REE₂(C₂O₄)₃ &darr; (precipitate)
</li>
        <li>🔍 <b>Selectivity:</b> Calcium interference minimized by controlled pH (~1.5–2).</li>
        <li>🌡 <b>Outcome:</b> ~95 % REE recovery with minimal reagent consumption.</li>
      </ul>
      <div className="flex justify-center mt-16"></div>
      <Link
  to="/step4"
  className="mt-6 bg-brand3 text-neutral-900 px-6 py-2 rounded-xl font-semibold hover:bg-brand2 transition"
>
  Next Step →
</Link>
    </div>
  );
}

