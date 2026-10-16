import { useState } from "react";
import { Linkedin, GraduationCap, Mail } from "lucide-react";
import PageShell from "./PageShell.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { getPageMeta } from "../data/site.js";

// Leave linkedin / scholar as "" until you have the real profile URL — empty links are hidden.
// Only list someone here once they have agreed to be shown as part of W2W EnerGene.
const TEAM = [
  {
    name: "Prof. George Mathew",
    role: "Professor",
    affiliation: "Dept. of Earth Sciences, IIT Bombay",
    image: "/Images/gmathew.jpg",
    linkedin: "",
    scholar: "",
    email: "gmathew@iitb.ac.in",
    bio: "Professor Mathew leads the Mineralogy, Geomicrobiology & Water–Rock Interaction Lab at IIT Bombay and has decades of experience in mineralogy, crystallography and geochemistry.",
  },
  {
    name: "Prof. Kiran Kondabagil",
    role: "Professor",
    affiliation: "Dept. of Biosciences & Bioengineering, IIT Bombay",
    image: "/Images/kk.jpg",
    linkedin: "",
    scholar: "",
    email: "kirankondabagil@iitb.ac.in",
    bio: "Prof. Kondabagil studies the origin and evolution of viruses, focusing on the molecular mechanisms of DNA replication, repair and packaging in giant viruses and bacteriophages. His work also spans environmental virology and how viruses shape natural ecosystems.",
  },
  {
    name: "Anurag Singh Yadav",
    role: "PhD Research Scholar",
    affiliation: "Geomicrobiology Lab, IIT Bombay",
    image: "/Images/anuragsy.jpeg",
    linkedin: "",
    scholar: "",
    email: "anurag.sy@iitb.ac.in",
    bio: "Anurag works on microbe-driven extraction of rare earth elements from coal-based wastes and on CO₂ mineralisation, building integrated waste-to-wealth workflows that combine geochemistry, microbiology and process design.",
  },
  {
    name: "Priya Sonker",
    role: "PhD Research Scholar",
    affiliation: "Geomicrobiology Lab, IIT Bombay",
    image: "/Images/psonker.jpeg",
    linkedin: "",
    scholar: "",
    email: "psonker@iitb.ac.in",
    bio: "Priya studies microbe–mineral interactions in bauxite residue (red mud), optimising bioleaching consortia and understanding how microbial processes can stabilise contaminants and pH while recovering critical metals.",
  },
];

function PersonCard({ person }) {
  const [showBio, setShowBio] = useState(false);

  return (
    <article className="card rounded-3xl p-8 border border-white/10 hover:border-brand2/60 transition-all duration-300 flex flex-col items-center text-center">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand1/30 via-brand2/30 to-brand3/30 blur-xl opacity-70" />
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          width="144"
          height="144"
          loading="lazy"
          className="relative w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border border-white/20 shadow-lg"
        />
      </div>

      <h2 className="mt-6 text-xl sm:text-2xl font-semibold">{person.name}</h2>
      <p className="mt-1 text-sm text-brand2">{person.role}</p>
      <p className="mt-1 text-sm text-neutral-400">{person.affiliation}</p>

      <p className={`mt-4 text-sm text-neutral-300 leading-relaxed ${showBio ? "" : "line-clamp-3"}`}>{person.bio}</p>
      <button
        type="button"
        className="mt-2 text-xs text-brand2 hover:underline"
        aria-expanded={showBio}
        onClick={() => setShowBio((v) => !v)}
      >
        {showBio ? "Show less" : "Read more"}
      </button>

      <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {person.linkedin && (
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 opacity-90 hover:text-brand1">
            <Linkedin size={14} /> LinkedIn
          </a>
        )}
        {person.scholar && (
          <a href={person.scholar} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 opacity-90 hover:text-brand1">
            <GraduationCap size={14} /> Scholar
          </a>
        )}
        {person.email && (
          <a href={`mailto:${person.email}`} className="inline-flex items-center gap-1 opacity-80 hover:text-brand1">
            <Mail size={14} /> {person.email}
          </a>
        )}
      </div>
    </article>
  );
}

export default function People() {
  usePageMeta(getPageMeta("/people"));

  return (
    <PageShell current="/people">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-brand2/40 bg-brand2/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand2">
            PEOPLE
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">The people behind W2W EnerGene</h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            We bring together geochemistry, geomicrobiology and molecular biology to turn mining and
            energy waste into a resource, and to lock away CO₂ in the process.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </main>
    </PageShell>
  );
}
