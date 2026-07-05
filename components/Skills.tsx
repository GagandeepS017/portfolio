import { skillGroups } from "@/data/skills";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      title="Skills"
      subtitle="The tools I reach for to take an idea from notebook to production."
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neutral-800 bg-surface px-3 py-1 font-mono text-xs text-neutral-300 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
