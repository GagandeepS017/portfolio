export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript/TypeScript", "C", "C++"],
  },
  {
    label: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras", "MLflow"],
  },
  {
    label: "NLP & GenAI",
    skills: [
      "Transformers",
      "BERT",
      "RAG",
      "Prompt Engineering",
      "Claude API",
      "LangChain",
      "SSE Streaming",
    ],
  },
  {
    label: "Data",
    skills: ["NumPy", "Pandas", "Matplotlib", "SciPy", "OpenCV", "DuckDB", "SDV"],
  },
  {
    label: "Backend",
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
    skills: ["JUnit", "pytest", "Cross-validation", "Test Automation", "Text-to-SQL Eval"],
  },
  {
    label: "Tools",
    skills: ["Git", "Jira", "PowerBI", "Tableau", "Jupyter", "Recharts"],
  },
];
