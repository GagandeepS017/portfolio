export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  logo?: string;
  tags?: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string[];
  logo?: string;
};

export const experience: Experience[] = [
  {
    role: "AI Trainer Analyst",
    company: "Sovrano AI",
    period: "06/2026 – Present",
    location: "Remote",
    logo: "/logos/sovrano.svg",
    points: [
      "Designed and applied a rubric-based evaluation methodology for LLM output quality across accuracy, relevance, and safety, building gold-standard reference sets used to score model responses.",
      "Ran structured side-by-side RLHF-style model comparisons and pairwise preference evaluation, producing the labelled preference data used for reward-model training.",
      "Authored intent-level task decomposition specs for multi-step agent workflows, improving inter-annotator consistency across the evaluation pipeline.",
    ],
    tags: ["RLHF", "Model Evaluation", "Preference Data", "Agent Workflows", "Rubric Design"],
  },
  {
    role: "Research Assistant",
    company: "SRH University of Berlin",
    period: "09/2025 – 04/2026",
    location: "Berlin, Germany",
    logo: "/logos/srh.png",
    points: [
      "Built end-to-end RAG pipelines for document classification and information extraction, using ChromaDB for vector storage and semantic retrieval over domain document corpora.",
      "Tuned chunking strategy, embedding selection, and retrieval depth against a held-out evaluation set, improving extraction accuracy over a zero-shot baseline.",
      "Applied prompt engineering and structured output constraints to make extraction results machine-parseable and reproducible across model versions.",
    ],
    tags: ["RAG", "ChromaDB", "Semantic Search", "Prompt Engineering", "NLP"],
  },
  {
    role: "Backend Engineer",
    company: "Vrize India Pvt Ltd",
    period: "09/2022 – 07/2024",
    location: "Bangalore, India",
    logo: "/logos/vrize.png",
    points: [
      "Developed and maintained enterprise Java/Spring Boot applications (Zaxby's, Tonic): scalable RESTful APIs and backend microservices with database integration across MySQL and MongoDB.",
      "Architected modular backend services with Dependency Injection and AOP patterns to improve maintainability and reduce coupling across service layers.",
      "Led API debugging and unit/integration testing with JUnit and Mockito, identifying and resolving 50+ critical bugs and enforcing code quality through structured peer reviews.",
      "Automated deployment pipelines with Docker and Jenkins CI/CD, reducing manual release overhead and improving deployment reliability.",
      "Contributed to 15+ Agile sprint cycles, consistently meeting milestones and recognized for technical ownership and cross-functional collaboration.",
    ],
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "Docker", "Jenkins"],
  },
  {
    role: "Software Engineer Intern",
    company: "Vrize India Pvt Ltd",
    period: "03/2022 – 07/2022",
    location: "Bangalore, India",
    logo: "/logos/vrize.png",
    points: [
      "Trained on Java and Spring Boot fundamentals, then contributed to enterprise client applications under senior engineer mentorship.",
      "Worked across multiple teams on shared modules, picking up code review etiquette, Git workflows, and Agile ceremonies.",
      "Converted to a full-time Backend Engineer offer at the end of the internship.",
    ],
    tags: ["Java", "Spring Boot", "Git", "Agile"],
  },
];

export const education: Education[] = [
  {
    degree: "M.Sc. Big Data & Artificial Intelligence (120 ECTS)",
    school: "SRH University of Berlin",
    period: "07/2024 – Expected 09/2026",
    location: "Berlin, Germany",
    logo: "/logos/srh.png",
    details: [
      "Master's thesis: a failure taxonomy of LLM-generated Infrastructure-as-Code, a three-stage verifier (Terraform, Checkov, tfsec, OPA/Rego) plus an automated self-repair loop across 542 runs and three models, with survival analysis over 2,000+ logged errors.",
      "Coursework across machine learning, deep learning, cloud, and data engineering; hands-on with AWS, Azure, and GCP, backed by 30+ cloud and AI badges.",
      "Current CGPA 1.4 on the German 1.0–5.0 scale (1.0 = best).",
    ],
  },
  {
    degree: "B.E. Information Science & Engineering",
    school: "BMS College of Engineering, Bangalore",
    period: "2018 – 2022",
    location: "Bangalore, India",
    logo: "/logos/bmsce.svg",
    details: [
      "Final grade 8.17 / 10 (EQF Level 6).",
      "Projects: NLP language detection (Naive Bayes), biomedical waste classification (ANN/VGG16), and a full-stack hospital management system (PHP/MySQL).",
    ],
  },
];

export const publication = {
  title: "Leveraging Supplier Stock Dynamics to Predict Tesla's Market Performance",
  venue: "Ohrid Conference, via SRH University of Berlin",
  description:
    "A stacking ensemble model that combines LSTM and Random Forest predictions in an XGBoost meta-learner to explore how supplier stock movements relate to Tesla's stock price.",
  link: "https://github.com/GagandeepS017/tesla-supplier-prediction",
  paper: "/tesla-supplier-paper.pdf",
} as const;
