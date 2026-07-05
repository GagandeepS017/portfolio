export type Issuer = "AWS Educate" | "Google Cloud";

export type Certification = {
  name: string;
  issuer: Issuer;
  image: string;
  // Public verification page for this specific badge.
  verify: string;
};

// Real, individually verifiable badges (images + verify links). A curated
// subset is shown per issuer; the "view all" card in each row links to the
// full public profile in issuerProfiles below.
export const certifications: Certification[] = [
  // --- Google Cloud ------------------------------------------------------
  {
    name: "MLOps for Generative AI",
    issuer: "Google Cloud",
    image: "/badges/gcp-mlops-genai.png",
    verify:
      "https://www.skills.google/public_profiles/35c2502e-d73d-450e-83ea-f7db2b037274/badges/16866035",
  },
  {
    name: "MLOps with Vertex AI: Model Evaluation",
    issuer: "Google Cloud",
    image: "/badges/gcp-mlops-vertex.png",
    verify:
      "https://www.skills.google/public_profiles/35c2502e-d73d-450e-83ea-f7db2b037274/badges/16887623",
  },
  {
    name: "Introduction to Security in the World of AI",
    issuer: "Google Cloud",
    image: "/badges/gcp-security-ai.png",
    verify:
      "https://www.skills.google/public_profiles/35c2502e-d73d-450e-83ea-f7db2b037274/badges/16887706",
  },
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Google Cloud",
    image: "/badges/gcp-core-infra.png",
    verify:
      "https://www.skills.google/public_profiles/35c2502e-d73d-450e-83ea-f7db2b037274/badges/16865958",
  },
  {
    name: "Implement Load Balancing on Compute Engine",
    issuer: "Google Cloud",
    image: "/badges/gcp-load-balancing.png",
    verify: "https://www.credly.com/badges/37e8375c-6bee-4d0f-a35f-edabf57983c9",
  },

  // --- AWS Educate -------------------------------------------------------
  {
    name: "Machine Learning Foundations",
    issuer: "AWS Educate",
    image: "/badges/aws-ml-foundations.png",
    verify: "https://www.credly.com/badges/230d63dd-280a-4509-81ba-9883c9516e99",
  },
  {
    name: "Machine Learning: DeepRacer",
    issuer: "AWS Educate",
    image: "/badges/aws-deepracer.png",
    verify: "https://www.credly.com/badges/22532df8-6c29-4925-b7fd-c2c5060a4a33",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "AWS Educate",
    image: "/badges/aws-genai.png",
    verify: "https://www.credly.com/badges/95cc2edd-98ce-452b-96cc-cd622a606284",
  },
  {
    name: "Introduction to Cloud 101",
    issuer: "AWS Educate",
    image: "/badges/aws-cloud-101.png",
    verify: "https://www.credly.com/badges/a3bf4230-48a8-4a9f-8f91-c8cba6589452",
  },
];

// Full public badge profile per issuer, linked from each row's "view all" card.
export const issuerProfiles: Record<Issuer, string> = {
  "Google Cloud":
    "https://www.skills.google/public_profiles/35c2502e-d73d-450e-83ea-f7db2b037274",
  "AWS Educate": "https://www.credly.com/users/gagandeep-shivanna/badges",
};

// Total badges earned per issuer (shown as the count label). These reflect the
// full public profiles above, not the curated subset displayed as cards.
export const issuerTotals: Record<Issuer, number> = {
  "Google Cloud": 26,
  "AWS Educate": 8,
};
