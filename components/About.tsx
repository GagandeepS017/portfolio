import { GraduationCap, FlaskConical, MapPin, Languages } from "lucide-react";
import { site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";
import Stats from "./Stats";

export default function About() {
  return (
    <Section
      id="about"
      number="01"
      title="Behind the Code"
      subtitle="From enterprise Java in Bangalore to LLM research in Berlin."
    >
      <Reveal>
        <Stats />
      </Reveal>
      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="space-y-4 leading-relaxed text-neutral-400">
            <p>
              My path didn&apos;t start with AI. It started with{" "}
              <span className="text-neutral-200">
                two years of enterprise Java/Spring Boot
              </span>{" "}
              at Vrize in Bangalore. Real production systems for real clients,
              where a bad deploy meant angry users, not a failed notebook cell.
              That&apos;s where I learned to care about testing, CI/CD, and code
              that other people can maintain.
            </p>
            <p>
              Then LLMs changed what software could do, and I wanted in, not
              as a spectator. So I moved to Berlin for an{" "}
              <span className="text-neutral-200">M.Sc. in Big Data &amp; AI</span>{" "}
              at SRH (graduating Sept 2026), where I now also work as a{" "}
              <span className="text-neutral-200">Research Assistant</span>{" "}
              building NLP pipelines under Prof. Dr. Alexander Iliev.
            </p>
            <p>
              The result is a rare combination:{" "}
              <span className="text-accent">
                I build AI products with backend-engineer discipline
              </span>
              : sandboxed execution, eval harnesses, streaming APIs, and
              Terraform-managed infrastructure. Prototypes are easy. Things
              that stay up are not.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <ul className="space-y-5 rounded-lg border border-neutral-800 bg-surface p-7 font-mono text-sm">
            <li className="flex items-start gap-3">
              <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                M.Sc. Big Data &amp; AI, SRH Berlin
                <span className="block text-xs text-neutral-500">Graduating Sept 2026</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FlaskConical size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                Research Assistant, NLP pipelines
                <span className="block text-xs text-neutral-500">RAG, prompt engineering, document classification</span>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
              <span className="text-neutral-300">
                {site.location}
                <span className="block text-xs text-neutral-500">Student visa, work permitted</span>
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
