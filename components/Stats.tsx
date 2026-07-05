"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/data/site";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats({
  className = "mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4",
}: {
  className?: string;
}) {
  return (
    <dl className={className}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-neutral-800 bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.2)]"
        >
          <dd className="font-mono text-4xl font-bold text-accent">
            <Counter value={stat.value} suffix={stat.suffix} />
          </dd>
          <dt className="mt-2 text-xs leading-relaxed text-neutral-500">
            {stat.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
