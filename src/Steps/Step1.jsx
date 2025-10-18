import StepLayout from "../Components/StepLayout";

export default function Step1() {
  return (
    <StepLayout
      step="1"
      color="#00ff88"
      icon="⚡"
      title="Activation of Coal Ash"
      next={{ path: "/step2", label: "Bioleaching" }}
    >
      <p>
        Coal ash is pretreated to enhance its reactivity and expose rare-earth-bearing phases.
        Activation breaks down aluminosilicate matrices and increases the leachable surface area.
      </p>

      <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0f0" }}>🔹 Alkali Activation</h3>
          <p>Utilizes NaOH/KOH to dissolve amorphous phases and form reactive gels.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0f0" }}>🔹 Acid Activation</h3>
          <p>Removes inert oxides, mobilizes Al/Fe, and increases REE accessibility.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0f0" }}>🔹 Sustainable Techniques</h3>
          <p>Includes green solvents, low-temperature hydrothermal activation, and NaOH-recycling systems.</p>
        </div>
      </div>
    </StepLayout>
  );
}
