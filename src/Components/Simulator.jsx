import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

// ---------------------------------------------------------------------------
// ILLUSTRATIVE MODEL — not fitted to experimental data.
// It only shows the direction of the trade-offs (pH, pulp density, time).
// Replace the constants with values fitted to your own bench data when ready.
// ---------------------------------------------------------------------------
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

// Recovery levels off over time: R(t) = Rmax · (1 − e^(−k·t))
function recoveryAt(t, pH, pulp) {
  const rMax = clamp(80 - 9 * Math.abs(pH - 2.5) - 1.4 * Math.max(0, pulp - 5) + 0.6 * Math.max(0, 5 - pulp), 5, 90);
  const k = Math.max(0.015, 0.05 - 0.006 * Math.abs(pH - 2.5)); // per hour
  return rMax * (1 - Math.exp(-k * t));
}

// Lower pH needs more acid; denser slurries need less acid per tonne of ash.
function acidDemand(pH, pulp) {
  return 8 + 18 * Math.pow(Math.max(0, 3.5 - pH), 1.2) * Math.pow(5 / pulp, 0.3);
}

const HOURS = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72];

function Slider({ id, label, value, display, help, min, max, step, onChange, accent }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="font-semibold">
          {label}
        </label>
        <output htmlFor={id} className="tabular-nums text-neutral-200">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`mt-2 w-full ${accent}`}
      />
      <p className="text-xs text-neutral-400">{help}</p>
    </div>
  );
}

export default function Simulator() {
  const [pulp, setPulp] = useState(5);
  const [pH, setPH] = useState(2.5);
  const [time, setTime] = useState(48);

  const recovery = recoveryAt(time, pH, pulp);
  const acid = acidDemand(pH, pulp);
  const curve = HOURS.map((h) => Number(recoveryAt(h, pH, pulp).toFixed(1)));
  const selected = HOURS.indexOf(time);

  const chartData = {
    labels: HOURS.map((h) => `${h} h`),
    datasets: [
      {
        label: "Modelled REE recovery (%)",
        data: curve,
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.12)",
        borderWidth: 3,
        tension: 0.3,
        fill: true,
        pointRadius: HOURS.map((_, i) => (i === selected ? 7 : 3)),
        pointBackgroundColor: HOURS.map((_, i) => (i === selected ? "#34d399" : "#22d3ee")),
        pointBorderColor: HOURS.map((_, i) => (i === selected ? "#ffffff" : "#22d3ee")),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 300 },
    plugins: { legend: { labels: { color: "#ddd" } } },
    scales: {
      x: { ticks: { color: "#aaa", maxRotation: 0, autoSkip: true }, grid: { color: "rgba(255,255,255,0.05)" } },
      y: { min: 0, max: 100, ticks: { color: "#aaa" }, grid: { color: "rgba(255,255,255,0.05)" } },
    },
  };

  return (
    <div className="card rounded-3xl p-5 sm:p-8 text-left shadow-[0_0_40px_rgba(0,224,255,0.08)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-2xl font-bold grad-text">Bioleaching simulator</h3>
        <span className="rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
          Illustrative model, not experimental data
        </span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 items-start">
        <div className="space-y-6">
          <Slider
            id="sim-pulp"
            label="Pulp density"
            value={pulp}
            display={`${pulp}%`}
            help="Solid-to-liquid ratio in the leach."
            min={1}
            max={20}
            step={1}
            onChange={setPulp}
            accent="accent-emerald-400"
          />
          <Slider
            id="sim-ph"
            label="pH"
            value={pH}
            display={pH.toFixed(1)}
            help="Acid strength, which controls how readily REEs dissolve."
            min={1}
            max={6}
            step={0.1}
            onChange={setPH}
            accent="accent-cyan-400"
          />
          <Slider
            id="sim-time"
            label="Leaching time"
            value={time}
            display={`${time} h`}
            help="How long the microbes work on the ash."
            min={6}
            max={72}
            step={6}
            onChange={setTime}
            accent="accent-indigo-400"
          />

          <div className="grid grid-cols-2 gap-4 text-center" aria-live="polite">
            <div className="kpi-card">
              <div className="kpi-value text-emerald-300">{recovery.toFixed(1)}%</div>
              <p className="text-sm opacity-70">Modelled REE recovery</p>
            </div>
            <div className="kpi-card">
              <div className="kpi-value text-indigo-300">{acid.toFixed(0)}</div>
              <p className="text-sm opacity-70">kg acid / t ash</p>
            </div>
          </div>
        </div>

        <div className="h-72 sm:h-80 lg:h-96 w-full">
          <Line data={chartData} options={chartOptions} aria-label="Modelled REE recovery over time" role="img" />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className={`rounded-2xl border p-4 transition ${pH < 3 ? "border-cyan-400/50 bg-cyan-400/5" : "border-white/10"}`}>
          <h4 className="font-semibold text-cyan-300">Acid strength</h4>
          <p className="mt-1 text-sm text-neutral-300">
            Lower pH dissolves REEs faster but uses more acid. The aim is the mildest pH that still
            gives good recovery.
          </p>
        </div>
        <div className={`rounded-2xl border p-4 transition ${pulp > 10 ? "border-indigo-400/50 bg-indigo-400/5" : "border-white/10"}`}>
          <h4 className="font-semibold text-indigo-300">Pulp density</h4>
          <p className="mt-1 text-sm text-neutral-300">
            Denser slurries treat more ash per batch and use less acid per tonne, but slow down
            diffusion and lower the final yield.
          </p>
        </div>
      </div>
    </div>
  );
}
