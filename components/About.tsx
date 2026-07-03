import { GraduationCap, FlaskConical, MapPin, Languages } from "lucide-react";
import { site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" number="02" title="About">
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-4 leading-relaxed text-neutral-400">
            <p>
              I&apos;m a backend engineer turned AI developer with{" "}
              <span className="text-neutral-200">
                2+ years of professional experience
              </span>{" "}
              building enterprise Java/Spring Boot systems, now focused on{" "}
              <span className="text-accent">GenAI, LLM applications, and cloud automation</span>.
            </p>
            <p>
              Currently an M.Sc. Big Data &amp; AI student at SRH University
              Berlin (graduating Sept 2026) and a Research Assistant building
              NLP pipelines under Prof. Dr. Alexander Iliev.
            </p>
            <p>
              My work spans NLP pipelines, async AI platforms, and
              Infrastructure-as-Code workflows — the through-line is taking
              things from prototype to production: sandboxed execution, eval
              harnesses, CI/CD, and deploys that stay up.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <ul className="space-y-5 rounded-lg border border-neutral-800 bg-surface p-7 font-mono text-sm">
            <li className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                M.Sc. Big Data &amp; AI — SRH Berlin
                <span className="block text-xs text-neutral-500">Graduating Sept 2026</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FlaskConical size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                Research Assistant — NLP pipelines
                <span className="block text-xs text-neutral-500">RAG, prompt engineering, document classification</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                {site.location}
                <span className="block text-xs text-neutral-500">Student visa — work permitted</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Languages size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                {site.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
