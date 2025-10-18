import "./App.css";
import Hero from "./Components/Hero";
import KPIs from "./Components/KPIs";
import Pipeline from "./Components/Pipeline";
import Simulator from "./Components/Simulator";

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
      <section id="tech" className="py-14 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Interactive technology sandbox</h2>
          <Simulator />
        </div>
      </section>
      <section id="contact" className="py-14">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start px-6">
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">Let’s collaborate</h2>
      <p className="text-neutral-300/90 mb-5">
        Looking to valorize ash dumps, reduce liabilities, or co-develop bio-extraction and mineral carbonation IP?
      </p>
      <p className="text-sm opacity-80">✉️ <a href="mailto:contact@w2wenergene.com" className="underline decoration-brand1/40 underline-offset-2">contact@w2wenergene.com</a></p>
      <p className="text-sm opacity-80">☎️ +91-9511444574</p>
      <p className="text-sm opacity-80">📍 IIT Bombay, Mumbai</p>
    </div>

    <form name="contact" method="POST" data-netlify="true" className="rounded-3xl card p-6 space-y-4">
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label className="text-sm opacity-80">Name</label>
        <input name="name" required className="mt-1 w-full rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"/>
      </div>
      <div>
        <label className="text-sm opacity-80">Email</label>
        <input name="email" type="email" required className="mt-1 w-full rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"/>
      </div>
      <div>
        <label className="text-sm opacity-80">Organization</label>
        <input name="org" className="mt-1 w-full rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"/>
      </div>
      <div>
        <label className="text-sm opacity-80">Message</label>
        <textarea name="message" rows="4" className="mt-1 w-full rounded-xl bg-neutral-800 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"></textarea>
      </div>
      <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg">
        Send message →
      </button>
      <p className="text-xs opacity-60">This form is processed by W2W EnerGene.</p>
    </form>
  </div>
</section>
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
            <a href="/#contact">Contact</a>
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
