// src/Components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/hero-loop.mp4" autoPlay muted loop playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/40 to-[#0b0f14]" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Turning <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            waste to wealth
          </span> with engineered microbes
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300/90">
          Bio-leaching and carbon-locking to recover critical minerals from coal fly ash and allied residues.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#steps" className="rounded-2xl px-5 py-3 bg-white text-slate-900 font-semibold shadow-lg ring-1 ring-white/20 hover:shadow-xl">
            See the process →
          </a>
          <a href="#contact" className="rounded-2xl px-5 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-xl">
            Partner with us
          </a>
        </div>
      </div>
    </section>
  );
}
