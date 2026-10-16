import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";

export default function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/Images/logo.png" alt="" width="64" height="64" className="h-16 w-16" />
            <span className="font-bold text-lg">W2W EnerGene</span>
          </Link>
          <p className="mt-3 text-neutral-400 max-w-xs">{SITE.status}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center content-start opacity-90">
          <a href="/#technology">Technology</a>
          <a href="/#impact">Impact</a>
          <a href="/#roadmap">Roadmap</a>
          <Link to="/people">People</Link>
          <Link to="/updates">Updates</Link>
          <a href="/#contact">Contact</a>
          <Link to="/privacy">Privacy</Link>
        </nav>

        <div className="md:text-right text-neutral-400 space-y-1">
          <p>
            <a href={`mailto:${SITE.email}`} className="hover:text-neutral-100">
              {SITE.email}
            </a>
          </p>
          <p>{SITE.location}</p>
          <p className="pt-2 opacity-70">
            © {new Date().getFullYear()} W2W EnerGene. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
