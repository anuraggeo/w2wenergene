import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 relative z-10 text-neutral-100"
      style={{
        background: "rgba(255,255,255,0.02)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        boxShadow: "0 0 40px rgba(0,224,255,0.05)",
      }}
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2
          className="text-4xl font-bold mb-10"
         
        >
          📬 Contact Us
        </h2>
        <p className="text-neutral-300/90 max-w-2xl mx-auto">
          Let’s build a circular and sustainable future together — whether you’re
          from academia, industry, or policy. Reach us directly below.
        </p>
      </div>

      {/* Contact Form + Map */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start px-6">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl p-6 space-y-4"
          style={{
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 0 25px rgba(0,224,255,0.05)",
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Let’s collaborate
          </h3>
          <p className="text-neutral-300/90 mb-5 text-sm sm:text-base">
            Looking to valorize ash dumps, reduce liabilities, or co-develop
            bio-extraction and mineral carbonation IP?
          </p>

          <div>
            <label className="text-sm opacity-80">Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Email:</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
            />
          </div>

          <div>
            <label className="text-sm opacity-80">Message:</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-brand1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-gradient-to-r from-brand1 to-brand2 px-4 py-2 text-neutral-900 font-semibold shadow hover:shadow-lg transition-all"
          >
            Contact our team →
          </button>

          <p className="text-xs opacity-60 text-center">
            This form is processed by W2W EnerGene.
          </p>
        </form>

        {/* Map Section */}
        <div
          className="rounded-3xl overflow-hidden shadow-lg"
          style={{
            background: "rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.05)",
            boxShadow: "0 0 25px rgba(0,224,255,0.05)",
          }}
        >
          <iframe
            title="W2W EnerGene Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.274014654942!2d72.91434047501514!3d19.13343088208827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7b050000001%3A0x318a82ea9d07ad60!2sIndian%20Institute%20of%20Technology%20Bombay!5e0!3m2!1sen!2sin!4v1697544046432!5m2!1sen!2sin"
            width="100%"
            height="565"
            style={{
              border: "0",
              filter: "invert(90%) hue-rotate(180deg)", // dark mode
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Contact Info Below Map */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="flex justify-center gap-8 flex-wrap text-sm sm:text-base opacity-90 text-center">
          <p>
            ✉️{" "}
            <a
              href="mailto:contact@w2wenergene.com"
              className="underline decoration-brand1/40 underline-offset-2"
            >
              contact@w2wenergene.com
            </a>
          </p>
          <p>📞 +91-9511444574</p>
          <p>📍 IIT Bombay, Mumbai</p>
        </div>
      </div>

      <ToastContainer position="bottom-center" theme="dark" />
    </section>
  );
}
