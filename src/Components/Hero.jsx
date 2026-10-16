import BackgroundVideo from "./BackgroundVideo.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center justify-center py-20">
      <BackgroundVideo
        src="/hero-loop.mp4"
        poster="/hero-poster.jpg"
        className="opacity-60 brightness-110 contrast-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f14]/10 via-[#0b0f14]/40 to-[#0b0f14]/80" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="inline-flex rounded-2xl border border-white/15 bg-black/40 px-3 py-1 text-xs sm:text-sm text-neutral-200 backdrop-blur">
          Venture in formation · Built on doctoral research at IIT Bombay
        </p>
        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          Turning{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            waste to wealth
          </span>{" "}
          with engineered microbes
        </h1>
        <p className="mt-5 text-neutral-200 text-lg">
          We are developing microbial bioprocesses that recover rare earth elements from coal fly ash
          with less acid, and lock CO₂ into the leftover residue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href="#technology"
            className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:shadow-xl"
          >
            Explore the technology →
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold shadow-lg hover:shadow-xl"
          >
            Partner with us
          </a>
        </div>
      </div>
    </section>
  );
}
