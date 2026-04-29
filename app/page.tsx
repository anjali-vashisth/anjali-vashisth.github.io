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
    <div className="min-h-screen bg-gradient-to-br from-primary via-gray-900 to-primary overflow-hidden">
      {/* Animated Background */}
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
        <div className="max-w-5xl mx-auto">
          {/* Header with Profile Picture */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="gradient-text">Anjali Vashisth</span>
                </h1>
                <p className="text-2xl text-secondary font-semibold mb-6">Full Stack Developer | Designer | Community Builder</p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Creative technologist passionate about building impactful solutions. Combining data-driven development with artistic design to create meaningful experiences.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <a href="tel:+919943750590" className="flex items-center gap-3 text-gray-300 hover:text-secondary transition">
                    <Phone size={20} />
                    <span>+91 9943750590</span>
                  </a>
                  <a href="mailto:anjalivashisth1111@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-secondary transition">
                    <Mail size={20} />
                    <span>anjalivashisth1111@gmail.com</span>
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
          <motion.div variants={itemVariants} className="mb-16 p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
            <h2 className="text-3xl font-bold text-light mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              As said by Dalai Lama, &quot;The purpose of our lives is to be Happy&quot;, I believe in finding solutions from Nature, Activeness, Determination and Satisfaction.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Seeking a position in a fit organization where I discover my full potential while working for the company dedicatedly. I&apos;m passionate about technology, design, and making a positive impact in communities through volunteering and mentorship.
            </p>
          </motion.div>

          {/* Work Highlights */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">Work Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Achievements",
                  items: ["AWS Cloud Practitioner", "Scrum Master Certified", "Databricks Certified"],
                },
                {
                  title: "Work Involved",
                  items: ["Automation - Python", "CICD - Azure", "ETL & DAGs - Airflow"],
                },
                {
                  title: "Extras",
                  items: ["Presented in Various Meets", "Organized Events", "Team Leadership"],
                },
                {
                  title: "Awards",
                  items: ["Gem Award", "Agile Champion", "Promoted to Senior Engineer"],
                },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all"
                >
                  <h3 className="text-xl font-bold text-secondary mb-4">{highlight.title}</h3>
                  <ul className="space-y-2">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* College Highlights */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-light">College Highlights</h2>
            <div className="p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20">
              <ul className="space-y-4">
                {[
                  "Vice President and Co-Founder of Vriksh Club (Environmental Initiative)",
                  "Published 2 Papers in IEEE Explorer and Springer",
                  "Award Winner - Women Techies Hackathon 2019",
                  "On-Stage Performances & Event Hosting",
                  "Volunteer & Event Organizer - CommicCon, Red Cross Youth, Creativity Clubs",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
