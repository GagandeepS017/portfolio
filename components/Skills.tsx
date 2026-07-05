import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import {
  SiPython,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiMlflow,
  SiHuggingface,
  SiAnthropic,
  SiLangchain,
  SiNumpy,
  SiPandas,
  SiScipy,
  SiOpencv,
  SiDuckdb,
  SiSpringboot,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiNodedotjs,
  SiGooglecloud,
  SiTerraform,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiRender,
  SiVercel,
  SiJunit5,
  SiPytest,
  SiGit,
  SiJira,
  SiJupyter,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { BarChart3, Braces, Network } from "lucide-react";
import { skillGroups } from "@/data/skills";
import Section from "./Section";
import Reveal from "./Reveal";

type Icon = LucideIcon | IconType;

// Icons render with currentColor, so they inherit each pill's text color
// (neutral by default, accent on hover) for a cohesive monochrome look.
const iconMap: Record<string, Icon> = {
  Python: SiPython,
  Java: FaJava,
  "JavaScript/TypeScript": SiTypescript,
  C: SiC,
  "C++": SiCplusplus,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  "Scikit-learn": SiScikitlearn,
  Keras: SiKeras,
  MLflow: SiMlflow,
  Transformers: SiHuggingface,
  "Claude API": SiAnthropic,
  LangChain: SiLangchain,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  SciPy: SiScipy,
  OpenCV: SiOpencv,
  DuckDB: SiDuckdb,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "Node.js": SiNodedotjs,
  AWS: FaAws,
  GCP: SiGooglecloud,
  Azure: VscAzure,
  Terraform: SiTerraform,
  Docker: SiDocker,
  Jenkins: SiJenkins,
  "GitHub Actions": SiGithubactions,
  Render: SiRender,
  Vercel: SiVercel,
  JUnit: SiJunit5,
  pytest: SiPytest,
  Git: SiGit,
  Jira: SiJira,
  PowerBI: BarChart3,
  Tableau: BarChart3,
  Recharts: BarChart3,
  Jupyter: SiJupyter,
};

// Concept skills with no brand mark get a matching generic icon.
const networkish = new Set([
  "REST APIs",
  "Microservices",
  "WebSockets",
  "CI/CD",
  "IaC",
  "SSE Streaming",
]);

function iconFor(skill: string): Icon {
  return iconMap[skill] ?? (networkish.has(skill) ? Network : Braces);
}

export default function Skills() {
  return (
    <Section
      id="skills"
      number="04"
      title="Skills"
      subtitle="The tools I reach for to take an idea from notebook to production."
    >
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <h3 className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-accent">
              {group.label}
              <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => {
                const SkillIcon = iconFor(skill);
                return (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-surface px-4 py-2 text-sm text-neutral-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
                  >
                    <SkillIcon className="h-4 w-4" aria-hidden />
                    {skill}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
