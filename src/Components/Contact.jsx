import { useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site.js";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || SITE.formEndpoint;
const EMPTY = { name: "", email: "", organisation: "", interest: "Industry partnership", message: "" };
const INTERESTS = ["Industry partnership", "Pilot site / ash supply", "Investment", "Research collaboration", "Other"];

const inputCls =
  "mt-1 w-full rounded-xl bg-neutral-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1";

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [state, setState] = useState("idle"); // idle | sending | sent | mailto | error

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailtoHref = () => {
    const body = `${form.message}\n\n— ${form.name}${form.organisation ? `, ${form.organisation}` : ""}\n${form.email}`;
    return `mailto:${SITE.email}?subject=${encodeURIComponent(`[Website] ${form.interest}`)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.elements._gotcha?.value) return; // spam bot filled the hidden field

    if (!ENDPOINT) {
      // No form service set up yet: hand the message to the visitor's email app.
      window.location.href = mailtoHref();
      setState("mailto");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
      setForm(EMPTY);
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's work together</h2>
        <p className="text-neutral-300/90 max-w-2xl mx-auto">
          We're looking for power utilities and ash-pond owners for pilot sites, industry partners for
          scale-up, and investors who back deep-tech climate ventures. Researchers are welcome too.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start px-6">
        <form onSubmit={handleSubmit} className="rounded-3xl p-6 space-y-4 bg-black/35 border border-white/5">
          <h3 className="text-2xl font-bold">Send us a message</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="text-sm opacity-80">Name</label>
              <input id="c-name" name="name" autoComplete="name" value={form.name} onChange={update} required className={inputCls} />
            </div>
            <div>
              <label htmlFor="c-email" className="text-sm opacity-80">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} required className={inputCls} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="c-org" className="text-sm opacity-80">Organisation (optional)</label>
              <input id="c-org" name="organisation" autoComplete="organization" value={form.organisation} onChange={update} className={inputCls} />
            </div>
            <div>
              <label htmlFor="c-interest" className="text-sm opacity-80">I'm interested in</label>
              <select id="c-interest" name="interest" value={form.interest} onChange={update} className={inputCls}>
                {INTERESTS.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="c-message" className="text-sm opacity-80">Message</label>
            <textarea id="c-message" name="message" rows="4" value={form.message} onChange={update} required className={inputCls} />
          </div>

          {/* Hidden from people; bots tend to fill it in. */}
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <input type="hidden" name="_subject" value={`[Website] ${form.interest}`} />

          <button
            type="submit"
            disabled={state === "sending"}
            className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2.5 text-neutral-900 font-semibold shadow hover:shadow-lg transition-all disabled:opacity-60"
          >
            {state === "sending" ? "Sending…" : "Send message →"}
          </button>

          <div aria-live="polite" className="text-sm text-center min-h-[1.25rem]">
            {state === "sent" && <p className="text-emerald-300">Thank you — your message has reached us. We'll reply soon.</p>}
            {state === "mailto" && (
              <p className="text-neutral-300">
                Your email app should open with the message ready to send. If it didn't, write to{" "}
                <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            )}
            {state === "error" && (
              <p className="text-rose-300">
                Sorry, the message didn't go through. Please email{" "}
                <a className="underline" href={mailtoHref()}>{SITE.email}</a> instead.
              </p>
            )}
          </div>

          <p className="text-xs opacity-60 text-center">
            We use your details only to reply to you. See our{" "}
            <Link to="/privacy" className="underline">privacy notice</Link>.
          </p>
        </form>

        <div className="space-y-6">
          <div className="rounded-3xl overflow-hidden border border-white/5 bg-black/35">
            <iframe
              title="Map showing IIT Bombay, Powai, Mumbai"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.274014654942!2d72.91434047501514!3d19.13343088208827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7b050000001%3A0x318a82ea9d07ad60!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1697544046432!5m2!1sen!2sin"
              width="100%"
              height="360"
              className="block border-0"
              style={{ filter: "invert(90%) hue-rotate(180deg)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <ul className="rounded-3xl p-6 bg-black/35 border border-white/5 space-y-3 text-neutral-200">
            <li>
              ✉️{" "}
              <a href={`mailto:${SITE.email}`} className="underline decoration-brand1/40 underline-offset-2">
                {SITE.email}
              </a>
            </li>
            <li>
              📞{" "}
              <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="underline decoration-brand1/40 underline-offset-2">
                {SITE.phone}
              </a>
            </li>
            <li>📍 {SITE.location}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
