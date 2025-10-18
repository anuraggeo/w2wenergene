import React, { useState } from "react";
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
        pointRadius: 5,
        pointBackgroundColor: "#10B981",
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

  return (
    <section
      id="tech"
      style={{
        padding: "3rem 1rem",
        color: "white",
        background: "rgba(255,255,255,0.02)",
        borderRadius: "2rem",
        boxShadow: "0 0 30px rgba(0,224,255,0.08)",
        maxWidth: "1100px",
        margin: "4rem auto",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "1.5rem",
          background:
            "linear-gradient(90deg,#34d399,#22d3ee,#818cf8)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        ⚙️ Bioleaching Simulator
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        {/* Controls */}
        <div>
          <h4 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
            Adjust Parameters:
          </h4>

          <div style={{ marginTop: "1rem", lineHeight: "2.2rem" }}>
            <label>
              🧪 Pulp Density: {pulp}% <br />
              <input
                type="range"
                min="1"
                max="20"
                value={pulp}
                onChange={(e) => setPulp(+e.target.value)}
                className="w-full accent-emerald-400"
              />
            </label>
            <br />

            <label>
              ⚗️ pH: {pH.toFixed(1)} <br />
              <input
                type="range"
                min="1"
                max="6"
                step="0.1"
                value={pH}
                onChange={(e) => setPH(+e.target.value)}
                className="w-full accent-cyan-400"
              />
            </label>
            <br />

            <label>
              ⏱️ Time: {time} h <br />
              <input
                type="range"
                min="6"
                max="48"
                step="6"
                value={time}
                onChange={(e) => setTime(+e.target.value)}
                className="w-full accent-indigo-400"
              />
            </label>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              marginTop: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "1rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#00ffcc",
                }}
              >
                {recovery}%
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                Projected REE Recovery
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "1rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "#4b6fff",
                }}
              >
                {acidUse}
              </div>
              <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                kg Acid / t Ash
              </p>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
    </section>
  );
}
