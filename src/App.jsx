import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f12, #101820)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter Tight, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🌍 W2W-EnerGene
      </h1>
      <p style={{ color: "#9fd", maxWidth: "600px" }}>
        Turning industrial waste into wealth using microbes and green
        technology. Explore the four steps of our innovation.
      </p>

      <div style={{ marginTop: "3rem", display: "grid", gap: "1rem" }}>
        <Link to="/step1">
          <button
            style={{
              background: "#00ff88",
              color: "#000",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Step 1 – Activation of Coal Ash
          </button>
        </Link>

        <Link to="/step2">
          <button
            style={{
              background: "#00e0ff",
              color: "#000",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Step 2 – Bioleaching
          </button>
        </Link>

        <Link to="/step3">
          <button
            style={{
              background: "#4b6fff",
              color: "#fff",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Step 3 – Precipitation
          </button>
        </Link>

        <Link to="/step4">
          <button
            style={{
              background: "#00ffcc",
              color: "#000",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Step 4 – CO₂ Sequestration
          </button>
        </Link>
      </div>
    </main>
  );
}
