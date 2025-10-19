import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Step1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-neutral-100 px-6 py-16">
      <button
        onClick={() => navigate("/")}
        className="mb-10 flex items-center gap-2 text-sm px-4 py-2 bg-neutral-900/70 rounded-xl hover:bg-neutral-800 transition"
      >
        <ArrowLeft size={16} /> Back to Process
      </button>

      <h1 className="text-5xl font-extrabold text-brand1 mb-4">Step 1 · Pretreatment & Activation</h1>
      <p className="text-lg max-w-4xl leading-relaxed text-neutral-300">
        The pretreatment phase enhances REE availability by breaking glassy aluminosilicate
        matrices that encapsulate REEs in coal fly ash. Thermal and chemical activation methods
        such as desilication, alkali roasting, or Flash Joule Heating (FJH) are employed to expose
        mineral phases containing REEs.
      </p>
      <ul className="mt-8 space-y-4 text-neutral-300">
        <li>⚙️ <b>Desilication:</b> NaOH or KOH treatment dissolves amorphous silica and increases porosity.</li>
        <li>🔥 <b>FJH or roasting:</b> Rapid heating up to ~1000 °C converts REE-bearing glassy phases to crystalline oxides.</li>
        <li>🧪 <b>Outcome:</b> Accessibility of REEs increases ~2–3× for subsequent leaching.</li>
      </ul>
      <div className="flex justify-center mt-16"></div>
      <Link
  to="/step2"
  className="mt-6 bg-brand1 text-neutral-900 px-6 py-2 rounded-xl font-semibold hover:bg-brand2 transition"
>
  Next Step →
</Link>
    </div>
  );
}
