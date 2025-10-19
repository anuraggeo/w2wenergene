import "./App.css";
import Hero from "./Components/Hero";
import KPIs from "./Components/KPIs";
import Pipeline from "./Components/Pipeline";
import Simulator from "./Components/Simulator";
import Contact from "./Components/Contact.jsx";

import { Link } from "react-router-dom";

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
              W2W <span className="text-brand1">Ener</span>
              <span className="text-brand3">Gene</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#contact">Contact</a>
            <a href="/updates" className="hover:opacity-100 opacity-80">Updates</a>
          </nav>
          <a href="/#contact"
             className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg">
            Get early access →
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* KPIs Section */}
      <KPIs />

      {/* Pipeline Section */}
      <Pipeline />

      {/* Simulator Section */}
      <section id="tech" className="py-14 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interactive technology sandbox</h2>
          <Simulator />
        </div>
      </section>
      <Contact />

      {/* Footer */}
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
           <Link to="/contact">Contact</Link>
            <a href="/updates.html">Updates</a>
          </div>
          <div className="opacity-60">
            © {new Date().getFullYear()} W2W EnerGene. All rights reserved.
          </div>
        </section>
              </footer>
    </div>
  );
}
