import { Link } from "react-router-dom";
import PageShell from "../Components/PageShell.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { NOT_FOUND } from "../data/site.js";

export default function NotFound() {
  usePageMeta(NOT_FOUND);

  return (
    <PageShell>
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-brand2">404</p>
        <h1 className="mt-3 text-4xl font-extrabold">This page doesn't exist</h1>
        <p className="mt-4 text-neutral-300">The link may be old or mistyped.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-brand1 to-brand2 px-5 py-3 font-semibold text-neutral-900"
        >
          Go to the home page
        </Link>
      </main>
    </PageShell>
  );
}
