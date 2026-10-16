import TechStep from "./TechStep.jsx";

export default function Step3() {
  return (
    <TechStep
      step={3}
      video="Precipitation"
      colorClass="text-brand3"
      buttonClass="bg-brand3 hover:bg-brand2"
      intro={
        <>
          The REE-rich solution from bioleaching is purified, and the metals are selectively recovered
          as oxalates or phosphates. Oxalic acid precipitation is the most common route; it yields
          high-purity REE oxalates that can be calcined to oxides.
        </>
      }
      points={[
        { icon: "🧮", label: "Reaction", text: <>2 REE³⁺ + 3 C₂O₄²⁻ → REE₂(C₂O₄)₃ ↓ (precipitate)</> },
        { icon: "🔍", label: "Selectivity", text: "Controlling pH at about 1.5–2 keeps calcium from interfering." },
        { icon: "🌡", label: "Outcome", text: "Around 95% of the dissolved REEs are recovered from solution, with little reagent use." },
      ]}
    />
  );
}
