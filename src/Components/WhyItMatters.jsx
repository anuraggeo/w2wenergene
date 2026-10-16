// "Why it matters" section. Every figure links to its public source — keep it that way when editing.
const FACTS = [
  {
    value: "300+ million t",
    text: "of coal ash is produced by India's thermal power plants every year. It goes mainly into cement, bricks, roads and fill, and the critical metals inside it are not recovered.",
    source: "Central Electricity Authority, Ash Generation & Utilisation Report 2024–25",
    href: "https://powerline.net.in/2026/03/26/report-on-ash-generation-and-utilization-for-grid-connected-thermal-power-stations-for-the-year-2024-25/",
  },
  {
    value: "Up to ~2,100 mg/kg",
    text: "of rare earth elements has been measured in Indian fly ash (Neyveli), with around 400 ppm in samples from other plants.",
    source: "Ministry of Coal, reply in Rajya Sabha, July 2025",
    href: "https://coal.nic.in/sites/default/files/2025-08/PIB2149191.pdf",
  },
  {
    value: "₹100 crore",
    text: "is set aside under India's National Critical Mineral Mission for pilot projects that recover critical minerals from fly ash, red mud, tailings and overburden.",
    source: "National Critical Mineral Mission, approved January 2025",
    href: "https://psuwatch.com/amp/story/newsupdates/what-does-fineprint-of-indias-national-critical-mineral-mission-ncmm-say",
  },
];

export default function WhyItMatters() {
  return (
    <section id="why" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Why coal ash, and why now</h2>
          <p className="mt-4 text-neutral-300">
            India produces coal ash at enormous scale and needs secure supplies of rare earths for
            magnets, electronics and clean energy. Recovering those metals from ash today usually
            takes strong mineral acids and high heat. We are developing a microbial route that uses
            less acid and leaves behind a residue that can store CO₂.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FACTS.map((f) => (
            <figure key={f.value} className="card rounded-2xl p-6 flex flex-col">
              <div className="text-3xl font-extrabold grad-text">{f.value}</div>
              <p className="mt-3 text-neutral-200 flex-1">{f.text}</p>
              <figcaption className="mt-4 text-xs text-neutral-400">
                Source:{" "}
                <a href={f.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-neutral-200">
                  {f.source}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
