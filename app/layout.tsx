import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import Ambient from "@/components/Ambient";
import Particles from "@/components/Particles";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "AI/ML Engineer",
    "Backend Developer",
    "LLM",
    "NLP",
    "GenAI",
    "FastAPI",
    "Spring Boot",
    "Terraform",
    "Berlin",
    "Werkstudent",
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | ${site.title}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.title}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <Ambient />
        <Particles />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
