"use client";

import { motion } from "framer-motion";
import { BookOpen, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Modern Portfolio Website",
    description: "This portfolio, redesigned as a data-engineer storytelling experience with lightweight animation.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Airflow DAG Migration Factory",
    description: "Reusable migration workflow for moving 600+ Airflow DAGs through Azure Pipelines with safer validation.",
    technologies: ["Airflow", "Python", "Azure Pipelines", "Git"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Metadata-Aware Data Chatbot",
    description: "GenAI assistant for Big Data metadata discovery, pipeline context, and operational lookup.",
    technologies: ["Python", "LLM", "Hive", "SQL"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Kafka Ingestion Automation",
    description: "Automation around Kafka ingestion, Hive controls, SQL validation, and operational handoffs.",
    technologies: ["Kafka", "Hive", "SQL", "Python"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const researchPapers = [
  {
    title: "LIMAP: A Lightweight Multilayer Authentication Protocol for WBAN",
    description:
      "A lightweight WBAN authentication protocol using an elliptic curve approach with foci calculation and hash-function integration for low computing cost, strong security, and efficient validation.",
    conference: "Springer",
    date: "Aug 27, 2021",
    link: "https://link.springer.com/article/10.1007/s11277-021-08853-x",
  },
  {
    title: "GCN embedded with Polynomial Aggregation Function for Group Activity Recognition",
    description:
      "Research presented at IEEE CICT on graph convolutional networks with polynomial aggregation for recognizing group activity patterns.",
    conference: "2020 IEEE 4th Conference on Information & Communication Technology (CICT)",
    date: "Dec 5, 2020",
    link: "https://ieeexplore.ieee.org/document/9312103/authors#authors",
  },
];

export default function Research() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#080b0f] text-stone-100">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_86%_22%,rgba(245,158,11,0.12),transparent_30%),linear-gradient(135deg,#07090d_0%,#10151d_52%,#120f0a_100%)]"></div>
        <div className="data-grid absolute inset-0 opacity-30"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative min-h-screen px-5 py-20 sm:px-8 lg:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Research & Projects</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Innovative projects and research work demonstrating technical expertise
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Featured Projects</h2>
            <div className="grid gap-6">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 card-hover"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-light group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                        >
                          <ExternalLink size={20} className="text-secondary" />
                        </a>
                        <a
                          href={project.github}
                          className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors"
                        >
                          <Github size={20} className="text-secondary" />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Other Projects</h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 card-hover"
                  >
                    <h3 className="text-lg font-bold text-light mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>

          {/* Research Papers */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-light">Research Papers</h2>
            <div className="space-y-4">
              {researchPapers.map((paper, index) => (
                <motion.a
                  key={index}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block p-6 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20 hover:border-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`Open research paper: ${paper.title}`}
                >
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-bold text-light mb-1">{paper.title}</h3>
                        <ExternalLink className="text-accent flex-shrink-0" size={18} aria-hidden="true" />
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{paper.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{paper.conference}</span>
                        <span>•</span>
                        <span>{paper.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
