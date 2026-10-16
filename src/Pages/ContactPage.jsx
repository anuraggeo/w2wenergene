import PageShell from "../Components/PageShell.jsx";
import Contact from "../Components/Contact.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { getPageMeta } from "../data/site.js";

export default function ContactPage() {
  usePageMeta(getPageMeta("/contact"));

  return (
    <PageShell>
      <main>
        <Contact />
      </main>
    </PageShell>
  );
}
