import { Building2, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/experience";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      title="Experience"
      subtitle="From enterprise sprints in Bangalore to AI research in Berlin."
    >
      <ol className="relative space-y-6 before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-px before:bg-gradient-to-b before:from-accent/50 before:via-neutral-800 before:to-transparent">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <Reveal delay={i * 0.05}>
              <div className="group flex gap-4 rounded-xl border border-neutral-800 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.18)] sm:p-6">
                {/* Company logo on a light tile so brand marks read on dark. */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-700 bg-white/95 ring-4 ring-background">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-9 w-9 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Building2 size={22} className="text-neutral-500" aria-hidden />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-lg font-semibold text-neutral-100">
                      {job.role}
                    </h3>
                    <span className="font-mono text-xs text-neutral-500">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-0.5 font-mono text-sm text-accent">
                    {job.company}
                    <span className="ml-2 text-neutral-600">· {job.location}</span>
                  </p>

                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-neutral-400"
                      >
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {job.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-neutral-800 bg-neutral-900 px-2.5 py-0.5 font-mono text-[11px] text-neutral-400 transition-colors group-hover:border-accent/30 group-hover:text-neutral-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <h3 className="mb-6 mt-16 flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-neutral-500">
          <GraduationCap size={16} className="text-accent" aria-hidden />
          Education
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="group rounded-xl border border-neutral-800 bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.18)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-neutral-700 bg-white/95">
                  {edu.logo ? (
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <GraduationCap size={22} className="text-neutral-500" aria-hidden />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-neutral-500">
                    {edu.period} · {edu.location}
                  </p>
                  <h4 className="mt-1 font-semibold text-neutral-100">{edu.degree}</h4>
                  <p className="mt-1 text-sm text-accent">{edu.school}</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {edu.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-2.5 text-sm leading-relaxed text-neutral-400"
                  >
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
