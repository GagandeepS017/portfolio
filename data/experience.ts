export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  details: string[];
};

export const experience: Experience[] = [
  {
    role: "Research Assistant",
    company: "SRH University of Berlin",
    period: "09/2025 – 04/2026",
    location: "Berlin, Germany",
    points: [
      "Built and evaluated NLP pipelines for document classification and information extraction, applying prompt engineering and RAG under Prof. Dr. Alexander Iliev.",
      "Synthesized research across cognitive science and AI ethics into structured academic writing.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Vrize India Pvt Ltd",
    period: "09/2022 – 07/2024",
    location: "Bangalore, India",
    points: [
      "Developed enterprise Java/Spring Boot applications (Zaxby's, Tonic): scalable RESTful APIs and microservices across MySQL & MongoDB.",
      "Architected modular backend services with Dependency Injection and AOP patterns to reduce coupling across service layers.",
      "Led API debugging and unit/integration testing with JUnit and Mockito, enforcing code quality through structured peer reviews.",
      "Automated deployment pipelines with Docker + Jenkins CI/CD, reducing manual release overhead across environments.",
      "Delivered in Agile sprint cycles, recognized for technical ownership and cross-functional collaboration.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.Sc. Big Data & Artificial Intelligence (120 ECTS)",
    school: "SRH University of Berlin",
    period: "07/2024 – Expected 09/2026",
    location: "Berlin, Germany",
    details: [
      "Cloud across AWS, Azure & GCP; ML, deep learning, data engineering, distributed systems.",
    ],
  },
  {
    degree: "B.E. Information Science & Engineering",
    school: "BMS College of Engineering, Bangalore",
    period: "2018 – 2022",
    location: "Bangalore, India",
    details: ["CGPA 8.17"],
  },
];

export const publication = {
  title:
    "Supplier Stock Movements as Predictors of Tesla's Stock Price: A Stacking Ensemble Approach",
  venue: "Ohrid Conference, via SRH University of Berlin",
  description:
    "A stacking ensemble model that combines LSTM and Random Forest predictions in an XGBoost meta-learner to explore how supplier stock movements relate to Tesla's stock price.",
  link: "https://github.com/GagandeepS017/tesla-supplier-prediction",
} as const;
