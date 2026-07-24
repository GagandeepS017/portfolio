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
      "An empirical study of whether LLMs can self-repair the Terraform they write. A local pipeline verifies each config across syntax, security (Checkov + tfsec), and policy (Conftest/OPA) stages, then feeds structured errors back to the model for up to 10 repair rounds — logging ~2,000 errors across 542 runs over GPT-4o, Claude, and Llama 3.1. The result is a failure taxonomy of which error categories survive repair and why: a controlled experiment showing feedback quality causally drives repair success (McNemar p < 0.001), evidence that repair resistance is model-conditioned, and a repair-integrity classifier that catches models faking fixes by deleting the flagged resource — validated against the IaC-Eval (NeurIPS 2024) benchmark.",
    keyDecisions:
      "Prompt-based repair, no fine-tuning, to isolate feedback as the sole variable; four independent referees (Terraform validate/plan, Checkov, tfsec, Conftest/OPA) so a fix can't be faked by silencing one scanner; two benchmark tiers — ported IaC-Eval tasks plus reverse-engineered production scenarios — with calibrated gold references.",
    stack: [
      "Python",
      "Terraform",
      "Checkov",
      "tfsec",
      "OPA/Conftest",
      "OpenAI / Anthropic / Ollama",
      "React",
      "Statistics (McNemar, log-rank)",
    ],
    links: {},
    status: "Writing up",
  },
];
