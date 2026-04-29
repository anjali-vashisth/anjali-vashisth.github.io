"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, TrendingUp } from "lucide-react";

const experience = [
  {
    title: "Senior Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    location: "Remote",
    description: "Leading front-end development projects, mentoring junior developers, and implementing modern web solutions.",
    highlights: [
      "Architected scalable web applications",
      "Improved performance by 40%",
      "Led team of 5 developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Creative Studios",
    period: "2021 - 2023",
    location: "India",
    description: "Developed and maintained full-stack applications, collaborated with design teams, and implemented UX improvements.",
    highlights: [
      "Built 10+ web applications",
      "Implemented responsive designs",
      "Enhanced user engagement by 60%",
    ],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2020 - 2021",
    location: "India",
    description: "Contributed to various projects, learned cutting-edge technologies, and collaborated with experienced developers.",
    highlights: [
      "Completed 15+ features",
      "Resolved critical bugs",
      "Improved code quality",
    ],
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"] },
  { category: "Tools & Platforms", items: ["Git", "Docker", "AWS", "Firebase", "Vercel"] },
  { category: "Soft Skills", items: ["Project Management", "Team Leadership", "Communication", "Problem Solving"] },
];

export default function Career() {
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
              <span className="gradient-text">Career</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Professional experience and career growth journey
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all card-hover"
                >
                  {/* Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-l-xl"></div>

                  <div className="pl-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-light mb-1">{job.title}</h3>
                        <p className="text-secondary font-semibold">{job.company}</p>
                      </div>
                      <Briefcase className="text-accent flex-shrink-0" size={24} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-light">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-secondary" size={20} />
                    <h3 className="text-lg font-bold text-light">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium hover:bg-secondary/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
