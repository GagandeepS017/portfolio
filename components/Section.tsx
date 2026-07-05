import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, number, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-28 py-14 sm:py-16">
      <Reveal>
        <div className="mb-10 text-center">
          <p className="font-mono text-sm text-accent" aria-hidden>
            {number} <span className="text-neutral-600">//</span> {id}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-50 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">{subtitle}</p>
          )}
          <div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
            aria-hidden
          />
        </div>
      </Reveal>
      {children}
    </section>
  );
}
