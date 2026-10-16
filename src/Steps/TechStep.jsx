import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "../Components/SiteHeader.jsx";
import SiteFooter from "../Components/SiteFooter.jsx";
import BackgroundVideo from "../Components/BackgroundVideo.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { TECH_STEPS, getPageMeta } from "../data/site.js";

// Shared layout for the four technology pages.
export default function TechStep({ step, video, colorClass, buttonClass, intro, points }) {
  const info = TECH_STEPS[step - 1];
  const next = TECH_STEPS[step];
  usePageMeta(getPageMeta(info.path));

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <SiteHeader />
      <main className="relative flex-1 overflow-hidden">
        <BackgroundVideo src={`/videos/${video}.mp4`} poster={`/videos/${video}-poster.jpg`} />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 px-6 py-14 max-w-5xl mx-auto">
          <a
            href="/#technology"
            className="mb-10 inline-flex items-center gap-2 text-sm px-4 py-2 bg-neutral-900/70 rounded-xl hover:bg-neutral-800 transition"
          >
            <ArrowLeft size={16} /> Back to the process
          </a>

          <p className={`text-sm font-semibold tracking-widest ${colorClass}`}>STEP {step} OF {TECH_STEPS.length}</p>
          <h1 className={`mt-2 text-4xl sm:text-5xl font-extrabold ${colorClass}`}>{info.name}</h1>

          <p className="mt-6 text-lg max-w-4xl leading-relaxed text-neutral-200">{intro}</p>

          <ul className="mt-8 space-y-4 text-neutral-200 max-w-4xl">
            {points.map((p) => (
              <li key={p.label} className="rounded-xl bg-black/40 border border-white/10 p-4">
                <span aria-hidden="true">{p.icon}</span> <b>{p.label}:</b> {p.text}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            {next ? (
              <Link to={next.path} className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-neutral-900 transition ${buttonClass}`}>
                Next: {next.name} <ArrowRight size={16} />
              </Link>
            ) : (
              <a href="/#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-neutral-900 transition ${buttonClass}`}>
                Partner with us <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
