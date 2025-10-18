import StepLayout from "../components/StepLayout";

export default function Step2() {
  return (
    <StepLayout
      step="2"
      color="#00e0ff"
      icon="🧫"
      title="Bioleaching – Microbial Dissolution"
      next={{ path: "/step3", label: "Precipitation" }}
    >
      <p>
        Microorganisms catalyze the dissolution of trace and major elements in coal-ash leachates,
        producing organic and inorganic acids that mobilize REEs into solution.
      </p>

      <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0ff" }}>🧬 Acid-producing Bacteria</h3>
          <p>Species such as <em>Gluconobacter</em> and <em>Acetobacter</em> generate gluconic and acetic acids.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0ff" }}>⚗️ Indirect Leaching</h3>
          <p>Organic acids solubilize metals while cells remain immobilized — reusable bio-reagents.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0ff" }}>🌡️ Controlled Conditions</h3>
          <p>pH 2–3, 30 °C – 35 °C, gentle aeration for maximal bioactivity.</p>
        </div>
      </div>
    </StepLayout>
  );
}
