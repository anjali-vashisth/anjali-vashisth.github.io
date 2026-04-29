"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, Download } from "lucide-react";

const achievements = [
  {
    title: "Academic Excellence Award",
    description: "Recognition for outstanding academic performance",
    year: "2023",
    icon: Award,
  },
  {
    title: "Leadership Award",
    description: "Recognized for leadership in college activities",
    year: "2023",
    icon: Trophy,
  },
  {
    title: "Dean's List",
    description: "Consistent academic excellence across semesters",
    year: "2022-2023",
    icon: Star,
  },
  {
    title: "Innovation Award",
    description: "For innovative projects and creative thinking",
    year: "2023",
    icon: Trophy,
  },
];

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
              <span className="gradient-text">Achievements</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Recognitions and accomplishments throughout my academic and professional journey
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {achievements.map((achievement, index) => {
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

          {/* College Info Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-light">College Achievements</h2>
            <div className="p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Education</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Bachelor's Degree - Computer Science
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      GPA: 3.8/4.0
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Graduated with Honors
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">Key Accomplishments</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Class Valedictorian
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Scholarship Recipient
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Active in Multiple Clubs
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
