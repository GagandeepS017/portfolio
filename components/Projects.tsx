import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  Github,
  GitCommitHorizontal,
  Database,
  MessagesSquare,
  ServerCog,
  BookOpenText,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Section from "./Section";
import Reveal from "./Reveal";

// Cover art for projects without a live screenshot: an icon + gradient keyed
// off the project so each reads distinctly.
function coverFor(project: Project): { Icon: LucideIcon; gradient: string } {
  const t = project.title.toLowerCase();
  if (t.includes("asyncmeet") || t.includes("manan"))
    return { Icon: MessagesSquare, gradient: "from-violet-500/25 to-cyan-500/10" };
  if (t.includes("aws"))
    return { Icon: ServerCog, gradient: "from-amber-500/25 to-accent/10" };
  if (t.includes("thesis"))
    return { Icon: BookOpenText, gradient: "from-indigo-500/25 to-accent/10" };
  return { Icon: Database, gradient: "from-accent/25 to-cyan-500/10" };
}

// The media half bleeds into the card: a masked backdrop-blur strip plus a
// surface-colored gradient dissolve the image into the text side, so there is
// no hard seam. `flip` mirrors the dissolve when the image sits on the left.
function ProjectMedia({ project, flip }: { project: Project; flip: boolean }) {
  const { Icon, gradient } = coverFor(project);
  const shortName = project.title.split(":")[0];

  // A single long, smooth color fade dissolves the media into the card. No
  // blur layers on screenshots: masked blurs produce visible bands/seams.
  const fade = flip
    ? "bg-[linear-gradient(to_left,#121214,rgba(18,18,20,0.55)_30%,transparent_70%)]"
    : "bg-[linear-gradient(to_right,#121214,rgba(18,18,20,0.55)_30%,transparent_70%)]";
  const blurMask = flip
    ? "[mask-image:linear-gradient(to_left,black,transparent_55%)]"
    : "[mask-image:linear-gradient(to_right,black,transparent_55%)]";

  return (
    <div className="relative min-h-[15rem] md:min-h-full">
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
        />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} aria-hidden />
          {/* Faux homepage skeleton standing in for a screenshot */}
          <div className="absolute inset-0 p-6 opacity-60" aria-hidden>
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded bg-neutral-100/25" />
              <div className="flex gap-1.5">
                <div className="h-2 w-9 rounded bg-neutral-100/15" />
                <div className="h-2 w-9 rounded bg-neutral-100/15" />
                <div className="h-2 w-9 rounded bg-neutral-100/15" />
              </div>
            </div>
            <div className="mt-6 h-3 w-3/5 rounded bg-neutral-100/30" />
            <div className="mt-2 h-3 w-2/5 rounded bg-neutral-100/20" />
            <div className="mt-4 h-6 w-24 rounded bg-accent/50" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-16 rounded bg-neutral-100/10" />
              <div className="h-16 rounded bg-neutral-100/10" />
              <div className="h-16 rounded bg-neutral-100/10" />
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <Icon
              className="h-10 w-10 text-neutral-100/90 transition-transform duration-500 group-hover:scale-110"
              aria-hidden
            />
            <p className="font-mono text-xs tracking-wide text-neutral-200/90">
              {shortName}
            </p>
          </div>
          {/* Blur strip where the skeleton meets the text */}
          <div className={`absolute inset-0 backdrop-blur-[5px] ${blurMask}`} aria-hidden />
        </>
      )}

      {/* Color fade into the card background */}
      <div className={`absolute inset-0 ${fade}`} aria-hidden />
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
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={project.title} delay={i * 0.05}>
              <article className="group grid overflow-hidden rounded-xl border border-neutral-800 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.18)] md:grid-cols-2">
                <div
                  className={`relative z-10 flex flex-col justify-center p-7 sm:p-10 ${
                    flip ? "md:order-2" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-sm text-accent" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    {project.status && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-400">
                        <GitCommitHorizontal size={13} aria-hidden />
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-neutral-100 transition-colors group-hover:text-accent sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

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
                    <div className="mt-7 flex items-center gap-3">
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded bg-accent px-4 py-2 font-mono text-xs font-semibold text-neutral-950 transition-all hover:brightness-110 hover:shadow-[0_4px_20px_-4px_rgba(45,212,191,0.6)]"
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
                          className="inline-flex items-center justify-center rounded border border-neutral-700 p-2 text-neutral-300 transition-colors hover:border-accent/50 hover:text-accent"
                        >
                          <Github size={16} aria-hidden />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <ProjectMedia project={project} flip={flip} />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
