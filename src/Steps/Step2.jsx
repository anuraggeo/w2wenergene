import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Step2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-slate-900 text-neutral-100 px-6 py-16">
      <button onClick={() => navigate("/")} className="mb-10 flex items-center gap-2 text-sm px-4 py-2 bg-neutral-900/70 rounded-xl hover:bg-neutral-800 transition">
        <ArrowLeft size={16} /> Back to Process
      </button>

      <h1 className="text-5xl font-extrabold text-brand2 mb-4">Step 2 · Bioleaching</h1>
      <p className="text-lg max-w-4xl leading-relaxed text-neutral-300">
        Indigenous acid-producing microbes such as <i>Acidithiobacillus ferrooxidans</i> and
        <i> Gluconobacter oxydans</i> generate organic and inorganic acids that solubilize REEs from
        pretreated ash. The bioleaching process operates under mild, eco-friendly conditions and
        eliminates hazardous mineral acids.
      </p>

      <ul className="mt-8 space-y-4 text-neutral-300">
        <li>🧫 <b>Direct leaching:</b> Microbes adhere to particle surfaces and release protons and ligands that attack REE oxides.</li>
        <li>🧪 <b>Indirect leaching:</b> Metabolites (e.g., gluconic acid, citric acid) leach REEs without cell-surface contact.</li>
        <li>📈 <b>Efficiency:</b> Achieves ~70 % REE recovery within 48–72 h under pH 2.5–4.0 and 30 °C.</li>
      </ul>
      <div className="flex justify-center mt-16"></div>
      <Link
  to="/step3"
  className="mt-6 bg-brand2 text-neutral-900 px-6 py-2 rounded-xl font-semibold hover:bg-brand3 transition"
>
  Next Step →
</Link>
    </div>
  );
}

