import { useEffect, useRef } from "react";

// Muted looping background video with a poster image.
// Pauses for visitors who have asked their device to reduce motion.
export default function BackgroundVideo({ src, poster, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !window.matchMedia) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
