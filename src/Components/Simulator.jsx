import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Particles from "react-tsparticles";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function Simulator() {
  const [pulp, setPulp] = useState(5);
  const [pH, setPH] = useState(3);
  const [time, setTime] = useState(24);
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  // Computation logic
  const recovery = Math.max(
    0,
    Math.min(95, 50 + time * 0.8 - Math.abs(pH - 2.5) * 8 - (pulp - 5) * 2)
  ).toFixed(1);

  const acidUse = Math.max(
    5,
    20 + pulp * 1.2 + Math.abs(pH - 2.0) * 4 - time * 0.1
  ).toFixed(1);

  // Chart data
  const chartData = {
    labels: ["0h", "6h", "12h", "18h", "24h", "36h", "48h"],
    datasets: [
      {
        label: "Projected REE Recovery (%)",
        data: [15, 28, 45, 58, Number(recovery), Number(recovery) + 4, 98],
        borderColor: "#00E0FF",
        backgroundColor: "rgba(0,224,255,0.1)",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointRadius: 6,
        pointBackgroundColor: "#00ffff",
        pointBorderColor: "#00ffff",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#00ffff",
        pointHoverBorderColor: "#00ffff",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#ddd" } },
    },
    scales: {
      x: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  // Glow animation on slider move
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.classList.add("glow-flash");
      setTimeout(() => canvas.classList.remove("glow-flash"), 600);
    }
  }, [pulp, pH, time]);

  // Tooltip text
  const tooltips = {
    pulp: "Solid–liquid ratio in leaching.",
    ph: "Acidic strength influencing REE solubility.",
    time: "Duration of bioleaching reaction.",
  };

  return (
    <section
  id="tech"
  style={{
    padding: "4rem 2rem",
    color: "white",
    background: "rgba(255,255,255,0.02)",
    borderRadius: "2rem",
    boxShadow: "0 0 40px rgba(0,224,255,0.08)",
    maxWidth: "1200px",
    margin: "5rem auto",
    textAlign: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>

      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "1.5rem",
          background: "linear-gradient(90deg,#34d399,#22d3ee,#818cf8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        ⚙️ Bioleaching Simulator
      </h2>

      <div
  className="simulator-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
    placeItems: "center",
    maxWidth: "1000px",
    width: "100%",
    overflow: "hidden",
  }}
>
  <style>
    {`
      /* ✅ Ensures layout stays horizontal on desktop, vertical only on phones */
      @media (max-width: 768px) {
        .simulator-grid {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 1.5rem !important;
          width: 100% !important;
          overflow-x: hidden !important;
        }
        .chart-container {
          max-width: 95% !important;
          height: auto !important;
        }
      }

      /* ✅ Prevent entire page from scrolling sideways */
      html, body {
        overflow-x: hidden !important;
      }
    `}
  </style>



        {/* Controls */}
        <div>
          <h4 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            Adjust Parameters:
          </h4>

          <div style={{ marginTop: "1rem", lineHeight: "2.2rem" }}>
            {/* Pulp Density */}
            <div className="slider-label">
              🧪 <b>Pulp Density:</b> {pulp}%{" "}
              <div
                className="tooltip-wrapper"
                onMouseEnter={() => setHoveredTooltip("pulp")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <span className="tooltip-icon text-emerald-400">ⓘ</span>
                {hoveredTooltip === "pulp" && (
                  <div className="tooltip-box tooltip-visible">
                    {tooltips.pulp}
                  </div>
                )}
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={pulp}
              onChange={(e) => setPulp(+e.target.value)}
              className="w-full accent-emerald-400"
            />

            {/* pH */}
            <div className="slider-label">
              ⚗️ <b>pH:</b> {pH.toFixed(1)}{" "}
              <div
                className="tooltip-wrapper"
                onMouseEnter={() => setHoveredTooltip("ph")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <span className="tooltip-icon text-cyan-400">ⓘ</span>
                {hoveredTooltip === "ph" && (
                  <div className="tooltip-box tooltip-visible">
                    {tooltips.ph}
                  </div>
                )}
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              step="0.1"
              value={pH}
              onChange={(e) => setPH(+e.target.value)}
              className="w-full accent-cyan-400"
            />

            {/* Time */}
            <div className="slider-label">
              ⏱️ <b>Time:</b> {time} h{" "}
              <div
                className="tooltip-wrapper"
                onMouseEnter={() => setHoveredTooltip("time")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <span className="tooltip-icon text-indigo-400">ⓘ</span>
                {hoveredTooltip === "time" && (
                  <div className="tooltip-box tooltip-visible">
                    {tooltips.time}
                  </div>
                )}
              </div>
            </div>
            <input
              type="range"
              min="6"
              max="48"
              step="6"
              value={time}
              onChange={(e) => setTime(+e.target.value)}
              className="w-full accent-indigo-400"
            />
          </div>

          {/* KPI Boxes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
              textAlign: "center",
            }}
          >
            <div className="kpi-card">
              <div className="kpi-value" style={{ color: "#00ffcc" }}>
                {recovery}%
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                Projected REE Recovery
              </p>
            </div>

            <div className="kpi-card">
              <div className="kpi-value" style={{ color: "#4b6fff" }}>
                {acidUse}
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                kg Acid / t Ash
              </p>
            </div>
          </div>
        </div>

      {/* Chart */}
<div
  className="chart-container"
  style={{
    width: "100%",
    maxWidth: "480px", // match width of parameter block
    height: "400px",   // adjust height for balance
    margin: "0 auto",  // centers it neatly
  }}
>
  {/* Particle Background Behind Insights */}
<div style={{ position: "relative", marginTop: "2rem" }}>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "200px",
      zIndex: 0,
      opacity: 0.5,
    }}
  >
    {/* Animated microbial/particle effect */}
    <Particles
      id="bioParticles"
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 25, density: { enable: true, value_area: 800 } },
          color: { value: ["#22d3ee", "#34d399", "#818cf8"] },
          shape: { type: "circle" },
          opacity: { value: 0.4 },
          size: { value: { min: 2, max: 5 } },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 80 } },
        },
        detectRetina: true,
      }}
    />
  </div>

  {/* Insight Cards */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "1.2rem",
      marginTop: "1rem",
    }}
  >
    <div
      className="insight-card"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(0,255,200,0.2)",
        borderRadius: "1rem",
        padding: "0.3rem 0.7rem",
        textAlign: "center",
        transition: "all 0.3s ease",
        width: "200px",
        fontSize: "0.65rem",
        boxShadow:
          pH < 3
            ? "0 0 15px rgba(56,189,248,0.6)"
            : "0 0 10px rgba(56,189,248,0.1)",
      }}
    >
      <h4
        style={{
          fontSize: "1rem",
          color: "#22d3ee",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        🧪 Acid Strength Insight
      </h4>
      <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.4rem" }}>
        Lower pH enhances REE solubilization but increases acid consumption.
      </p>
    </div>

    <div
      className="insight-card"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(129,140,248,0.2)",
        borderRadius: "1rem",
        padding: "0.3rem 0.7rem",
        textAlign: "center",
        transition: "all 0.3s ease",
         width: "200px",
        fontSize: "0.65rem",
        boxShadow:
          pulp > 10
            ? "0 0 15px rgba(129,140,248,0.6)"
            : "0 0 10px rgba(129,140,248,0.1)",
      }}
    >
      <h4
        style={{
          fontSize: "1rem",
          color: "#818cf8",
          fontWeight: 600,
          marginBottom: "0.5rem",
        }}
      >
        ⚙️ Pulp Density Insight
      </h4>
      <p style={{ color: "#aaa", fontSize: "0.9rem", lineHeight: "1.4rem" }}>
        Higher pulp density reduces acid use but limits REE diffusion and yield.
      </p>
    </div>
  </div>
</div>
  <Line data={chartData} options={chartOptions} />
</div>
      </div>
    </section>
  );
}
