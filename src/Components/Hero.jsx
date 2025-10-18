export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[80vh] flex items-center justify-center">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60 brightness-110 contrast-105"
        src="/hero-loop.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/10 via-[#0b0f14]/30 to-[#0b0f14]/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Turning{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            waste to wealth
          </span>{" "}
          with engineered microbes
        </h1>
        <p className="mt-4 text-neutral-200 text-lg">
          Bioprocessing coal fly ash to extract rare earth elements and lock CO₂ — merging green technology with resource recovery.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#tech"
            className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl"
          >
            Explore Technology →
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-xl"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
