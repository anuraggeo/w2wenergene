import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Step4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-neutral-100 px-6 py-16">
      <button onClick={() => navigate("/")} className="mb-10 flex items-center gap-2 text-sm px-4 py-2 bg-neutral-900/70 rounded-xl hover:bg-neutral-800 transition">
        <ArrowLeft size={16} /> Back to Process
      </button>

      <h1 className="text-5xl font-extrabold text-green-400 mb-4">Step 4 · CO₂ Sequestration & Circular Economy</h1>
      <p className="text-lg max-w-4xl leading-relaxed text-neutral-300">
        The final residue, enriched with calcium and magnesium, can capture CO₂ to form stable
        carbonates such as calcite and magnesite. This mineral carbonation process permanently
        stores CO₂ and turns the residue into a carbon-negative building material.
      </p>

      <ul className="mt-8 space-y-4 text-neutral-300">
        <li>🌿 <b>Mechanism:</b> CaO / MgO + CO₂ → CaCO₃ / MgCO₃ (solid carbonates)</li>
        <li>🏗 <b>Applications:</b> Carbonated ash can be reused in green cement or bricks.</li>
        <li>🌍 <b>Impact:</b> Locks 250 kg CO₂ per ton ash — creating value from waste.</li>
      </ul>
      <div className="flex justify-center mt-16"></div>
      <Link
  to="/"
  className="mt-6 bg-gradient-to-r from-brand1 to-brand2 text-neutral-900 px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition"
>
  ← Back to Main Page
</Link>
    </div>
  );
}

