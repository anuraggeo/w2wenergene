import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #061017, #0a1a22)",
        color: "white",
        fontFamily: "Inter Tight, sans-serif",
        padding: "2rem",
      }}
    >
      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: "700",
          color: "#00e0ff",
        }}
      >
        Rare Earth Element Extraction from Coal Ash
      </h1>
      <p style={{ textAlign: "center", color: "#ccc", marginTop: "0.5rem" }}>
        From Waste to Wealth using Microbial Intelligence
      </p>

      {/* Process Flow */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          marginTop: "3rem",
        }}
      >
        {/* STEP 1 */}
        <StepBox
          color="#00ff88"
          title="STEP 1"
          subtitle="Activation of Coal Ash"
          path="/step1"
        />
        <Arrow color="#00ff88" />

        {/* STEP 2 */}
        <StepBox
          color="#00e0ff"
          title="STEP 2"
          subtitle="Bioleaching"
          path="/step2"
        />
        <Arrow color="#00e0ff" />

        {/* STEP 3 */}
        <StepBox
          color="#4b6fff"
          title="STEP 3"
          subtitle="Precipitation"
          path="/step3"
        />
        <Arrow color="#4b6fff" />

        {/* STEP 4 */}
        <StepBox
          color="#00ffcc"
          title="STEP 4"
          subtitle="CO₂ Sequestration"
          path="/step4"
        />
      </div>
    </div>
  );
}

/* --- StepBox Component --- */
function StepBox({ color, title, subtitle, path }) {
  return (
    <Link to={path} style={{ textDecoration: "none", width: "90%", maxWidth: "450px" }}>
      <div
        style={{
          border: `2px solid ${color}`,
          borderRadius: "12px",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.05)",
          textAlign: "center",
          boxShadow: `0 0 25px ${color}33`,
          transition: "all 0.3s ease",
        }}
        className="hoverable-step"
      >
        <h2 style={{ color, fontSize: "1.5rem", margin: 0 }}>{title}</h2>
        <p style={{ color: "white", fontSize: "1.1rem", marginTop: "0.3rem" }}>{subtitle}</p>
      </div>
    </Link>
  );
}

/* --- Arrow Component --- */
function Arrow({ color }) {
  return (
    <div style={{ fontSize: "2rem", color, textAlign: "center" }}>⬇️</div>
  );
}
