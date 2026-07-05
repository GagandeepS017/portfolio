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
      live: "https://datagrid-eta.vercel.app",
      github: "https://github.com/GagandeepS017/Datagrid",
    },
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
      "LLMs generate Terraform that fails in ways nobody has systematically mapped.",
    description:
      "Research into LLM self-repair of Terraform across syntax, security, and policy verification stages, with a PRISMA-style literature-review pipeline built on arXiv/OpenAlex APIs.",
    stack: ["Python", "arXiv/OpenAlex APIs", "Terraform", "LLM evaluation"],
    links: {},
    status: "In Progress",
  },
];
