import type { Metadata } from "next";
import { Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";
import { site, stats } from "@/data/site";
import { experience, education, publication } from "@/data/experience";
import { projects } from "@/data/projects";
import { noteworthyProjects } from "@/data/noteworthy";
import { skillGroups } from "@/data/skills";
import { certifications, issuerTotals, issuerProfiles } from "@/data/certifications";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Portfolio — Work Sample",
  // A print-only mirror of the site content; keep it out of search indexes to
  // avoid duplicate-content with the main page.
  robots: { index: false, follow: true },
};

// A condensed professional summary, distilled from the About section into
// plain prose suitable for a static document.
const summary = [
  "Backend engineer turned AI developer. My path started with two years of enterprise Java/Spring Boot at Vrize in Bangalore — real production systems for real clients, where testing, CI/CD, and maintainable code mattered more than a passing notebook cell.",
  "Now I'm focused on LLM evaluation, RAG pipelines, and shipping GenAI features that survive contact with real users. I moved to Berlin for an M.Sc. in Big Data & AI at SRH (graduating Sept 2026), where I also work as a Research Assistant building retrieval pipelines. My master's thesis is an empirical study of verifier-guided LLM self-repair across three frontier models — built with backend discipline: sandboxed execution, eval harnesses, streaming APIs, and Infrastructure-as-Code.",
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 break-after-avoid border-b-2 border-teal-700 pb-1 text-[15px] font-bold uppercase tracking-wide text-teal-800">
      {children}
    </h2>
  );
}

