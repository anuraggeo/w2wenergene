import React from "react";

export default function People() {
  const team = [
    {
      name: "Prof. George Mathew",
      role: "Professor & PhD Guide",
      affiliation: "Dept. of Earth Sciences, IIT Bombay",
      image: "/Images/george.jpeg",
      linkedin: "",
      scholar: "",
      email: "",
    },
    {
      name: "Anurag Singh Yadav",
      role: "PhD Research Scholar",
      affiliation: "MGWI Lab, IIT Bombay",
      image: "/Images/anurag.jpg", // Add your image here
      linkedin: "https://linkedin.com/",
      scholar: "https://scholar.google.com/",
      email: "mailto:contact@w2wenergene.com",
    },
    {
      name: "Priya Sonker",
      role: "PhD Research Scholar",
      affiliation: "MGWI Lab, IIT Bombay",
      image: "/Images/coguide.jpg",
      linkedin: "",
      scholar: "",
      email: "",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative">
      {/* background grid */}
      <div className="grid-bg" />

      {/* page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Our Team
        </h1>
        <p className="text-neutral-300 max-w-2xl mb-12">
          At W2W EnerGene, we combine geology, microbiology, and engineering to
          build sustainable waste-to-wealth solutions. Meet the people behind the
          innovation.
        </p>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="card rounded-2xl p-6 border border-white/10 hover:border-brand2/40 hover:shadow-lg hover:shadow-brand2/10 transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto border border-white/20 shadow-lg"
              />

              <h3 className="text-xl font-semibold text-center mt-4">
                {member.name}
              </h3>

              <p className="text-brand2 text-center text-sm">{member.role}</p>
              <p className="text-neutral-400 text-center text-sm mb-4">
                {member.affiliation}
              </p>

              {/* Social links */}
              <div className="flex justify-center gap-4 text-sm opacity-90 mt-2">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="hover:text-brand1"
                  >
                    LinkedIn
                  </a>
                )}
                {member.scholar && (
                  <a
                    href={member.scholar}
                    target="_blank"
                    className="hover:text-brand1"
                  >
                    Scholar
                  </a>
                )}
                {member.email && (
                  <a
                    href={member.email}
                    className="hover:text-brand1"
                  >
                    Email
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
