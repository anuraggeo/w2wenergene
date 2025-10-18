import StepLayout from "../components/StepLayout";

export default function Step3() {
  return (
    <StepLayout
      step="3"
      color="#4b6fff"
      icon="⚗️"
      title="Precipitation and Recovery"
      next={{ path: "/step4", label: "CO₂ Sequestration" }}
    >
      <p>
        Once REEs are in solution, they are selectively precipitated into pure phases using chemical or biological methods.
      </p>

      <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#4b6fff" }}>🔹 Bioprecipitation</h3>
          <p>Microbial metabolism drives localized pH rise, causing REE carbonate or oxalate precipitation.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#4b6fff" }}>🔹 Solvent Extraction / D2EHPA</h3>
          <p>Organic extractants selectively bind REEs over base metals for purification.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#4b6fff" }}>🔹 Advanced Materials</h3>
          <p>MOFs, membranes, and ionic liquids offer reusable, green separation approaches.</p>
        </div>
      </div>
    </StepLayout>
  );
}