function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="rounded border border-neutral-300 bg-neutral-50 px-2 py-0.5 font-mono text-[10px] text-neutral-700"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function PrintPage() {
  const generated = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });

  return (
    <div className="min-h-screen bg-neutral-200 py-8 print:bg-white print:py-0">
      <PrintButton />

      {/* Print-only rules: A4 page box, white background, hide the site's fixed
          decorative layers (aurora/particles/spotlight) and the action button. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              @page { size: A4; margin: 12mm; }
              html, body { background: #ffffff !important; }
              .no-print { display: none !important; }
              canvas { display: none !important; }
              .fixed[aria-hidden="true"] { display: none !important; }
            }
          `,
        }}
      />

      <main className="mx-auto max-w-[820px] bg-white px-12 py-10 text-[12.5px] leading-relaxed text-neutral-800 shadow-xl print:max-w-none print:px-0 print:py-0 print:shadow-none">
        {/* ---------- Header ---------- */}
        <header className="break-inside-avoid border-b border-neutral-200 pb-5">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            {site.name}
          </h1>
          <p className="mt-1 text-base font-medium text-teal-800">{site.title}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11.5px] text-neutral-600">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={13} className="text-teal-700" aria-hidden /> {site.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-teal-700" aria-hidden /> {site.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe size={13} className="text-teal-700" aria-hidden />{" "}
              {site.url.replace(/^https?:\/\//, "")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Github size={13} className="text-teal-700" aria-hidden />{" "}
              {site.github.replace(/^https?:\/\//, "")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Linkedin size={13} className="text-teal-700" aria-hidden />{" "}
              {site.linkedin.replace(/^https?:\/\/(www\.)?/, "")}
            </span>
          </div>
          <p className="mt-3 inline-block rounded bg-teal-50 px-2.5 py-1 text-[11px] font-medium text-teal-800">
            {site.availability}
          </p>
        </header>

        {/* ---------- Summary ---------- */}
        <section className="mt-6">
          <Heading>Summary</Heading>
          <div className="space-y-2">
            {summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-neutral-700">
            {stats.map((s) => (
              <span key={s.label}>
                <span className="font-bold text-teal-800">
                  {s.value}
                  {s.suffix}
                </span>{" "}
                {s.label}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="mt-6">
          <Heading>Experience</Heading>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[13.5px] font-semibold text-neutral-900">
                    {job.role}{" "}
                    <span className="font-normal text-neutral-500">· {job.company}</span>
                  </h3>
                  <span className="whitespace-nowrap font-mono text-[10.5px] text-neutral-500">
                    {job.period}
                  </span>
                </div>
                <p className="font-mono text-[10.5px] text-neutral-500">{job.location}</p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-teal-700">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                {job.tags && <Chips items={job.tags} />}
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Education ---------- */}
        <section className="mt-6">
          <Heading>Education</Heading>
          <div className="space-y-3">
            {education.map((ed) => (
              <div key={ed.school + ed.degree} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[13.5px] font-semibold text-neutral-900">{ed.degree}</h3>
                  <span className="whitespace-nowrap font-mono text-[10.5px] text-neutral-500">
                    {ed.period}
                  </span>
                </div>
                <p className="font-mono text-[10.5px] text-neutral-500">
                  {ed.school} · {ed.location}
                </p>
                <ul className="mt-1.5 list-disc space-y-1 pl-5 marker:text-teal-700">
                  {ed.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Publication ---------- */}
        <section className="mt-6 break-inside-avoid">
          <Heading>Publication</Heading>
          <h3 className="text-[13.5px] font-semibold text-neutral-900">
            {publication.title}
          </h3>
          <p className="font-mono text-[10.5px] text-neutral-500">{publication.venue}</p>
          <p className="mt-1.5">{publication.description}</p>
          <p className="mt-1 font-mono text-[10.5px] text-teal-800">
            {publication.link.replace(/^https?:\/\//, "")}
          </p>
        </section>

        {/* ---------- Featured Projects ---------- */}
        <section className="mt-6">
          <Heading>Featured Projects</Heading>
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.title} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[13.5px] font-semibold text-neutral-900">{p.title}</h3>
                  {p.status && (
                    <span className="whitespace-nowrap rounded bg-amber-50 px-2 py-0.5 font-mono text-[10px] text-amber-700">
                      {p.status}
                    </span>
                  )}
                </div>
                {p.problem && (
                  <p className="mt-0.5 text-[11.5px] italic text-neutral-500">{p.problem}</p>
                )}
                <p className="mt-1">{p.description}</p>
                {p.keyDecisions && (
                  <p className="mt-1 text-[11.5px] text-neutral-600">
                    <span className="font-semibold text-neutral-700">Key decisions: </span>
                    {p.keyDecisions}
                  </p>
                )}
                {(p.links.live || p.links.github) && (
                  <p className="mt-1 font-mono text-[10.5px] text-teal-800">
                    {[p.links.live, p.links.github]
                      .filter(Boolean)
                      .map((l) => l!.replace(/^https?:\/\//, ""))
                      .join("  ·  ")}
                  </p>
                )}
                <Chips items={p.stack} />
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Other Projects ---------- */}
        <section className="mt-6">
          <Heading>Other Projects</Heading>
          <div className="space-y-3">
            {noteworthyProjects.map((p) => (
              <div key={p.title} className="break-inside-avoid">
                <h3 className="text-[12.5px] font-semibold text-neutral-900">
                  {p.title}
                  {p.status && (
                    <span className="ml-2 font-mono text-[10px] font-normal text-neutral-500">
                      ({p.status})
                    </span>
                  )}
                </h3>
                <p className="mt-0.5">{p.description}</p>
                <p className="mt-1 font-mono text-[10px] text-neutral-500">
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="mt-6 break-inside-avoid">
          <Heading>Skills</Heading>
          <dl className="space-y-1.5">
            {skillGroups.map((g) => (
              <div key={g.label} className="flex gap-3">
                <dt className="w-28 shrink-0 text-[11.5px] font-semibold text-neutral-700">
                  {g.label}
                </dt>
                <dd className="text-[11.5px] text-neutral-700">{g.skills.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- Certifications ---------- */}
        <section className="mt-6 break-inside-avoid">
          <Heading>Certifications</Heading>
          <div className="space-y-2">
            {(Object.keys(issuerTotals) as Array<keyof typeof issuerTotals>).map((issuer) => (
              <div key={issuer}>
                <p className="text-[11.5px] font-semibold text-neutral-700">
                  {issuer}{" "}
                  <span className="font-normal text-neutral-500">
                    ({issuerTotals[issuer]} badges ·{" "}
                    {issuerProfiles[issuer].replace(/^https?:\/\/(www\.)?/, "")})
                  </span>
                </p>
                <p className="text-[11.5px] text-neutral-700">
                  {certifications
                    .filter((c) => c.issuer === issuer)
                    .map((c) => c.name)
                    .join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Languages ---------- */}
        <section className="mt-6 break-inside-avoid">
          <Heading>Languages</Heading>
          <p className="text-[11.5px] text-neutral-700">
            {site.languages.map((l) => `${l.name} (${l.level})`).join("  ·  ")}
          </p>
        </section>

        <footer className="mt-8 border-t border-neutral-200 pt-3 text-center text-[10px] text-neutral-400">
          Generated from {site.url.replace(/^https?:\/\//, "")} · {generated}
        </footer>
      </main>
    </div>
  );
}
