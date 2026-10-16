import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Technology", href: "/#technology" },
  { label: "Impact", href: "/#impact" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "People", to: "/people" },
  { label: "Updates", to: "/updates" },
  { label: "Contact", href: "/#contact" },
];

function NavItem({ item, current, onClick, className }) {
  const active = item.to && item.to === current;
  const cls = `${className} ${active ? "text-brand2 font-semibold" : "opacity-80 hover:opacity-100"}`;
  if (item.to) {
    return (
      <Link to={item.to} className={cls} aria-current={active ? "page" : undefined} onClick={onClick}>
        {item.label}
      </Link>
    );
  }
  return (
    <a href={item.href} className={cls} onClick={onClick}>
      {item.label}
    </a>
  );
}

export default function SiteHeader({ current = "/" }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={close}>
          <img src="/Images/logo.png" alt="" width="56" height="56" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="font-extrabold tracking-tight text-xl sm:text-2xl">
            W2W <span className="text-brand1">Ener</span>
            <span className="text-brand3">Gene</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm" aria-label="Main">
          {NAV.map((item) => (
            <NavItem key={item.label} item={item} current={current} className="transition-opacity" />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap rounded-2xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-sm text-neutral-900 font-semibold shadow hover:shadow-lg"
          >
            Partner with us →
          </a>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/10"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="lg:hidden border-t border-white/5 px-4 pb-4" aria-label="Main">
          <ul className="flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.label}>
                <NavItem item={item} current={current} onClick={close} className="block py-3 text-base" />
              </li>
            ))}
          </ul>
          <a
            href="/#contact"
            onClick={close}
            className="flex justify-center rounded-xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-3 text-neutral-900 font-semibold"
          >
            Partner with us →
          </a>
        </nav>
      )}
    </header>
  );
}
