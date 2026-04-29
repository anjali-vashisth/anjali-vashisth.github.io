"use client";

import { motion } from "framer-motion";
import { BookOpen, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Modern Portfolio Website",
    description: "A beautifully designed portfolio using Next.js, Tailwind CSS, and Framer Motion",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with user authentication and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["React", "Firebase", "Material-UI"],
    link: "#",
    github: "#",
    featured: false,
  },
  {
    title: "AI Chatbot Integration",
    description: "Intelligent chatbot for customer service and support",
    technologies: ["Python", "NLP", "Flask", "React"],
    link: "#",
    github: "#",
    featured: false,
  },
];

const researchPapers = [
  {
    title: "Machine Learning in Web Development",
    description: "Exploring the integration of ML algorithms in modern web applications",
    conference: "Tech Conference 2023",
    year: 2023,
  },
  {
    title: "User Experience Design Principles",
    description: "A comprehensive study on UX best practices and their impact on user engagement",
    conference: "Design Summit 2023",
    year: 2023,
  },
  {
    title: "Sustainable Tech Solutions",
    description: "Research on building environmentally conscious technology solutions",
    conference: "Green Tech Initiative 2023",
    year: 2023,
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
    <div className="min-h-screen bg-gradient-to-br from-primary via-gray-900 to-primary">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative md:ml-64 min-h-screen px-4 md:px-12 py-20"
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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20 hover:border-accent/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <BookOpen className="text-secondary flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-light mb-1">{paper.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{paper.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>{paper.conference}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
