"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink, TrendingUp } from "lucide-react";

const experience = [
  {
    title: "Technical Lead",
    company: "Infosys – Danske Bank",
    period: "Apr 2025 – Present",
    location: "Bangalore",
    description: "Leading cross-squad collaboration for successful and timely delivery of data engineering solutions.",
    highlights: [
      "Led cross-squad collaboration for successful delivery",
      "Automated Airflow DAG creation, reducing manual effort by 95%",
      "Structured unstructured Hive data into SQL for analytics",
    ],
  },
  {
    title: "Technical Analyst",
    company: "Infosys – Danske Bank",
    period: "Sep 2023 – Apr 2025",
    location: "Bangalore",
    description: "Built and maintained ETL pipelines, migrated 600+ Airflow DAGs, and created GenAI chatbot for data management.",
    highlights: [
      "Built ETL pipelines for DB2, Hive, SQL",
      "Migrated 600+ Airflow DAGs using Azure Pipelines",
      "Created GenAI chatbot for Big Data metadata and visualized pipelines",
    ],
  },
  {
    title: "Software Engineer",
    company: "Danske IT",
    period: "Oct 2022 – Sep 2023",
    location: "Bangalore",
    description: "Automated ingestion and CI/CD workflows, reducing load time by 90% and managing data validation processes.",
    highlights: [
      "Automated ingestion and CI/CD workflows, reducing load time by 90%",
      "Automated Kafka ingestion and managed Hive/SQL control validation",
      "Facilitated Agile processes and documentation using Confluence",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Danske IT",
    period: "Aug 2021 – Oct 2022",
    location: "Bangalore",
    description: "Migrated repositories to Azure DevOps, built CI/CD pipelines, and implemented ML solutions.",
    highlights: [
      "Migrated repos to Azure DevOps; built CI/CD with Azure Pipelines",
      "Automated deployments and built ML pipelines using Pandas, Scikit-learn",
      "Enabled Jenkins CI/CD for DAG publishing from stash repository",
    ],
  },
];

const skills = [
  {
    category: "Programming",
    items: ["Python", "SQL", "PySpark", "Hive", "Shell Scripting"],
  },
  {
    category: "Big Data & Tools",
    items: ["Hadoop", "Kafka", "AWS Databricks", "Airflow", "DataStage"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Git", "Azure Pipelines"],
  },
  {
    category: "Visualization",
    items: ["Tableau", "Jupyter", "Matplotlib"],
  },
  {
    category: "Project Management",
    items: ["Agile", "Jira", "Confluence", "Miro"],
  },
  {
    category: "Certifications",
    items: ["Databricks Data Engineer Associate", "AWS Cloud Practitioner", "Certified Scrum Master", "ML by Andrew Ng"],
  },
];

const certificationsUrl = "https://www.linkedin.com/in/anjalivashisth/details/certifications/";

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
    <div className="min-h-screen bg-gradient-to-br from-primary via-light to-primary">
      {/* Background Elements */}
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Career</span>
            </h1>
            <p className="text-secondary text-lg">
              Professional experience and career growth journey
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-dark">Work Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative p-8 rounded-xl bg-gradient-to-r from-secondary/5 to-accent/5 border border-secondary/20 hover:border-secondary/40 transition-all card-hover"
                >
                  {/* Left Border */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-l-xl"></div>

                  <div className="pl-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-dark mb-1">{job.title}</h3>
                        <p className="text-secondary font-semibold">{job.company}</p>
                      </div>
                      <Briefcase className="text-accent flex-shrink-0" size={24} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-secondary/70 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                    </div>

                    <p className="text-dark/80 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-dark/70">
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
            <h2 className="text-3xl font-bold mb-8 text-dark">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20 hover:border-secondary/40 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-secondary" size={20} />
                    <h3 className="text-lg font-bold text-dark">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) =>
                      skillGroup.category === "Certifications" ? (
                        <a
                          key={i}
                          href={certificationsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                          aria-label={`View ${skill} certification on LinkedIn`}
                        >
                          {skill}
                          <ExternalLink size={12} aria-hidden="true" />
                        </a>
                      ) : (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium hover:bg-secondary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      )
                    )}
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
