import type { ComponentType } from "react";
import {
  ScanFace,
  Youtube,
  Languages,
  Recycle,
  FolderGit2,
  Github,
  ExternalLink,
  GitCommitHorizontal,
  Crown,
  ServerCog,
} from "lucide-react";
import { noteworthyProjects, type NoteworthyProject } from "@/data/noteworthy";
import Reveal from "./Reveal";

type Cover = { Icon: ComponentType<{ className?: string }>; gradient: string };

// Distinct icon + gradient per project so the image-less cards still read
// individually.
function coverFor(p: NoteworthyProject, i: number): Cover {
  const t = p.title.toLowerCase();
  if (t.includes("mcp") || t.includes("server"))
    return { Icon: ServerCog, gradient: "from-orange-500/25 to-accent/10" };
  if (t.includes("chess"))
    return { Icon: Crown, gradient: "from-amber-500/25 to-accent/10" };
  if (t.includes("deepfake"))
    return { Icon: ScanFace, gradient: "from-rose-500/25 to-accent/10" };
  if (t.includes("youtube") || t.includes("video"))
    return { Icon: Youtube, gradient: "from-red-500/25 to-cyan-500/10" };
  if (t.includes("language"))
    return { Icon: Languages, gradient: "from-violet-500/25 to-accent/10" };
  if (t.includes("waste"))
    return { Icon: Recycle, gradient: "from-emerald-500/25 to-cyan-500/10" };
  const fallbacks: Cover["gradient"][] = [
    "from-accent/25 to-cyan-500/10",
    "from-indigo-500/25 to-accent/10",
  ];
  return { Icon: FolderGit2, gradient: fallbacks[i % fallbacks.length] };
}

export default function Noteworthy() {
  return (
    <section
      id="noteworthy"
      aria-label="Other noteworthy projects"
      className="scroll-mt-28 py-14 sm:py-16"
    >
      <Reveal>
        <div className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Beyond the featured work
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-neutral-50 sm:text-3xl">
            Other Noteworthy Projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
            Academic and personal builds across computer vision, NLP, and
            developer tooling. Some are in private beta ahead of release.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {noteworthyProjects.map((project, i) => {
          const { Icon, gradient } = coverFor(project, i);
          return (
            <Reveal key={project.title} delay={i * 0.04}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-800 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.18)]">
                <div
                  className={`relative flex h-24 items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black,transparent)]" />
                  <Icon className="h-9 w-9 text-neutral-100/80 transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-snug text-neutral-100 transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-400">
                        <GitCommitHorizontal size={11} aria-hidden />
                        {project.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 font-mono text-[11px] text-neutral-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.github || project.live) && (
                    <div className="mt-4 flex items-center gap-3">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded bg-accent px-3 py-1 font-mono text-[11px] font-semibold text-neutral-950 transition-all hover:brightness-110"
                        >
                          <ExternalLink size={12} aria-hidden />
                          Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-[11px] text-neutral-400 transition-colors hover:text-accent"
                        >
                          <Github size={13} aria-hidden />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
