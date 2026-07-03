import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
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
    </footer>
  );
}
