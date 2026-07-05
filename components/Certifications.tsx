import { ArrowRight, ExternalLink } from "lucide-react";
import {
  certifications,
  issuerProfiles,
  issuerTotals,
  type Issuer,
} from "@/data/certifications";
import Section from "./Section";
import Reveal from "./Reveal";

const groupOrder: Issuer[] = ["Google Cloud", "AWS Educate"];

export default function Certifications() {
  return (
    <Section
      id="certifications"
      number="05"
      title="Certifications"
      subtitle="Cloud and AI badges from Google Cloud and AWS Educate, each publicly verifiable."
    >
      <div className="space-y-12">
        {groupOrder.map((issuer) => {
          const items = certifications.filter((c) => c.issuer === issuer);
          if (items.length === 0) return null;

          return (
            <div key={issuer}>
              <Reveal>
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
                  {issuer}
                  <span className="ml-2 text-neutral-600">
                    {String(issuerTotals[issuer]).padStart(2, "0")}
                  </span>
                </h3>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((cert, i) => (
                  <Reveal key={cert.name} delay={i * 0.03}>
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-800 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_8px_40px_-12px_rgba(45,212,191,0.18)]"
                      aria-label={`Verify ${cert.name} (${cert.issuer})`}
                    >
                      <div className="flex items-center justify-center bg-white/95 p-5">
                        {/* Badge artwork is hosted locally in /public/badges. */}
                        <img
                          src={cert.image}
                          alt={`${cert.name} badge`}
                          width={220}
                          height={220}
                          loading="lazy"
                          className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <p className="flex-1 text-sm font-medium leading-snug text-neutral-200">
                          {cert.name}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-neutral-400 transition-colors group-hover:text-accent">
                          Verify
                          <ExternalLink size={11} aria-hidden />
                        </span>
                      </div>
                    </a>
                  </Reveal>
                ))}

                {/* Netflix-style "see more" tile linking to the full profile. */}
                <Reveal delay={items.length * 0.03}>
                  <a
                    href={issuerProfiles[issuer]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-neutral-700 bg-surface/50 p-5 text-center transition-colors hover:border-accent/60 hover:bg-surface"
                    aria-label={`View all ${issuer} badges`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all group-hover:border-accent group-hover:text-accent group-hover:translate-x-0.5">
                      <ArrowRight size={22} aria-hidden />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-accent">
                      View all badges
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600">
                      {issuer === "Google Cloud" ? "on Skills Boost" : "on Credly"}
                    </span>
                  </a>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
