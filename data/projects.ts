export type Project = {
  title: string;
  problem: string;
  description: string;
  keyDecisions?: string;
  stack: string[];
  links: {
    live?: string;
    github?: string;
  };
  status?: string;
  // Screenshot for the card. When absent, a gradient cover is rendered instead.
  image?: string;
};

export const projects: Project[] = [
  {
    title: "DataGrid: AI-Powered Analytics Platform",
    problem: "Non-technical users can't query data without SQL.",
    description:
      "Production-deployed analytics platform with a natural-language-to-SQL pipeline, sandboxed query execution, real-time SSE streaming, and auto-generated Recharts visualizations. Includes a Gaussian Copula synthetic-data engine with fidelity metrics and a text-to-SQL eval harness with execution-accuracy benchmarking tracked in MLflow.",
    keyDecisions:
      "Two-model Claude Sonnet/Haiku split for cost/latency; DuckDB for in-process analytical queries; execution-accuracy eval harness over exact-match.",
    stack: [
      "FastAPI",
      "React",
      "DuckDB",
      "Claude Sonnet/Haiku API",
      "MLflow",
      "SDV",
      "Recharts",
      "Vercel",
      "Render",
    ],
    links: {
      live: "https://datagrid.gagandeep.app",
      github: "https://github.com/GagandeepS017/Datagrid",
    },
    image: "/projects/datagrid.png",
  },
  {
    title: "AsyncMeet (MANAN): AI Async Decision-Making Platform",
    problem: "Live meetings are expensive and exclude async/distributed teams.",
    description:
      "A SaaS platform that replaces live meetings. Teams submit input asynchronously through a guided chat powered by Claude Sonnet, which asks follow-up questions on its own, then synthesizes all responses into a structured decision summary on a real-time WebSocket dashboard.",
    keyDecisions:
      "WebSocket dashboard for live state; Claude-driven adaptive follow-up questioning.",
    stack: [
      "FastAPI",
      "React/TypeScript",
      "Claude Sonnet API",
      "WebSockets",
      "Python",
    ],
    links: {},
    status: "Active Development",
    image: "/projects/asyncmeet.png",
  },
  {
    title: "Job Search Automation: Resume Tailoring on Claude Code",
    problem:
      "Fitting a resume and cover letter to every posting by hand takes longer than applying, and an LLM left to write them freely will invent experience.",
    description:
      "A local web app where I paste a job description and get back a tailored resume PDF, a cover letter PDF, the LaTeX sources, and a blunt match report. It drives the Claude Code CLI as a subprocess with a JSON schema for structured output, then compiles the LaTeX itself and judges success by the log and page count, never by trusting the model. Content is drawn from a curated fact bank under hard honesty rules (no invented employers, titles, dates, or metrics), and anything beyond it is listed in the report as unverified, with the weaknesses and red flags, for me to check before anything is sent. 144 runs between September and October 2026, a median of about six minutes and 17 agent turns each, with a Germany and India mode and eight ready-made role-specific CVs built from the same master. Reachable from my phone over Tailscale. Next is job discovery and form filling for Greenhouse, Ashby, and Personio, with human review before every submit.",
    keyDecisions:
      "Runs bill the Claude subscription, never an API key: the server refuses to start if any API-billing variable is set and strips them from the child process; success judged from the pdflatex log, since its exit code is unreliable here; prompt sent over stdin because Windows re-parses flags in the .CMD shim; the filesystem as the database, one folder per run.",
    stack: [
      "Python",
      "Claude Code CLI",
      "JSON Schema",
      "LaTeX",
      "Tailscale",
      "Task Scheduler",
    ],
    links: {},
    status: "In daily use",
  },
  {
    title: "AWS Account Onboarding Automation",
    problem: "Manual AWS account setup is slow, inconsistent, and error-prone.",
    description:
      "An Infrastructure-as-Code pipeline that provisions complete AWS accounts from a single YAML config: IAM users, groups and policies, S3 buckets, and VPC networking, all through Terraform and GitHub Actions with OIDC auth. It also writes a per-user runbook after every deploy.",
    keyDecisions:
      "OIDC over long-lived keys; single-YAML config as the source of truth.",
    stack: ["Terraform", "GitHub Actions (OIDC)", "AWS", "Python"],
    links: {
      github: "https://github.com/GagandeepS017/aws-onboarding-automation",
    },
  },
  {
    title: "Master's Thesis: A Failure Taxonomy of LLM-Generated Infrastructure-as-Code",
    problem:
      "Self-repair improves LLM-generated Terraform, but nobody has mapped which failures it fixes and which survive every retry.",
    description:
      "An empirical study of whether LLMs can self-repair the Terraform they write. A pipeline generates Terraform, checks it against four independent referees (syntax/plan, security via Checkov + tfsec, org policy via OPA/Conftest, and a completeness check), then feeds the errors back for up to 10 repair rounds: 560 runs across 50 scenarios, 3 seeds, and three models, logging 2,068 errors down to the rule and round. The headline finding is a capability ladder, not a single aggregate number: Claude Sonnet 5 resolves 95% of tasks and fails only on unfamiliar resource types, GPT-4o resolves 53% and fails specifically on cross-resource reasoning like networking, and Llama 3.1 resolves 9% and fails to converge at all. A controlled experiment isolating feedback quality as the only variable shows detailed error messages causally drive repair success (McNemar p < 0.0001), and a repair-integrity classifier that diffs code before and after each fix found the frontier models never cheat by deleting a required resource, only the weakest model does. Reproduced against the IaC-Eval (NeurIPS 2024) benchmark: the one-shot GPT-4o score (21%) matches their published 19.36%, and repair lifts it to 45%.",
    keyDecisions:
      "Prompt-based repair, no fine-tuning, to isolate feedback as the sole variable; four independent referees, including a completeness check, so a fix can't be faked by deleting the flagged resource; a 10-iteration cap matching prior work (IaCGen) for comparability; two benchmark tiers, ported IaC-Eval tasks plus reverse-engineered production scenarios, with calibrated gold references.",
    stack: [
      "Python",
      "Terraform",
      "Checkov",
      "tfsec",
      "OPA/Conftest",
      "GPT-4o / Claude Sonnet / Llama 3.1",
      "React",
      "Statistics (McNemar, survival analysis)",
    ],
    links: {},
    status: "Writing up",
  },
];
