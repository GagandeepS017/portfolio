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
    role: "AI Trainer Analyst (Freelance)",
    company: "Sovrano AI",
    period: "06/2026 – Present",
    location: "Remote",
    logo: "/logos/sovrano.svg",
    points: [
      "Own end-to-end handling of assigned tickets, from creating structured training data to performing QA and reasoning-based evaluation, ensuring each output meets accuracy, relevance, and safety standards.",
      "Apply domain expertise and critical reasoning to compare and rate model responses in RLHF-style side-by-side evaluation, selecting and annotating the stronger output to reinforce desired model behavior.",
      "Maintain rigorous quality benchmarks through gold-standard tasks and self-audits of borderline cases, upholding data integrity and consistency against defined rubrics.",
    ],
    tags: ["RLHF", "Model Evaluation", "Data Annotation", "LLM QA", "AI Safety"],
  },
  {
    role: "Research Assistant",
    company: "SRH University of Berlin",
    period: "09/2025 – 04/2026",
    location: "Berlin, Germany",
    logo: "/logos/srh.png",
    points: [
      "Built and evaluated NLP pipelines for document classification and information extraction under Prof. Dr. Alexander Iliev.",
      "Applied prompt engineering and retrieval-augmented generation (RAG) to improve extraction accuracy on domain documents.",
      "Synthesized research across cognitive science and AI ethics into structured academic writing.",
    ],
    tags: ["NLP", "RAG", "Prompt Engineering", "Python", "Research"],
  },
  {
    role: "Associate Software Engineer",
    company: "Vrize India Pvt Ltd",
    period: "09/2022 – 07/2024",
    location: "Bangalore, India",
    logo: "/logos/vrize.png",
    points: [
      "Developed enterprise Java/Spring Boot applications (Zaxby's, Tonic): scalable RESTful APIs and microservices across MySQL & MongoDB.",
      "Architected modular backend services with Dependency Injection and AOP patterns to reduce coupling across service layers.",
      "Led API debugging and unit/integration testing with JUnit and Mockito, enforcing code quality through structured peer reviews.",
      "Automated deployment pipelines with Docker + Jenkins CI/CD, reducing manual release overhead across environments.",
      "Delivered in Agile sprint cycles, recognized for technical ownership and cross-functional collaboration.",
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
      "Converted to a full-time Associate Software Engineer offer at the end of the internship.",
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
      "Coursework: Artificial Intelligence, Advanced Machine Learning, Cloud Solutions, Data Analytics, and AI Use Cases.",
      "Hands-on across AWS, Azure, and Google Cloud, backed by 30+ cloud and AI badges.",
      "Led AI projects and research: deepfake detection (CNN/GAN), graph-based stock prediction, and NLP video discovery on GCP.",
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
