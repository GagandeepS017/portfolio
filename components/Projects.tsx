import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  Github,
  GitCommitHorizontal,
  Wrench,
  Database,
  MessagesSquare,
  ServerCog,
  BookOpenText,
  ArrowUpRight,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Section from "./Section";
import Reveal from "./Reveal";

type CoverIcon = LucideIcon;

// Cover art for projects without a live screenshot: an icon + gradient keyed
// off the project so each reads distinctly.
function coverFor(project: Project): { Icon: CoverIcon; gradient: string } {
  const t = project.title.toLowerCase();
  if (t.includes("asyncmeet") || t.includes("manan"))
    return { Icon: MessagesSquare, gradient: "from-violet-500/25 to-cyan-500/10" };
  if (t.includes("aws"))
    return { Icon: ServerCog, gradient: "from-amber-500/25 to-accent/10" };
  if (t.includes("thesis"))
    return { Icon: BookOpenText, gradient: "from-indigo-500/25 to-accent/10" };
  return { Icon: Database, gradient: "from-accent/25 to-cyan-500/10" };
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900 md:aspect-auto md:h-full">
        {/* Live screenshot, hosted in /public/projects. */}
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
      </div>
    );
  }

  const { Icon, gradient } = coverFor(project);
  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} md:aspect-auto md:h-full`}
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <Icon className="h-16 w-16 text-neutral-100/80 transition-transform duration-500 group-hover:scale-110" aria-hidden />
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      number="03"
      title="Featured Projects"
      subtitle="Built to ship, not just to demo. Each one solves a real problem end to end."
    >
      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <article className="group grid overflow-hidden rounded-xl border border-neutral-800 bg-surface transition-all duration-300 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.15)] md:grid-cols-[minmax(0,40%)_1fr]">
              <ProjectMedia project={project} />

              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-sm text-accent" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-neutral-100 transition-colors group-hover:text-accent">
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
                    <ArrowUpRight
                      size={22}
                      className="text-neutral-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="border-l-2 border-neutral-800 pl-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent/80">
                      Challenge
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                      {project.problem}
                    </p>
                  </div>
                  <div className="border-l-2 border-accent/50 pl-4">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent/80">
                      Solution
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  {project.keyDecisions && (
                    <div className="border-l-2 border-neutral-800 pl-4">
                      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent/80">
                        <Wrench size={13} aria-hidden />
                        Key decisions
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
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

                {(project.links.github || project.links.live) && (
                  <div className="mt-6 flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded bg-accent px-4 py-1.5 font-mono text-xs font-semibold text-neutral-950 transition-all hover:brightness-110 hover:shadow-[0_4px_20px_-4px_rgba(45,212,191,0.6)]"
                      >
                        <ExternalLink size={13} aria-hidden />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="inline-flex items-center gap-1.5 rounded border border-neutral-700 px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors hover:border-accent/50 hover:text-accent"
                      >
                        <Github size={14} aria-hidden />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
