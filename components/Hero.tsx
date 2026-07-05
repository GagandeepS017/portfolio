"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { heroHighlights, site } from "@/data/site";

const phrases = [
  "LLM-powered applications.",
  "NLP pipelines.",
  "cloud automation.",
  "backends that scale.",
];

function useTypewriter(active: boolean) {
  const [text, setText] = useState(active ? "" : phrases[0]);

  useEffect(() => {
    if (!active) return;
    let phrase = 0;
    let char = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phrase];
      if (!deleting) {
        char++;
        setText(current.slice(0, char));
        if (char === current.length) {
          deleting = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 60);
      } else {
        char--;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          phrase = (phrase + 1) % phrases.length;
        }
        timer = setTimeout(tick, 28);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [active]);

  return text;
}

function Terminal() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-md"
    >
      <div className="overflow-hidden rounded-xl border border-neutral-800 bg-[#0d0d10]/90 shadow-2xl shadow-accent/10 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="mx-auto -translate-x-3 font-mono text-xs text-neutral-500">
            gagandeep@berlin: ~/portfolio
          </span>
        </div>
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <p>
            <span className="text-accent">$</span>{" "}
            <span className="text-neutral-300">whoami</span>
          </p>
          <p className="text-neutral-400">backend engineer turned AI developer</p>
          <p className="mt-3">
            <span className="text-accent">$</span>{" "}
            <span className="text-neutral-300">cat profile.json</span>
          </p>
          <pre className="mt-1 text-neutral-500">
            {"{\n"}
            {'  "base": '}
            <span className="text-emerald-300">&quot;Berlin, DE&quot;</span>
            {",\n"}
            {'  "focus": ['}
            <span className="text-emerald-300">&quot;LLM apps&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;NLP&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;IaC&quot;</span>
            {"],\n"}
            {'  "stack": ['}
            <span className="text-emerald-300">&quot;Python&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;FastAPI&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Claude API&quot;</span>
            {"],\n"}
            {'  "open_to": ['}
            <span className="text-cyan-300">&quot;werkstudent&quot;</span>,{" "}
            <span className="text-cyan-300">&quot;full-time&quot;</span>
            {"],\n"}
            {'  "coffee": '}
            <span className="text-amber-300">true</span>
            {"\n}"}
          </pre>
          <p className="mt-3">
            <span className="text-accent">$</span>{" "}
            <span className="cursor-blink text-neutral-300">▍</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const typed = useTypewriter(!reduceMotion);

  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col justify-center pb-20 pt-28"
    >
      {/* Background: grid + accent glow, fades toward content */}
      <div className="pointer-events-none absolute inset-x-[-40rem] inset-y-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_75%)]" />
        <div className="absolute left-1/3 top-10 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[20rem] w-[28rem] rounded-full bg-cyan-500/[0.07] blur-[110px]" />
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-surface px-4 py-1.5 font-mono text-xs text-neutral-300">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {site.availability}
            </span>
          </motion.p>

          <motion.p variants={item} className="mt-8 font-mono text-sm text-accent">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 bg-gradient-to-br from-neutral-50 via-neutral-200 to-neutral-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
          >
            {site.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-5 min-h-[2.5rem] text-xl font-semibold text-neutral-400 sm:text-2xl"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="cursor-blink text-accent" aria-hidden>
              |
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl leading-relaxed text-neutral-400"
          >
            I spent two years shipping enterprise backends and now work on
            GenAI full time: RAG pipelines, eval harnesses, and
            Infrastructure-as-Code. Based in {site.location}, work permitted.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded bg-gradient-to-r from-teal-400 to-cyan-400 px-6 py-3 font-mono text-sm font-semibold text-neutral-950 transition-[filter] hover:brightness-110"
            >
              View Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-neutral-700 px-6 py-3 font-mono text-sm text-neutral-200 transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} aria-hidden />
              Resume
            </a>
            <div className="flex items-center gap-1">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded p-2.5 text-neutral-400 transition-colors hover:text-accent"
              >
                <Github size={20} aria-hidden />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded p-2.5 text-neutral-400 transition-colors hover:text-accent"
              >
                <Linkedin size={20} aria-hidden />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="rounded p-2.5 text-neutral-400 transition-colors hover:text-accent"
              >
                <Mail size={20} aria-hidden />
              </a>
            </div>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap gap-3"
            aria-label="Highlights"
          >
            {heroHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-neutral-800 bg-surface/60 px-4 py-1.5 font-mono text-xs text-neutral-400"
              >
                {highlight}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="hidden justify-center lg:flex"
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-neutral-500 transition-colors hover:text-accent sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.span
          className="flex flex-col items-center gap-1"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}
