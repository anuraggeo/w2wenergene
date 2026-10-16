import PageShell from "../Components/PageShell.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { getPageMeta, SITE } from "../data/site.js";

const UPDATED = "17 October 2026";

export default function Privacy() {
  usePageMeta(getPageMeta("/privacy"));

  return (
    <PageShell>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-neutral-200 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-100">Privacy notice</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated {UPDATED}</p>

        <div className="mt-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-neutral-100">Who we are</h2>
            <p className="mt-2">
              {SITE.status} You can reach us at{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-100">What we collect</h2>
            <p className="mt-2">
              Only what you choose to send us through the contact form or by email: your name, email
              address, organisation and message. This website does not use analytics or advertising
              cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-100">How we use it</h2>
            <p className="mt-2">
              To reply to you and follow up on what you asked about. We do not sell your details or
              use them for unrelated marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-100">Services involved</h2>
            <p className="mt-2">
              Messages from the contact form are delivered to our inbox through a form-delivery
              service. The map on the contact section is provided by Google Maps, which may set its own
              cookies when it loads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-100">How long we keep it, and your choices</h2>
            <p className="mt-2">
              We keep messages only as long as we need them for the conversation. You can ask us to
              show, correct or delete what we hold about you at any time by emailing{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
