import { GraduationCap } from "lucide-react";
import { education, experience } from "@/data/experience";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" number="03" title="Experience">
      <ol className="relative ml-2 space-y-12 border-l border-neutral-800 pl-8">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative">
            <span
              className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background"
              aria-hidden
            />
            <Reveal delay={i * 0.05}>
              <p className="font-mono text-xs text-neutral-500">
                {job.period} · {job.location}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-neutral-100">
                {job.role}{" "}
                <span className="text-accent">@ {job.company}</span>
              </h3>
              <ul className="mt-3 max-w-3xl space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-neutral-400"
                  >
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
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
              className="rounded-lg border border-neutral-800 bg-surface p-6 transition-colors hover:border-neutral-700"
            >
              <p className="font-mono text-xs text-neutral-500">
                {edu.period} · {edu.location}
              </p>
              <h4 className="mt-2 font-semibold text-neutral-100">{edu.degree}</h4>
              <p className="mt-1 text-sm text-accent">{edu.school}</p>
              {edu.details.map((detail) => (
                <p key={detail} className="mt-2 text-sm text-neutral-400">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
