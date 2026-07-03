import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} aria-label={title} className="scroll-mt-28 py-20 sm:py-24">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-4 text-2xl font-semibold text-neutral-100 sm:text-3xl">
          <span className="font-mono text-lg text-accent sm:text-xl" aria-hidden>
            {number}.
          </span>
          {title}
          <span className="hidden h-px grow bg-neutral-800 sm:block" aria-hidden />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
