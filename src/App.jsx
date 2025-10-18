import "./App.css";
import Hero from "./Components/Hero";
import KPIs from "./Components/KPIs";
import Pipeline from "./Components/Pipeline";
import Simulator from "./Components/Simulator"; // we'll use your existing component

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      <div className="grid-bg" />

      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="W2W EnerGene" className="h-8 w-auto" />
            <a className="font-extrabold tracking-tight text-xl">
              W2W <span className="text-brand1">Ener</span><span className="text-brand3">Gene</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="/#tech" className="hover:opacity-100 opacity-80">Technology</a>
            <a href="/#impact" className="hover:opacity-100 opacity-80">Impact</a>
            <a href="/#roadmap" className="hover:opacity-100 opacity-80">Roadmap</a>
            <a href="/#contact" className="hover:opacity-100 opacity-80">Contact</a>
            <a href="/updates.html" className="hover:opacity-100 opacity-80">Updates</a>
          </nav>

          <a href="/#contact"
             className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg">
            Get early access →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Turning <span className="grad-text">waste to wealth</span> with engineered microbes
            </h1>
            <p className="mt-4 text-neutral-300/90 max-w-prose">
              W2W EnerGene builds bio-leaching and CO₂-locking bioprocesses to extract critical minerals (REEs, V, Ga, more) from coal fly ash and allied residues — accelerating a circular, low-carbon economy.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/#tech" className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 hover:bg-neutral-700">⚛ See how it works</a>
              <a href="/#contact" className="inline-flex items-center gap-2 rounded-xl border border-brand1/50 px-4 py-2 hover:bg-brand1/10">🚀 Partner with us</a>
              <a href="/updates.html" className="inline-flex items-center gap-2 rounded-xl border border-brand3/50 px-4 py-2 hover:bg-brand3/10">📰 Updates</a>
            </div>
          </div>

          <div className="relative rounded-3xl card p-6 shadow-2xl">
            <p className="text-sm opacity-80">Live demo</p>
            {/* You can add a small animated chart or KPI here later */}
          </div>
        </div>
      </section>

      {/* Technology / Simulator */}
      <section id="tech" className="py-14 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interactive technology sandbox</h2>
          <Simulator />
        </div>
      </section>

      <section id="steps" className="py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <a href="/step1" className="card rounded-2xl p-5 hover:bg-white/5 transition">STEP-1 · Activation</a>
      <a href="/step2" className="card rounded-2xl p-5 hover:bg-white/5 transition">STEP-2 · Bioleaching</a>
      <a href="/step3" className="card rounded-2xl p-5 hover:bg-white/5 transition">STEP-3 · Precipitation</a>
      <a href="/step4" className="card rounded-2xl p-5 hover:bg-white/5 transition">STEP-4 · CO₂ sequestration</a>
    </div>
  </div>
</section>


      {/* Footer (short) */}
      <footer className="border-t border-white/5">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand1 via-brand2 to-brand3" />
            <div className="font-bold">W2W EnerGene</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#contact">Contact</a>
            <a href="/updates.html">Updates</a>
          </div>
          <div className="opacity-60">© {new Date().getFullYear()} W2W EnerGene. All rights reserved.</div>
        </section>
      </footer>
    </div>
  );
}
