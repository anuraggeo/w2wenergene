// Home page
import PageShell from "./Components/PageShell.jsx";
import Hero from "./Components/Hero.jsx";
import WhyItMatters from "./Components/WhyItMatters.jsx";
import Pipeline from "./Components/Pipeline.jsx";
import KPIs from "./Components/KPIs.jsx";
import Simulator from "./Components/Simulator.jsx";
import Roadmap from "./Components/Roadmap.jsx";
import Contact from "./Components/Contact.jsx";
import usePageMeta from "./hooks/usePageMeta.js";
import { getPageMeta } from "./data/site.js";

export default function App() {
  usePageMeta(getPageMeta("/"));

  return (
    <PageShell current="/">
      <main>
        <Hero />
        <WhyItMatters />
        <Pipeline />
        <KPIs />

        <section id="simulator" className="py-14 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">Interactive technology sandbox</h2>
            <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-8">
              Move the sliders to see how pH, pulp density and time trade off against each other in
              bioleaching.
            </p>
            <Simulator />
          </div>
        </section>

        <Roadmap />
        <Contact />
      </main>
    </PageShell>
  );
}
