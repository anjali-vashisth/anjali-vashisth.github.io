"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <div className="min-h-screen bg-gradient-to-br from-primary via-light to-primary overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative md:ml-64 min-h-screen px-4 md:px-12 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header with Profile Picture */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="gradient-text">Anjali Vashisth</span>
                </h1>
                <p className="text-2xl text-secondary font-semibold mb-6">Data Engineer | Technical Lead | Problem Solver</p>
                <p className="text-dark/80 text-lg leading-relaxed mb-6">
                  Experienced data engineer with 5 years building robust ETL pipelines, automation solutions, and scalable big data systems. Passionate about optimizing workflows and driving technical excellence.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <a href="tel:+919943750590" className="flex items-center gap-3 text-dark/70 hover:text-secondary transition">
                    <Phone size={20} />
                    <span>+91 9943750590</span>
                  </a>
                  <a href="mailto:jobsforanjalivashisth@gmail.com" className="flex items-center gap-3 text-dark/70 hover:text-secondary transition">
                    <Mail size={20} />
                    <span>jobsforanjalivashisth@gmail.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mb-8">
                  <a href="https://linkedin.com/in/anjalivash19231" target="_blank" className="p-3 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/40 transition">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com/anjali__vashisth" target="_blank" className="p-3 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/40 transition">
                    <Instagram size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" className="p-3 rounded-lg bg-secondary/20 text-secondary hover:bg-secondary/40 transition">
                    <Twitter size={20} />
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/career"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-secondary to-accent px-8 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform glow"
                  >
                    View Resume
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/research"
                    className="inline-flex items-center justify-center gap-2 border border-secondary px-8 py-3 rounded-lg font-semibold text-secondary hover:bg-secondary/10 transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Profile Picture Placeholder */}
              <motion.div
                variants={itemVariants}
                className="w-56 h-56 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30 border-2 border-secondary/40 flex items-center justify-center flex-shrink-0 glow"
              >
                <div className="text-6xl">👨‍💼</div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants} className="mb-16 p-8 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20">
            <h2 className="text-3xl font-bold text-dark mb-4">About Me</h2>
            <p className="text-dark/80 leading-relaxed mb-4">
              As said by Dalai Lama, &quot;The purpose of our lives is to be Happy&quot;, I believe in finding solutions from Nature, Activeness, Determination and Satisfaction.
            </p>
            <p className="text-dark/80 leading-relaxed">
              With 5 years of experience in data engineering, I&apos;ve led technical initiatives at Infosys and Danske Bank, driving 95% automation improvements and building scalable solutions. Beyond work, I&apos;m passionate about mentorship, continuous learning, and making positive community impact.
            </p>
          </motion.div>

          {/* Work Highlights */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-dark">Work Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Achievements",
                  items: ["Insta Award - Big Data Automation", "Gem Award - Task Optimization", "Promoted to Technical Lead", "95% Automation Improvement"],
                },
                {
                  title: "Technical Stack",
                  items: ["Python, SQL, PySpark, Hive", "Airflow, Kafka, Databricks", "Azure Pipelines, AWS", "Tableau, DataStage"],
                },
                {
                  title: "Key Projects",
                  items: ["ETL Pipeline Development", "Airflow DAG Migration (600+)", "GenAI Chatbot Creation", "CI/CD Infrastructure"],
                },
                {
                  title: "Impact",
                  items: ["Reduced Manual Effort by 95%", "90% Load Time Improvement", "Led Cross-Functional Teams", "Mentored Junior Developers"],
                },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 hover:border-secondary/40 transition-all"
                >
                  <h3 className="text-xl font-bold text-secondary mb-4">{highlight.title}</h3>
                  <ul className="space-y-2">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-dark/80">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Highlights */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-dark">Education & Certifications</h2>
            <div className="p-8 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">Education</h3>
                  <ul className="space-y-3 text-dark/80">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>M.S. in ML and AI</strong> - Liverpool John Moores University (2023-2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>PG Certification in ML and AI</strong> - IIIT Bangalore (GPA: 3.4/4.0)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></span>
                      <span><strong>B.Tech (CSE)</strong> - VIT Vellore (GPA: 8.94/10)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-4">Certifications</h3>
                  <ul className="space-y-3 text-dark/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Databricks – Data Engineer Associate
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      AWS – Cloud Practitioner
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      Certified Scrum Master
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      ML by Andrew Ng (Coursera)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links to Sections */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📚", title: "Research & Projects", href: "/research" },
              { icon: "💼", title: "Career Details", href: "/career" },
              { icon: "🎨", title: "Creative Works", href: "/side-works" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all card-hover text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-light group-hover:text-accent transition-colors">{item.title}</h3>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
