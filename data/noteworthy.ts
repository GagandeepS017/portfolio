export type NoteworthyProject = {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status?: string;
};

// Smaller academic / personal projects shown as compact cards under the
// featured work. Seeded from real resume projects; private beta projects can
// be added here with an optional `live` link and screenshot later.
export const noteworthyProjects: NoteworthyProject[] = [
  {
    title: "GitHub MCP Server",
    description:
      "Remote MCP server on Cloudflare Workers that lets Claude on my phone browse my repos and file ideas as issues. OAuth 2.1 with PKCE, a server-side PAT (no token passthrough), and a deliberately read-heavy toolset: nine tools, one write.",
    stack: ["TypeScript", "MCP", "Cloudflare Workers", "OAuth 2.1", "Octokit"],
    status: "Private",
  },
  {
    title: "ChessTalk",
    description:
      "Chess improvement app that pulls your chess.com games, runs Stockfish in the browser to classify blunders by game phase, and coaches you through your weak spots with talking pieces.",
    stack: ["React", "Vite", "Stockfish WASM", "chess.com API", "Cloudflare Workers"],
    status: "Private Beta",
  },
  {
    title: "Deepfake Detection in Art & Media",
    description:
      "CNN- and GAN-based models that flag AI-manipulated images, separating authentic artwork from synthetic forgeries.",
    stack: ["Python", "TensorFlow", "CNN", "GANs", "OpenCV"],
  },
  {
    title: "YouTube AI Video Discovery",
    description:
      "Semantic enrichment pipeline that surfaces under-described or less-popular videos using NLP and Google Cloud AI APIs.",
    stack: ["Python", "NLP", "GCP", "Vertex AI"],
  },
  {
    title: "Language Detection (NLP)",
    description:
      "Text-based language identification for Indian languages using a Naive Bayes classifier over n-gram features.",
    stack: ["Python", "Scikit-learn", "NLP", "Naive Bayes"],
  },
  {
    title: "Biomedical Waste Classification",
    description:
      "COVID-era biomedical waste segregation using an ANN with VGG16 transfer learning for image classification.",
    stack: ["Python", "Keras", "VGG16", "ANN"],
  },
];
