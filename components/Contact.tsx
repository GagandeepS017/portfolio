import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Get In Touch">
      <Reveal>
        <div className="mx-auto max-w-2xl py-6 text-center">
          <p className="text-lg leading-relaxed text-neutral-400">
            I&apos;m actively looking for{" "}
            <span className="text-neutral-200">
              Werkstudent, internship, and full-time AI/ML &amp; software roles
              in Germany
            </span>
            . If you&apos;re hiring — or just want to talk LLMs, backend
            systems, or infrastructure — my inbox is open.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-10 inline-flex items-center gap-3 rounded bg-accent px-8 py-4 font-mono text-sm font-semibold text-neutral-950 transition-colors hover:bg-accent-dim"
          >
            <Mail size={17} aria-hidden />
            Say Hello
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-accent"
            >
              <Github size={16} aria-hidden />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 transition-colors hover:text-accent"
            >
              <Linkedin size={16} aria-hidden />
              LinkedIn
            </a>
            <span className="inline-flex items-center gap-2 font-mono text-sm text-neutral-500">
              <MapPin size={16} aria-hidden />
              {site.location}
            </span>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
