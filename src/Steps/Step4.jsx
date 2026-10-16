import TechStep from "./TechStep.jsx";

export default function Step4() {
  return (
    <TechStep
      step={4}
      video="CCS"
      colorClass="text-emerald-400"
      buttonClass="bg-gradient-to-r from-brand1 to-brand2 hover:shadow-lg"
      intro={
        <>
          The final residue is rich in calcium and magnesium, so it can capture CO₂ as stable
          carbonates such as calcite and magnesite. This mineral carbonation stores CO₂ permanently and
          turns the residue into a lower-carbon raw material for construction.
        </>
      }
      points={[
        { icon: "🌿", label: "Mechanism", text: "CaO / MgO + CO₂ → CaCO₃ / MgCO₃ (solid carbonates)" },
        { icon: "🏗", label: "Applications", text: "Carbonated ash can be reused in green cement or bricks." },
        { icon: "🌍", label: "Impact", text: "An estimated up to 250 kg of CO₂ locked per tonne of ash, to be confirmed at pilot scale." },
      ]}
    />
  );
}
