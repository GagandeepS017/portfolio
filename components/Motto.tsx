import Reveal from "./Reveal";

export default function Motto() {
  return (
    <Reveal>
      <figure className="relative overflow-hidden rounded-xl border border-neutral-800 bg-surface px-8 py-14 text-center sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-teal-500/[0.06] via-transparent to-cyan-500/[0.06]"
          aria-hidden
        />
        <span className="font-mono text-5xl text-accent/30" aria-hidden>
          &ldquo;
        </span>
        <blockquote className="mx-auto -mt-4 max-w-2xl bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-clip-text text-2xl font-semibold leading-snug text-transparent sm:text-3xl">
          Prototype fast. Ship to production. Measure everything.
        </blockquote>
        <figcaption className="mt-5 font-mono text-xs uppercase tracking-widest text-neutral-500">
          The rule behind everything I build
        </figcaption>
      </figure>
    </Reveal>
  );
}
