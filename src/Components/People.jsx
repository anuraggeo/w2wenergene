// src/Components/People.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Linkedin, GraduationCap, Mail } from "lucide-react";

export default function People() {
  const [activeBio, setActiveBio] = useState(null); // which card is showing bio

  const team = [
    {
      name: "Prof. George Mathew",
      role: "Professor & PhD Guide",
      affiliation: "Dept. of Earth Sciences, IIT Bombay",
      image: "/Images/gmathew.png",
      linkedin: "https://linkedin.com/",
      scholar: "https://scholar.google.com/",
      email: "mailto:gmathew@iitb.ac.in",
      bio: "Professor Mathew leads the Mineralogy, Geomicrobiology & Water–Rock Interaction Lab at IIT Bombay, with decades of experience in Mineralogy, Crystallography and Geochemistry.",
    },
    {
      name: "Anurag Singh Yadav",
      role: "PhD Research Scholar",
      affiliation: "Geomicrobiology Lab, IIT Bombay",
      image: "/Images/anuragsy.jpeg",
      linkedin: "https://linkedin.com/",
      scholar: "https://scholar.google.com/",
      email: "mailto:anurag.sy@iitb.ac.in",
      bio: "Anurag works on microbe-driven extraction of rare earth elements from coal-based wastes and CO₂-mineralisation, building integrated ‘waste-to-wealth’ workflows that couple geochemistry, microbiology and process design.",
    },
    {
      name: "Priya Sonker",
      role: "PhD Research Scholar",
      affiliation: "Geomicrobiology Lab, IIT Bombay",
      image: "/Images/psonker.jpeg",
      linkedin: "https://linkedin.com/",
      scholar: "https://scholar.google.com/",
      email: "mailto:psonker@iitb.ac.in",
      bio: "Priya focuses on microbe–mineral interactions in Bauxite residue(Red mud), optimising bioleaching consortia and understanding how microbial processes can stabilise contaminants and pH while recovering critical metals.",
    },
  ];

  const toggleBio = (name) => {
    setActiveBio((prev) => (prev === name ? null : name));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* background grid */}
      <div className="grid-bg" />

      {/* Header (same style as home) */}
      <header className="sticky top-0 z-40 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/Images/logo.png"
              alt="W2W EnerGene logo"
              className="h-8 w-auto"
            />
            <Link to="/" className="font-extrabold tracking-tight text-xl">
              W2W <span className="text-brand1">Ener</span>
              <span className="text-brand3">Gene</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <span className="text-brand2 font-semibold">People</span>
            <a href="/#contact">Contact</a>
            <Link to="/updates" className="hover:opacity-100 opacity-80">
              Updates
            </Link>
          </nav>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg"
          >
            Get early access →
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <span className="inline-flex rounded-full border border-brand2/40 bg-brand2/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand2">
            PEOPLE
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
            The team behind W2W EnerGene
          </h1>
          <p className="mt-4 text-neutral-300 max-w-3xl">
            We bring together expertise in geology, geomicrobiology, and
            environmental engineering to turn mining and energy waste into a
            resource — and lock CO₂ in the process.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-neutral-400">
            Tip: hover over a card (or tap on mobile) to see a short bio.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              onMouseEnter={() => setActiveBio(member.name)}
              onMouseLeave={() => setActiveBio(null)}
              onClick={() => toggleBio(member.name)} // mobile tap
              className="relative card rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-brand2/60 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand1/30 via-brand2/30 to-brand3/30 blur-xl opacity-70" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border border-white/20 shadow-lg"
                />
              </div>

              {/* Basic info */}
              <h3 className="mt-6 text-xl sm:text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-brand2">{member.role}</p>
              <p className="mt-1 text-xs sm:text-sm text-neutral-400">
                {member.affiliation}
              </p>

              {/* Links */}
              <div className="mt-6 flex flex-col gap-2 text-xs sm:text-sm">
                <div className="flex justify-center gap-5">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 opacity-90 hover:text-brand1 hover:opacity-100"
                    >
                      <Linkedin size={14} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {member.scholar && (
                    <a
                      href={member.scholar}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 opacity-90 hover:text-brand1 hover:opacity-100"
                    >
                      <GraduationCap size={14} />
                      <span>Scholar</span>
                    </a>
                  )}
                </div>
                {member.email && (
                  <div className="flex justify-center">
                    <a
                      href={member.email}
                      className="inline-flex items-center gap-1 opacity-80 hover:text-brand1 hover:opacity-100"
                    >
                      <Mail size={14} />
                      <span>{member.email.replace("mailto:", "")}</span>
                    </a>
                  </div>
                )}
              </div>

              {/* Hover / click bio overlay */}
              {activeBio === member.name && (
                <div className="absolute inset-0 rounded-3xl bg-neutral-950/95 backdrop-blur-sm flex items-center justify-center px-6 sm:px-8">
                  <p className="text-sm sm:text-base text-neutral-100 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer (same as home) */}
      <footer className="border-t border-white/5 mt-10">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-2xl bg-gradient-to-tr from-brand1 via-brand2 to-brand3" />
            <div className="font-bold">W2W EnerGene</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/#tech">Technology</a>
            <a href="/#impact">Impact</a>
            <a href="/#roadmap">Roadmap</a>
            <span className="text-brand2">People</span>
            <a href="/#contact">Contact</a>
            <Link to="/updates">Updates</Link>
          </div>
          <div className="opacity-60">
            © {new Date().getFullYear()} W2W EnerGene. All rights reserved.
          </div>
        </section>
      </footer>
    </div>
  );
}
