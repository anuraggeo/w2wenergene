import React from "react";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0f12, #101820)",
        color: "white",
        fontFamily: "Inter, system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "rgba(17,24,39,0.6)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="/logo.png" alt="logo" height="32" width="32" />
          <h1 style={{ fontWeight: 800, fontSize: "1.25rem" }}>
            W2W <span style={{ color: "#10B981" }}>Ener</span>
            <span style={{ color: "#6366F1" }}>Gene</span>
          </h1>
        </div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <a href="#tech" style={{ opacity: 0.8 }}>
            Technology
          </a>
          <a href="#impact" style={{ opacity: 0.8 }}>
            Impact
          </a>
          <a href="#roadmap" style={{ opacity: 0.8 }}>
            Roadmap
          </a>
          <a href="#contact" style={{ opacity: 0.8 }}>
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            background:
              "linear-gradient(90deg,#34d399,#22d3ee,#818cf8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Turning Waste to Wealth with Engineered Microbes
        </h1>
        <p
          style={{
            marginTop: "1rem",
            maxWidth: "600px",
            marginInline: "auto",
            color: "#ccc",
          }}
        >
          W2W EnerGene builds bio-leaching and CO₂-locking bioprocesses to
          extract critical minerals (REEs, V, Ga, etc.) from coal fly ash and
          allied residues — enabling a circular, low-carbon economy.
        </p>
      </section>

      {/* Impact Section (example subset) */}
      <section id="impact" style={{ padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Impact Metrics</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "1rem",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>≥70%</h3>
            <p>REE Recovery</p>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "1rem",
              padding: "1rem",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>-40%</h3>
            <p>Acid Usage</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "3rem 2rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
          Let’s Collaborate
        </h2>
        <p style={{ maxWidth: "600px", color: "#ccc" }}>
          Looking to valorize ash dumps, reduce liabilities, or co-develop IP
          around bio-extraction? Contact us:
        </p>
        <div style={{ marginTop: "1rem" }}>
          <p>✉️ contact@w2wenergene.com</p>
          <p>📍 IIT Bombay, Mumbai</p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          textAlign: "center",
          padding: "1rem",
          opacity: 0.7,
        }}
      >
        © {new Date().getFullYear()} W2W EnerGene. All rights reserved.
      </footer>
    </main>
  );
}
