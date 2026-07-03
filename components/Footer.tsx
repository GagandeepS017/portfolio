import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 sm:grid-cols-2 sm:px-10 lg:grid-cols-3">
        <div>
          <p className="font-mono text-lg font-bold text-accent">
            {site.initials}
            <span className="text-neutral-500">/</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-500">
            {site.oneLiner}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-neutral-500">
            <MapPin size={13} aria-hidden />
            {site.location}
          </p>
        </div>

        <nav aria-label="Footer">
          <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 transition-colors hover:text-accent"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-accent"
              >
                <Github size={15} aria-hidden />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-accent"
              >
                <Linkedin size={15} aria-hidden />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-accent"
              >
                <Mail size={15} aria-hidden />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800/60">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-10">
          <p className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} {site.name} · Built with Next.js,
            Tailwind CSS &amp; Framer Motion
          </p>
          <a
            href="#content"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 transition-colors hover:text-accent"
          >
            <ArrowUp size={14} aria-hidden />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
