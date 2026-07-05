import { BookOpen, Download, Github } from "lucide-react";
import { publication } from "@/data/experience";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Publication() {
  return (
    <Section
      id="publication"
      number="06"
      title="Publication"
      subtitle="Peer-reviewed research, presented at an international conference."
    >
      <Reveal>
        <article className="relative overflow-hidden rounded-lg border border-accent/30 bg-gradient-to-br from-surface to-accent/[0.04] p-8 sm:p-10">
          <BookOpen
            size={120}
            className="absolute -right-6 -top-6 text-accent/[0.06]"
            aria-hidden
          />
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Conference Paper
          </p>
          <h3 className="mt-3 max-w-2xl text-xl font-semibold text-neutral-100 sm:text-2xl">
            {publication.title}
          </h3>
          <p className="mt-2 font-mono text-sm text-neutral-500">{publication.venue}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-neutral-400">
            {publication.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={publication.paper}
              download
              className="inline-flex items-center gap-2 rounded border border-accent/60 px-4 py-2 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
            >
              <Download size={15} aria-hidden />
              Download Paper
            </a>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-neutral-700 px-4 py-2 font-mono text-sm text-neutral-300 transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Github size={15} aria-hidden />
              View Code
            </a>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
