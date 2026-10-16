import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";

// Common page frame: background grid, header and footer.
export default function PageShell({ current, children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 relative flex flex-col">
      <div className="grid-bg" />
      <SiteHeader current={current} />
      <div className="relative flex-1">{children}</div>
      <SiteFooter />
    </div>
  );
}
