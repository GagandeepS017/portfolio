export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming",
    skills: ["Python", "Java", "JavaScript/TypeScript", "SQL", "C", "C++"],
  },
  {
    label: "LLM & GenAI",
    skills: [
      "RAG",
      "LangChain",
      "Claude API",
      "OpenAI API",
      "Ollama",
      "Prompt Engineering",
      "Agent Workflows",
    ],
  },
  {
    label: "Vector & Retrieval",
    skills: ["ChromaDB", "Embeddings", "Semantic Search", "Chunking Strategy"],
  },
  {
    label: "LLM Evaluation",
    skills: [
      "Eval Harness Design",
      "RLHF Preference Data",
      "Rubric Design",
      "MLflow",
      "Text-to-SQL Eval",
    ],
  },
  {
    label: "AI/ML",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Keras",
      "Transformers",
      "BERT",
      "LSTMs",
    ],
  },
  {
    label: "Development",
    skills: [
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "WebSockets",
      "MySQL",
      "MongoDB",
      "Node.js",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS",
      "GCP",
      "Azure",
      "Terraform",
      "IaC",
      "Docker",
      "Jenkins",
      "CI/CD",
      "GitHub Actions",
      "Render",
      "Vercel",
    ],
  },
  {
    label: "Testing",
    skills: [
      "JUnit",
      "pytest",
      "Checkov",
      "tfsec",
      "OPA/Rego",
      "Cross-validation",
      "Test Automation",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "Jira", "PowerBI", "Tableau", "VS Code", "Confluence", "Jupyter", "Recharts"],
  },
];
