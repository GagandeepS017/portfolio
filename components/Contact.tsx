import { Cloud, Database, Github, Linkedin, Mail, MapPin, Server, Sparkles } from "lucide-react";
import { services, site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

const serviceIcons = [Sparkles, Server, Cloud, Database];

export default function Contact() {
  return (
    <Section
      id="contact"
      number="06"
      title="Let's Work Together"
      subtitle="Hiring, collaborating, or just curious about a project? Say hi."
    >
      <Reveal>
        <h3 className="text-center font-mono text-xs uppercase tracking-widest text-neutral-500">
          What I can help you with
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            return (
              <div
                key={service.title}
                className="rounded-lg border border-neutral-800 bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <Icon size={20} className="text-accent" aria-hidden />
                <h4 className="mt-3 text-sm font-semibold text-neutral-100">
                  {service.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto max-w-2xl pt-16 text-center">
          <p className="text-lg leading-relaxed text-neutral-400">
            I&apos;m actively looking for{" "}
            <span className="text-neutral-200">
              Werkstudent, internship, and full-time AI/ML &amp; software roles
              in Germany
            </span>
            . If you&apos;re hiring, or just want to talk LLMs, backend
            systems, or infrastructure, my inbox is open.
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
