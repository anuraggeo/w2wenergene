import StepLayout from "../Components/StepLayout";

export default function Step4() {
  return (
    <StepLayout
      step="4"
      color="#00ffcc"
      icon="🌿"
      title="CO₂ Sequestration and Carbonate Formation"
      next={null}
    >
      <p>
        Post-bioleaching, residual minerals and dissolved carbon are converted into stable carbonates via microbial activity,
        achieving carbon capture and pH neutralization simultaneously.
      </p>

      <div style={{ marginTop: "1.5rem", display: "grid", gap: "1rem" }}>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0fc" }}>🌍 Carbonate Precipitation</h3>
          <p>Microbes induce Ca-Mg carbonate formation, permanently fixing CO₂ as solid minerals.</p>
        </div>
        <div style={{ background: "#122", padding: "1rem", borderRadius: "0.5rem" }}>
          <h3 style={{ color: "#0fc" }}>🔄 Circular Utilization</h3>
          <p>CO₂ from combustion gases or fermentation reused in carbonation reactors.</p>
        </div>
      </div>
    </StepLayout>
  );
}
