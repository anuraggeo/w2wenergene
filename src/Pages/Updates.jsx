export default function Updates() {
  const updates = [
    {
      date: "Oct 2025",
      title: "Class-C Fly Ash sampling at NLCIL",
      desc: "Field sampling campaign successfully completed at Neyveli New TPS, Tamil Nadu. Microbial isolates collected for analysis."
    },
    {
      date: "Sep 2025",
      title: "Initial REE bioleaching success",
      desc: "Achieved 62% REE recovery using mixed heterotrophic consortium under controlled pH conditions."
    },
    {
      date: "Aug 2025",
      title: "Coal & AMD samples characterization",
      desc: "XRD, ICP-MS, and SEM-EDS completed for Bokaro & Durgapur fly ash samples."
    }
  ];

  return (
    <section className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 grad-text">Latest Updates</h1>
        <ul className="space-y-8">
          {updates.map((u, i) => (
            <li key={i} className="border-l-4 border-brand1 pl-4">
              <p className="text-sm text-neutral-400">{u.date}</p>
              <h2 className="text-xl font-semibold mt-1">{u.title}</h2>
              <p className="text-neutral-300 mt-1">{u.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
