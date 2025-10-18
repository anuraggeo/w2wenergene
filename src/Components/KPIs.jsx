// src/Components/KPIs.jsx
import { useEffect, useState } from "react";

function useCountUp(target, ms = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const id = requestAnimationFrame(function tick(t) {
      const p = Math.min(1, (t - start) / ms);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(id);
  }, [target, ms]);
  return val;
}

export default function KPIs() {
  const rec = useCountUp(70);     // recovery %
  const acid = useCountUp(40);    // reduction %
  const water = useCountUp(80);
  const co2 = useCountUp(250);    // kg/t example

  const Card = ({ label, value, suffix }) => (
    <div className="card rounded-2xl p-5 hover:bg-white/5 transition">
      <div className="text-3xl font-bold">{value}{suffix}</div>
      <div className="opacity-70 mt-1 text-sm">{label}</div>
    </div>
  );

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card label="REE recovery (target pilot)" value={`≥ ${rec}`} suffix="%" />
        <Card label="Acid usage reduction" value={`-${acid}`} suffix="%" />
        <Card label="Water recycle" value={`>${water}`} suffix="%" />
        <Card label="CO₂ locked (illustrative)" value={co2} suffix=" kg/t" />
      </div>
    </section>
  );
}
