"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// A soft glow that trails the cursor, echoing the issamsensi ambient feel.
// Behind content (-z-10) so it lights the background without washing out text.
// Skipped on touch devices and under reduced-motion.
export default function Spotlight() {
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(45,212,191,0.06), transparent 45%)`,
      }}
    />
  );
}
