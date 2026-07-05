import { ExternalLink, Github, GitCommitHorizontal, Wrench } from "lucide-react";
import { projects } from "@/data/projects";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Section
      id="projects"
      number="01"
      title="Featured Projects"
      subtitle="Built to ship, not just to demo — each one solves a real problem end to end."
    >
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <article className="group relative rounded-lg border border-neutral-800 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.15)] sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-sm text-accent" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-100 transition-colors group-hover:text-accent sm:text-2xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400">
                      <GitCommitHorizontal size={13} aria-hidden />
                      {project.status}
                    </span>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="rounded p-2 text-neutral-400 transition-colors hover:text-accent"
                    >
                      <Github size={20} aria-hidden />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-accent/60 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
                    >
                      <ExternalLink size={13} aria-hidden />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div className="border-l-2 border-neutral-800 pl-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent/80">
                    Challenge
                  </p>
                  <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-neutral-400">
                    {project.problem}
                  </p>
                </div>
                <div className="border-l-2 border-accent/50 pl-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent/80">
                    Solution
                  </p>
                  <p className="mt-1.5 max-w-3xl leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>
                {project.keyDecisions && (
                  <div className="border-l-2 border-neutral-800 pl-4">
                    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent/80">
                      <Wrench size={13} aria-hidden />
                      Key decisions
                    </p>
                    <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-neutral-500">
                      {project.keyDecisions}
                    </p>
                  </div>
                )}
              </div>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-xs text-neutral-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
