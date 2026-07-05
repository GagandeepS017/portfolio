import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Edge runtime: avoids a @vercel/og path bug on Windows dirs with spaces,
// and renders the OG image on demand at Vercel's edge.
export const runtime = "edge";
export const alt = `${site.name} | ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 70% 20%, rgba(45,212,191,0.15), transparent)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#2dd4bf",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          {site.location} · {site.email}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#a3a3a3",
            marginTop: 16,
          }}
        >
          {site.title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#737373",
          }}
        >
          LLM applications · NLP pipelines · Cloud automation
        </div>
      </div>
    ),
    size
  );
}
