// Site-wide settings and page metadata.
// Plain JavaScript (no JSX) so the build script in scripts/prerender.mjs can import it too.

export const SITE = {
  name: "W2W EnerGene",
  url: "https://www.w2wenergene.com", // no trailing slash
  tagline: "Waste to Wealth with Engineered Microbes",
  email: "contact@w2wenergene.com",
  phone: "+91-9511444574",
  location: "IIT Bombay, Powai, Mumbai",
  ogImage: "/og-image.png",

  // Where the contact form sends messages.
  // 1. Create a free form at https://formspree.io (or a similar service) that delivers to your inbox.
  // 2. Paste its endpoint here, e.g. "https://formspree.io/f/abcdwxyz".
  // You can also set VITE_FORM_ENDPOINT in Cloudflare Pages > Settings > Environment variables instead.
  // While this is empty, the form opens the visitor's email app with the message filled in.
  formEndpoint: "",

  // One honest line about the company's status. Update it after incorporation
  // (for example: "W2W EnerGene Private Limited · CIN U00000MH2026PTC000000").
  status: "W2W EnerGene is a venture in formation, built on doctoral research at IIT Bombay.",
};

export const TECH_STEPS = [
  {
    path: "/technology/pretreatment",
    step: 1,
    name: "Pretreatment & Activation",
    title: "Pretreatment & activation of coal fly ash — W2W EnerGene",
    description:
      "How W2W EnerGene opens up the glassy matrix of coal fly ash so rare earth elements become accessible for bioleaching.",
  },
  {
    path: "/technology/bioleaching",
    step: 2,
    name: "Bioleaching",
    title: "Bioleaching of rare earth elements — W2W EnerGene",
    description:
      "Acid-producing microbes dissolve rare earth elements from pretreated fly ash under mild conditions, with less mineral acid.",
  },
  {
    path: "/technology/recovery",
    step: 3,
    name: "Precipitation & Recovery",
    title: "Selective recovery of rare earth elements — W2W EnerGene",
    description:
      "Rare earth elements are recovered from the bioleach solution as oxalates or phosphates and calcined to oxides.",
  },
  {
    path: "/technology/co2-sequestration",
    step: 4,
    name: "CO₂ Sequestration",
    title: "CO₂ mineralisation of the residue — W2W EnerGene",
    description:
      "The calcium- and magnesium-rich residue captures CO₂ as stable carbonates and can be reused in building materials.",
  },
];

export const PAGES = [
  {
    path: "/",
    title: "W2W EnerGene — Waste to Wealth with Engineered Microbes",
    description:
      "Microbial bioprocesses that recover rare earth elements from coal fly ash and lock CO₂ in the residue. A venture in formation from research at IIT Bombay.",
  },
  {
    path: "/people",
    title: "People — W2W EnerGene",
    description:
      "The researchers and advisors behind W2W EnerGene, from the Geomicrobiology Lab and BSBE at IIT Bombay.",
  },
  {
    path: "/updates",
    title: "Updates — W2W EnerGene",
    description: "Research milestones, talks and news from W2W EnerGene.",
  },
  {
    path: "/contact",
    title: "Contact — W2W EnerGene",
    description:
      "Partner with W2W EnerGene on critical-mineral recovery from coal ash, pilots, or research collaboration.",
  },
  {
    path: "/privacy",
    title: "Privacy notice — W2W EnerGene",
    description: "How W2W EnerGene handles the details you send us.",
  },
  ...TECH_STEPS.map(({ path, title, description }) => ({ path, title, description })),
];

export const NOT_FOUND = {
  path: "/404",
  title: "Page not found — W2W EnerGene",
  description: "This page doesn't exist. Head back to the W2W EnerGene home page.",
};

export function getPageMeta(path) {
  return PAGES.find((p) => p.path === path) || NOT_FOUND;
}

export function postMeta(post) {
  return {
    path: `/updates/${post.id}`,
    title: `${post.title} — W2W EnerGene`,
    description: post.excerpt || "",
    type: "article",
  };
}

// Dates are stored as YYYY-MM-DD. Format in UTC so the server-rendered page and the browser agree.
export function formatDate(iso) {
  if (!iso) return "";
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
