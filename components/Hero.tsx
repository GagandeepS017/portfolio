"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

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
      className="relative flex min-h-[92vh] flex-col justify-center pb-16 pt-28"
    >
      {/* Background: grid + accent glow, fades toward content */}
      <div className="pointer-events-none absolute inset-x-[-40rem] inset-y-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black_30%,transparent_75%)]" />
        <div className="absolute left-1/2 top-10 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

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

        <motion.h1
          variants={item}
          className="mt-8 text-4xl font-bold tracking-tight text-neutral-50 sm:text-6xl lg:text-7xl"
        >
          {site.name}
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="mt-4 text-2xl font-semibold tracking-tight text-neutral-400 sm:text-4xl"
        >
          {site.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          {site.oneLiner}
        </motion.p>

        <motion.p variants={item} className="mt-3 font-mono text-sm text-neutral-500">
          {site.location} · Student visa, work permitted
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded bg-accent px-6 py-3 font-mono text-sm font-semibold text-neutral-950 transition-colors hover:bg-accent-dim"
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
            Download Resume
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
      </motion.div>
    </section>
  );
}
