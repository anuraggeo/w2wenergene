import { Link } from "react-router-dom";

export default function StepLayout({ step, color, icon, title, children, next }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f12, #101820)",
        color: "white",
        padding: "3rem 1rem",
        fontFamily: "Inter Tight, sans-serif",
      }}
    >
      {/* Step Header */}
      <div
        style={{
          borderLeft: `6px solid ${color}`,
          paddingLeft: "1rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", fontWeight: "700", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "2rem" }}>{icon}</span> {title}
        </h1>
        <p style={{ color: "#9fd", marginTop: "0.3rem" }}>Step {step}</p>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginTop: "2.5rem",
          border: `2px solid ${color}`,
          borderRadius: "1rem",
          padding: "2rem",
          maxWidth: "900px",
          marginInline: "auto",
          background: "rgba(255,255,255,0.03)",
          boxShadow: `0 0 20px ${color}33`,
        }}
      >
        {children}
      </div>

      {/* Navigation */}
      {next && (
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link to={next.path}>
            <button
              style={{
                background: color,
                color: "#000",
                border: "none",
                borderRadius: "8px",
                padding: "0.8rem 1.5rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Next → {next.label}
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
