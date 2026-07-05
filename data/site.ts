export const site = {
  name: "Gagandeep Shivanna",
  initials: "GS",
  title: "AI/ML Engineer & Backend Developer",
  oneLiner:
    "Backend engineer turned AI developer. I build LLM-powered applications, NLP pipelines, and cloud automation.",
  location: "Berlin, Germany",
  availability:
    "Open to Werkstudent, internship & full-time AI/ML roles in Germany",
  email: "gagan017ger@gmail.com",
  github: "https://github.com/GagandeepS017",
  linkedin: "https://www.linkedin.com/in/gagandeep-s017",
  resume: "/resume.pdf",
  // Update this to your production domain after the first Vercel deploy.
  url: "https://gagandeep-portfolio.vercel.app",
  description:
    "Portfolio of Gagandeep Shivanna, AI/ML Engineer and Backend Developer in Berlin. LLM-powered applications, NLP pipelines, and cloud automation. Open to Werkstudent, internship, and full-time roles in Germany.",
  languages: [
    { name: "English", level: "C2" },
    { name: "German", level: "B1" },
    { name: "Kannada", level: "Native" },
  ],
} as const;

export const heroHighlights = [
  "M.Sc. Big Data & AI @ SRH Berlin",
  "2+ yrs enterprise backend",
  "Conference publication",
  "Production LLM apps",
] as const;

export const stats = [
  { value: 2, suffix: "+", label: "Years professional experience" },
  { value: 4, suffix: "", label: "Featured projects" },
  { value: 1, suffix: "", label: "Conference publication" },
  { value: 3, suffix: "", label: "Cloud platforms (AWS, Azure, GCP)" },
] as const;

export const services = [
  {
    title: "LLM & GenAI Applications",
    description:
      "RAG pipelines, prompt engineering, eval harnesses, and Claude API integrations that make it to production.",
  },
  {
    title: "Backend & APIs",
    description:
      "FastAPI and Spring Boot services, RESTful APIs, microservices, and real-time WebSocket/SSE systems.",
  },
  {
    title: "Cloud & Infrastructure-as-Code",
    description:
      "Terraform, AWS/GCP/Azure, GitHub Actions with OIDC, Docker, and CI/CD pipelines.",
  },
  {
    title: "Data & NLP Pipelines",
    description:
      "Document classification, information extraction, analytics, and synthetic data with fidelity metrics.",
  },
] as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
