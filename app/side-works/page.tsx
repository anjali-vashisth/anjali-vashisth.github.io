"use client";

import { motion } from "framer-motion";
import { Music, Heart, Zap, Users, Leaf, Lightbulb } from "lucide-react";

const sideWorks = [
  {
    category: "Creative & Artistic",
    icon: Music,
    items: [
      {
        title: "Dance Performances",
        description: "Active dancer and performer in cultural events and local performances",
        highlights: ["Classical & Contemporary", "Performance artist", "Cultural events"],
      },
      {
        title: "DIY Projects",
        description: "Creative maker creating handmade items, crafts, and innovative projects",
        highlights: ["Craft creation", "Innovation", "Community sharing"],
      },
    ],
  },
  {
    category: "Community & Volunteering",
    icon: Heart,
    items: [
      {
        title: "Environmental Advocacy",
        description: "Active volunteer in lake cleaning and environmental conservation projects",
        highlights: ["Lake cleaning drives", "Environmental awareness", "Community cleanup"],
      },
      {
        title: "Event Hosting & Organization",
        description: "Organize and host community events, workshops, and meetups",
        highlights: ["Event planning", "Community building", "Public speaking"],
      },
    ],
  },
  {
    category: "Social Impact",
    icon: Leaf,
    items: [
      {
        title: "Volunteering for Good Causes",
        description: "Dedicated volunteer contributing to various social causes and NGOs",
        highlights: ["NGO partnerships", "Social impact", "Community service"],
      },
      {
        title: "Mentorship & Teaching",
        description: "Mentor young talents and conduct workshops on tech and creativity",
        highlights: ["Tech mentorship", "Skill development", "Knowledge sharing"],
      },
    ],
  },
];

export default function SideWorks() {
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
              <span className="gradient-text">Side Works</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Passion projects, creative pursuits, and community contributions
            </p>
          </motion.div>

          {/* Side Works Grid */}
          <motion.div
            variants={containerVariants}
            className="space-y-12"
          >
            {sideWorks.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <motion.div key={sectionIndex} variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-8">
                    <Icon className="text-secondary" size={32} />
                    <h2 className="text-3xl font-bold text-light">{section.category}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        variants={itemVariants}
                        className="group p-8 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-accent/40 card-hover"
                      >
                        <h3 className="text-xl font-bold text-light mb-2 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>

                        <div className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-gray-300 text-sm"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Impact Stats */}
          <motion.div variants={itemVariants} className="mt-16 pt-12 border-t border-secondary/20">
            <h2 className="text-3xl font-bold mb-8 text-light">Impact & Contributions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Community Events", value: "20+" },
                { label: "Volunteers Mentored", value: "50+" },
                { label: "Hours Volunteered", value: "200+" },
                { label: "Lives Impacted", value: "500+" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="p-8 rounded-xl bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 text-center">
              <h3 className="text-2xl font-bold text-light mb-3">
                Interested in collaborating?
              </h3>
              <p className="text-gray-400 mb-6">
                I'm always open to new projects, partnerships, and opportunities to make a positive impact!
              </p>
              <a
                href="/#contact"
                className="inline-block bg-gradient-to-r from-secondary to-accent px-8 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform glow"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
