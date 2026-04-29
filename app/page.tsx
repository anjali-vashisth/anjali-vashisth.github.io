"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
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
        className="relative md:ml-64 min-h-screen flex items-center justify-center px-4 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl w-full">
          {/* Main Hero */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-4">
              <span className="block text-light">Hi, I'm</span>
              <span className="gradient-text block">Anjali Vashisth</span>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              A passionate developer, creative thinker, and community builder combining
              <span className="text-secondary"> technical expertise </span>
              with
              <span className="text-accent"> artistic expression</span>.
            </p>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
              I believe in creating meaningful impact through technology and creativity. From
              building web applications to organizing community events, hosting workshops to
              volunteering for social causes—I'm driven by the desire to make a difference.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-12">
            <Link
              href="/achievements"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary to-accent px-8 py-4 rounded-lg font-semibold text-white hover:scale-105 transition-transform glow"
            >
              Explore My Work
              <ArrowRight size={20} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-secondary px-8 py-4 rounded-lg font-semibold text-secondary hover:bg-secondary/10 transition-colors"
            >
              Get In Touch
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Academic Excellence",
                description: "College achievements and academic excellence",
                href: "/achievements",
              },
              {
                icon: "📚",
                title: "Research & Projects",
                description: "Innovative projects and research work",
                href: "/research",
              },
              {
                icon: "🎨",
                title: "Creative Works",
                description: "Events, performances, and DIY projects",
                href: "/side-works",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 transition-all card-hover"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-light group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </Link>
            ))}
          </motion.div>

          {/* Featured Stats */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-secondary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Projects", value: "15+" },
                { label: "Research Papers", value: "5+" },
                { label: "Skills", value: "20+" },
                { label: "Community Events", value: "10+" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
