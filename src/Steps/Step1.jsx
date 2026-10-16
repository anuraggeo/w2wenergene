import TechStep from "./TechStep.jsx";

export default function Step1() {
  return (
    <TechStep
      step={1}
      video="Pretreatment"
      colorClass="text-brand1"
      buttonClass="bg-brand1 hover:bg-brand2"
      intro={
        <>
          Pretreatment makes rare earth elements easier to reach by breaking down the glassy
          aluminosilicate matrix that locks them inside coal fly ash. Thermal and chemical activation,
          such as desilication, alkali roasting or flash Joule heating (FJH), exposes the mineral
          phases that contain REEs.
        </>
      }
      points={[
        { icon: "⚙️", label: "Desilication", text: "NaOH or KOH treatment dissolves amorphous silica and increases porosity." },
        { icon: "🔥", label: "FJH or roasting", text: "Rapid heating to around 1000 °C converts REE-bearing glassy phases into crystalline oxides." },
        { icon: "🧪", label: "Outcome", text: "REEs become roughly two to three times more accessible for the leaching step." },
      ]}
    />
  );
}
