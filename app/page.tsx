"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  Coffee,
  Database,
  GitBranch,
  Mail,
  Network,
  Play,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const terminalLines = [
  "airflow scheduler: queued daily_finance_snapshot",
  "spark-submit: normalizing 42M records into curated zones",
  "dbt test: accepted_values + freshness checks passed",
  "kafka consumer: lag recovered, tea still hot",
];

const stats = [
  { value: "600+", label: "Airflow DAGs migrated" },
  { value: "95%", label: "manual effort reduced" },
  { value: "90%", label: "load time improved" },
];

const skillNodes = [
  { label: "Python", detail: "automation + orchestration" },
  { label: "SQL", detail: "modeling + performance" },
  { label: "PySpark", detail: "large scale transforms" },
  { label: "Airflow", detail: "DAG design + reliability" },
  { label: "Kafka", detail: "streaming ingestion" },
  { label: "Databricks", detail: "lakehouse workflows" },
  { label: "Azure", detail: "pipelines + DevOps" },
  { label: "AWS", detail: "cloud primitives" },
];

const projects = [
  {
    title: "Metadata-Aware Data Chatbot",
    context: "GenAI assistant for Big Data metadata discovery and lineage conversations.",
    impact: "Helped teams ask better questions of Hive and pipeline metadata without hunting through docs.",
    stack: ["Python", "LLM", "Hive", "SQL", "Visualization"],
    stages: ["metadata", "retrieve", "reason", "explain"],
  },
  {
    title: "Airflow DAG Migration Factory",
    context: "Reusable migration approach for moving hundreds of DAGs through Azure Pipelines.",
    impact: "Reduced repetitive deployment work and made release behavior easier to audit.",
    stack: ["Airflow", "Azure Pipelines", "Python", "Git"],
    stages: ["scan", "template", "validate", "ship"],
  },
  {
    title: "Kafka Ingestion Control Room",
    context: "Automation around ingestion, validation controls, and downstream observability.",
    impact: "Made data movement more predictable for operational analytics consumers.",
    stack: ["Kafka", "Hive", "SQL", "Shell"],
    stages: ["listen", "land", "validate", "alert"],
  },
];

const experience = [
  {
    role: "Technical Lead",
    company: "Infosys - Danske Bank",
    period: "2025 - Present",
    note: "Leading data engineering delivery, cross-squad alignment, and automation-heavy workflow design.",
  },
  {
    role: "Technical Analyst",
    company: "Infosys - Danske Bank",
    period: "2023 - 2025",
    note: "Built ETL pipelines, migrated DAGs, and created metadata tooling for Big Data teams.",
  },
  {
    role: "Software Engineer",
    company: "Danske IT",
    period: "2021 - 2023",
    note: "Automated ingestion, CI/CD, validation controls, and practical ML workflows.",
  },
];

const notes = [
  "Reliable data systems are mostly taste: tiny contracts, visible failures, boring retries.",
  "A pipeline is a promise. The dashboard is just where the promise becomes visible.",
  "My favorite architecture diagrams have enough room for the human who has to debug them at 2 AM.",
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080b0f] text-stone-100">
      <DataPlaygroundBackground />

      <motion.div
        className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-20 pt-24 sm:px-8 lg:px-12"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ThoughtsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

function DataPlaygroundBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.18),transparent_28%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.14),transparent_30%),linear-gradient(135deg,#07090d_0%,#10151d_48%,#120f0a_100%)]" />
      <div className="data-grid absolute inset-0 opacity-35" />
      <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-amber-300/30 to-transparent" />
      <div className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-300/20 to-transparent" />
      <motion.div
        className="absolute left-[12%] top-[-10%] h-80 w-80 rounded-full border border-amber-300/10 bg-amber-400/10 blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[8%] h-96 w-96 rounded-full border border-teal-300/10 bg-teal-400/10 blur-3xl"
        animate={{ y: [0, -36, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pipeline-rain absolute inset-x-0 top-16 h-32" />
    </div>
  );
}

function HeroSection() {
  return (
    <motion.section
      id="home"
      className="grid min-h-[calc(100vh-6rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-200/10 px-4 py-2 text-sm text-amber-100 shadow-[0_0_30px_rgba(245,158,11,0.08)]">
          <Sparkles size={16} aria-hidden="true" />
          Data Engineer&apos;s Playground meets Cozy Hacker
        </div>

        <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-normal text-stone-50 sm:text-6xl lg:text-7xl">
          Anjali Vashisth builds systems that move data, not just dashboards.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
          I design the quiet machinery behind analytics: resilient pipelines,
          trusted datasets, metadata tools, and automation that lets teams spend
          less time chasing broken jobs and more time making decisions.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-300 px-5 py-3 font-semibold text-stone-950 shadow-[0_0_30px_rgba(245,158,11,0.25)] transition hover:-translate-y-0.5 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#080b0f]"
          >
            Inspect the pipelines
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            href="mailto:jobsforanjalivashisth@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-teal-300/35 bg-teal-300/10 px-5 py-3 font-semibold text-teal-100 transition hover:-translate-y-0.5 hover:border-teal-200 hover:bg-teal-300/15 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-[#080b0f]"
          >
            Start a conversation
            <Mail size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="rounded-md border border-stone-700/70 bg-stone-950/55 p-4 backdrop-blur"
              whileHover={{ y: -4, borderColor: "rgba(45, 212, 191, 0.55)" }}
            >
              <div className="font-mono text-3xl font-bold text-teal-200">{stat.value}</div>
              <div className="mt-1 text-sm text-stone-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="rounded-lg border border-stone-700/80 bg-[#0b1117]/90 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center justify-between border-b border-stone-800 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-teal-300" />
            </div>
            <div className="font-mono text-xs text-stone-500">pipeline.run.log</div>
          </div>

          <div className="space-y-4 p-5 font-mono text-sm">
            {terminalLines.map((line, index) => (
              <motion.div
                key={line}
                className="flex gap-3 text-stone-300"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + index * 0.35 }}
              >
                <span className="text-teal-300">$</span>
                <span>{line}</span>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-stone-800 p-5">
            <PipelinePreview />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

function PipelinePreview() {
  const nodes = [
    { icon: Database, label: "raw" },
    { icon: Braces, label: "clean" },
    { icon: GitBranch, label: "model" },
    { icon: BadgeCheck, label: "serve" },
  ];

  return (
    <div className="grid grid-cols-4 items-center gap-2">
      {nodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <div key={node.label} className="relative">
            <motion.div
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-md border border-teal-300/25 bg-teal-300/[0.06] text-teal-100"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(45,212,191,0)",
                  "0 0 24px rgba(45,212,191,0.18)",
                  "0 0 0 rgba(45,212,191,0)",
                ],
              }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35 }}
            >
              <Icon size={22} aria-hidden="true" />
              <span className="font-mono text-xs">{node.label}</span>
            </motion.div>
            {index < nodes.length - 1 && (
              <motion.div
                className="absolute left-full top-1/2 z-10 hidden h-px w-2 -translate-y-1/2 bg-gradient-to-r from-teal-300 to-amber-300 sm:block"
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.25 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <div>
        <p className="section-kicker">about</p>
        <h2 className="section-title">The person behind the scheduler.</h2>
      </div>
      <div className="rounded-lg border border-stone-700/70 bg-stone-950/55 p-6 text-stone-300 shadow-xl shadow-black/20 backdrop-blur sm:p-8">
        <p className="leading-8">
          My work sits where messy reality meets dependable systems. I like
          translating &quot;we need this report before standup&quot; into ingestion,
          validation, orchestration, and lineage that can survive real traffic,
          imperfect source data, and Monday morning urgency.
        </p>
        <p className="mt-5 leading-8">
          The vibe is practical: a terminal open, a warm desk light, chai nearby,
          and enough curiosity to ask why a data contract broke before simply
          restarting the job. I care about systems that feel humane to maintain.
        </p>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  return (
    <motion.section id="skills" variants={fadeUp} transition={{ duration: 0.55 }}>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">skills</p>
          <h2 className="section-title">A pipeline-shaped toolbox.</h2>
        </div>
        <p className="max-w-xl text-stone-400">
          Less keyword soup, more signal: these are the tools I use to move
          data from fragile source systems into something teams can trust.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillNodes.map((skill, index) => (
          <motion.div
            key={skill.label}
            className="group relative overflow-hidden rounded-lg border border-stone-700/70 bg-stone-950/60 p-5"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/70 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs text-stone-500">
                node_{String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(252,211,77,0.7)]" />
            </div>
            <h3 className="text-xl font-bold text-stone-100">{skill.label}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-400">{skill.detail}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  return (
    <motion.section id="projects" variants={fadeUp} transition={{ duration: 0.55 }}>
      <div className="mb-8">
        <p className="section-kicker">projects</p>
        <h2 className="section-title">Interactive cards as mini data products.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <SampleProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
}

function SampleProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <motion.article
      className="group flex min-h-[420px] flex-col justify-between rounded-lg border border-stone-700/80 bg-[#0c1118]/85 p-5 shadow-xl shadow-black/20 backdrop-blur"
      whileHover={{ y: -6, borderColor: "rgba(251,191,36,0.55)" }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div>
        <div className="mb-5 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-xs font-medium text-teal-100">
            <Network size={14} aria-hidden="true" />
            data product
          </div>
          <Play className="text-amber-300 transition group-hover:translate-x-1" size={18} aria-hidden="true" />
        </div>

        <h3 className="text-2xl font-bold text-stone-50">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-stone-400">{project.context}</p>

        <div className="my-6 rounded-md border border-stone-800 bg-black/30 p-4">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs text-stone-500">
            <Terminal size={14} aria-hidden="true" />
            project.flow
          </div>
          <div className="grid grid-cols-2 gap-2">
            {project.stages.map((stage, index) => (
              <div key={stage} className="flex items-center gap-2 rounded border border-stone-800 bg-stone-950/80 px-3 py-2 font-mono text-xs text-stone-300">
                <motion.span
                  className="h-2 w-2 rounded-full bg-teal-300"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: index * 0.18 }}
                />
                {stage}
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm leading-6 text-amber-100/90">{project.impact}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-amber-200/10 px-3 py-1 text-xs font-medium text-amber-100">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ExperienceSection() {
  return (
    <motion.section id="experience" variants={fadeUp} transition={{ duration: 0.55 }}>
      <div className="mb-8">
        <p className="section-kicker">experience</p>
        <h2 className="section-title">Career timeline, drawn like data lineage.</h2>
      </div>

      <div className="relative space-y-5 pl-6">
        <div className="absolute bottom-8 left-2 top-8 w-px bg-gradient-to-b from-teal-300 via-amber-300 to-orange-300" />
        {experience.map((job, index) => (
          <motion.div
            key={`${job.role}-${job.period}`}
            className="relative rounded-lg border border-stone-700/70 bg-stone-950/55 p-5 backdrop-blur"
            whileHover={{ x: 4 }}
          >
            <span className="absolute -left-[1.55rem] top-7 h-4 w-4 rounded-full border-2 border-[#080b0f] bg-amber-300 shadow-[0_0_22px_rgba(251,191,36,0.7)]" />
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal-200">stage {index + 1}</p>
                <h3 className="mt-1 text-xl font-bold text-stone-50">{job.role}</h3>
                <p className="text-stone-400">{job.company}</p>
              </div>
              <span className="font-mono text-sm text-amber-200">{job.period}</span>
            </div>
            <p className="mt-4 max-w-3xl leading-7 text-stone-300">{job.note}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function ThoughtsSection() {
  return (
    <motion.section id="thoughts" variants={fadeUp} transition={{ duration: 0.55 }}>
      <div className="mb-8">
        <p className="section-kicker">blog / thoughts</p>
        <h2 className="section-title">Notes from the debug console.</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {notes.map((note, index) => (
          <div key={note} className="rounded-lg border border-stone-700/70 bg-black/25 p-5 font-mono text-sm leading-7 text-stone-300">
            <span className="mb-4 block text-xs text-teal-300">log.{index + 1}</span>
            {note}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="rounded-lg border border-amber-300/25 bg-gradient-to-br from-amber-300/10 via-stone-950/70 to-teal-300/10 p-6 sm:p-8"
      variants={fadeUp}
      transition={{ duration: 0.55 }}
    >
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="section-kicker">contact</p>
          <h2 className="section-title">Have a pipeline worth taming?</h2>
          <p className="mt-4 max-w-2xl text-stone-300">
            I am open to data engineering, platform, and analytics engineering
            conversations where reliability, automation, and clear storytelling matter.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:jobsforanjalivashisth@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-teal-300 px-5 py-3 font-semibold text-stone-950 transition hover:-translate-y-0.5 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-100 focus:ring-offset-2 focus:ring-offset-[#080b0f]"
          >
            <Mail size={18} aria-hidden="true" />
            Email me
          </a>
          <Link
            href="/career"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-amber-300/40 px-5 py-3 font-semibold text-amber-100 transition hover:-translate-y-0.5 hover:bg-amber-300/10 focus:outline-none focus:ring-2 focus:ring-amber-100 focus:ring-offset-2 focus:ring-offset-[#080b0f]"
          >
            <Server size={18} aria-hidden="true" />
            View resume
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-3 rounded-md border border-stone-700/70 bg-black/25 p-4 text-sm text-stone-400">
        <Coffee className="shrink-0 text-amber-200" size={18} aria-hidden="true" />
        Warm desk light, clean data contracts, and one more useful abstraction than yesterday.
      </div>
    </motion.section>
  );
}
