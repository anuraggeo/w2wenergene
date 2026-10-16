import { useEffect, useRef, useState } from "react";

// Shows the final number in the page's HTML (so search engines and no-JS visitors see it),
// then counts up from zero the first time the number scrolls into view.
export default function CountUp({ end, duration = 1800 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(end);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // Only animate numbers that start off-screen; never blank out a number someone is reading.
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let frame;
    setValue(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          setValue(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return <span ref={ref}>{value}</span>;
}
