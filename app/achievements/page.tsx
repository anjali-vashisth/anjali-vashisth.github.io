"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Download, ExternalLink, Zap } from "lucide-react";

const achievements = [
  {
    title: "Gem Award",
    description: "Recognition for outstanding performance and excellence",
    year: "2024",
    icon: Award,
    category: "Work",
  },
  {
    title: "Agile Champion",
    description: "Leadership in agile practices and team coordination",
    year: "2024",
    icon: Zap,
    category: "Work",
  },
  {
    title: "Promoted to Senior Engineer",
    description: "Career advancement for technical excellence",
    year: "2023",
    icon: Trophy,
    category: "Work",
  },
  {
    title: "Insta Award",
    description: "Special recognition for instant impact",
    year: "2023",
    icon: Star,
    category: "Work",
  },
  {
    title: "Women Techies Hackathon Award",
    description: "Recognition for innovation and problem-solving",
    year: "2019",
    icon: Trophy,
    category: "College",
  },
];

const certifications = [
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { title: "Scrum Master Certified", issuer: "Scrum Alliance", year: "2023" },
  { title: "Databricks Certified", issuer: "Databricks", year: "2024" },
];

const certificationsUrl = "https://www.linkedin.com/in/anjalivashisth/details/certifications/";

export default function Achievements() {
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
              <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Awards, recognitions, and accomplishments throughout my career
            </p>
          </motion.div>

          {/* Work Achievements */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Work Achievements</h2>
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {achievements
                .filter((a) => a.category === "Work")
                .map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="group p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 card-hover"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="text-secondary group-hover:text-accent transition-colors" size={32} />
                        <span className="text-sm text-gray-400 bg-secondary/10 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-light mb-2">{achievement.title}</h3>
                      <p className="text-gray-400">{achievement.description}</p>
                    </motion.div>
                  );
                })}
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={certificationsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="block p-6 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`View ${cert.title} certification on LinkedIn`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Award className="text-secondary flex-shrink-0" size={24} />
                      <div>
                        <h3 className="text-lg font-bold text-light">{cert.title}</h3>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 bg-secondary/10 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                      <ExternalLink className="text-accent" size={18} aria-hidden="true" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* College Achievements */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-light">College Achievements</h2>
            <div className="p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">Awards & Recognition</h3>
                  <ul className="space-y-3 text-gray-300">
                    {achievements
                      .filter((a) => a.category === "College")
                      .map((ach, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          {ach.title} ({ach.year})
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">Key Accomplishments</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Vice President - Vriksh Club
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Published 2 Papers (IEEE & Springer)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Active in Multiple Clubs & Events
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div variants={itemVariants}>
            <a
              href="/Anjali_Vashisth_Resume_19Apr2026.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-transform glow"
            >
              <Download size={20} />
              Download My Resume
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
