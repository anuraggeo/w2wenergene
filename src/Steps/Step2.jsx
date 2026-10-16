import TechStep from "./TechStep.jsx";

export default function Step2() {
  return (
    <TechStep
      step={2}
      video="Bioleaching"
      colorClass="text-brand2"
      buttonClass="bg-brand2 hover:bg-brand3"
      intro={
        <>
          Acid-producing microbes such as <i>Acidithiobacillus ferrooxidans</i> and{" "}
          <i>Gluconobacter oxydans</i> generate organic and inorganic acids that dissolve REEs from
          pretreated ash. Bioleaching runs under mild conditions and cuts the need for hazardous
          mineral acids.
        </>
      }
      points={[
        { icon: "🧫", label: "Direct leaching", text: "Microbes attach to particle surfaces and release protons and ligands that attack REE oxides." },
        { icon: "🧪", label: "Indirect leaching", text: "Metabolites such as gluconic and citric acid leach REEs without the cells touching the surface." },
        { icon: "📈", label: "Efficiency", text: "Around 70% REE recovery within 48–72 h at pH 2.5–4.0 and 30 °C in bench-scale trials." },
      ]}
    />
  );
}
