// Resume data - Updated with actual information
const resumeData = {
  personal: {
    name: "Anjali Vashisth",
    email: "jobsforanjalivashisth@gmail.com",
    phone: "+91 9943750590",
    location: "Bangalore, India",
    linkedin: "https://www.linkedin.com/in/anjalivashisth",
    github: "https://github.com/anjali-vashisth",
    instagram: "https://www.instagram.com/anjali__vashisth",
  },
  title: "Data Engineer | Technical Lead | Problem Solver",
  summary: "Data Engineer with 5+ years of experience driving automation and scalable solutions. Technical Lead at Infosys leading cross-functional teams. Passionate about leveraging cloud technologies, data pipelines, and machine learning.",
  
  experience: [
    {
      title: "Technical Lead",
      company: "Infosys",
      project: "Danske Bank",
      duration: "Apr 2025 - Present",
      highlights: [
        "Led cross-squad technical initiatives resulting in 95% automation improvement",
        "Managed Airflow DAG optimization and orchestration",
        "Mentored junior developers and conducted technical reviews",
      ],
    },
    {
      title: "Technical Analyst",
      company: "Infosys",
      project: "Danske Bank",
      duration: "Sep 2023 - Apr 2025",
      highlights: [
        "Designed and built ETL pipelines for data migration",
        "Migrated 600+ Airflow DAGs with zero downtime",
        "Developed GenAI chatbot for internal operations",
        "Reduced manual operational effort by 90%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Danske IT",
      duration: "Oct 2022 - Sep 2023",
      highlights: [
        "Automated data ingestion pipelines using Python and PySpark",
        "Reduced load time by 90% through optimization",
        "Managed Kafka and Hive infrastructure",
        "Implemented CI/CD pipelines using Azure DevOps",
      ],
    },
    {
      title: "Associate Software Engineer",
      company: "Danske IT",
      duration: "Aug 2021 - Oct 2022",
      highlights: [
        "Led Azure DevOps migration project",
        "Built and maintained CI/CD pipelines",
        "Developed ML-based anomaly detection solutions",
      ],
    },
  ],

  skills: {
    programming: ["Python", "SQL", "PySpark", "Hive", "Java"],
    bigData: ["Hadoop", "Kafka", "Databricks", "Airflow", "DataStage"],
    cloudDevOps: ["Azure Pipelines", "Azure DevOps", "AWS", "Docker", "Kubernetes"],
    visualization: ["Tableau", "Power BI", "Matplotlib", "Pandas"],
    databases: ["PostgreSQL", "MySQL", "Hive", "Delta Lake"],
  },

  education: [
    { degree: "M.S. in ML and AI", institution: "Liverpool John Moores University", year: "2024" },
    { degree: "PG Certification in ML and AI", institution: "IIIT Bangalore", gpa: "3.4/4.0", year: "2023" },
    { degree: "B.Tech in CSE", institution: "VIT Vellore", gpa: "8.94/10", year: "2021" },
  ],

  certifications: ["Databricks Certified Professional (2025)", "AWS - Cloud Practitioner", "Certified Scrum Master", "ML by Andrew Ng (Coursera)"],

  awards: ["Insta Award - Big Data Automation", "Gem Award - Task Optimization", "Agile Champion", "Google Dev Hackathon Award"],

  publications: [
    {
      title: "LIMAP: A Lightweight Multilayer Authentication Protocol for WBAN",
      venue: "Springer",
      date: "Aug 27, 2021",
      link: "https://link.springer.com/article/10.1007/s11277-021-08853-x",
    },
    {
      title: "GCN embedded with Polynomial Aggregation Function for Group Activity Recognition",
      venue: "2020 IEEE 4th Conference on Information & Communication Technology (CICT)",
      date: "Dec 5, 2020",
      link: "https://ieeexplore.ieee.org/document/9312103/authors#authors",
    },
  ],

  sideWorks: {
    interests: ["Dancing", "Volunteering for social causes", "DIY projects", "Event hosting", "Environmental conservation"],
    collegeHighlights: [
      "Vice President and Co-Founder of Vriksh Club (Environmental Initiative)",
      "Published 2 Papers in IEEE Explorer and Springer",
      "Award Winner - Women Techies Hackathon 2019",
      "On-Stage Performances & Event Hosting",
      "Volunteer & Organizer - CommicCon, Red Cross Youth, Creativity Clubs",
    ],
  },
};

const knowledgeBase = [
  {
    keywords: ["skills", "expertise", "languages", "programming", "technical"],
    response: `My technical skills include:

**Programming:** Python, SQL, PySpark, Hive, Java
**Big Data:** Hadoop, Kafka, Databricks, Airflow, DataStage
**Cloud & DevOps:** Azure Pipelines, Azure DevOps, AWS, Docker
**Visualization:** Tableau, Power BI, Matplotlib, Pandas
**Databases:** PostgreSQL, MySQL, Hive, Delta Lake

I'm also skilled in leadership, mentorship, and project management. What specific skill would you like to know more about?`,
  },
  {
    keywords: ["experience", "work", "career", "job", "danske", "infosys", "technical lead"],
    response: `I have 5+ years of experience as a Data Engineer:

**Technical Lead** @ Infosys (Danske Bank) - Apr 2025 to Present
• Led cross-squad initiatives with 95% automation improvement
• Managed Airflow DAG optimization

**Technical Analyst** @ Infosys (Danske Bank) - Sep 2023 to Apr 2025
• Built ETL pipelines for data migration
• Migrated 600+ Airflow DAGs
• Developed GenAI chatbot
• 90% reduction in manual effort

**Software Engineer** @ Danske IT - Oct 2022 to Sep 2023
• Automated data ingestion using Python & PySpark
• 90% load time improvement

**Associate Software Engineer** @ Danske IT - Aug 2021 to Oct 2022
• Azure DevOps migration & CI/CD pipelines

**Certifications:** Databricks, AWS Cloud, Scrum Master`,
  },
  {
    keywords: ["education", "degree", "university", "college", "ljmu", "vit", "iiit"],
    response: `**Education:**

✓ **M.S. in ML and AI** - Liverpool John Moores University (2024)
✓ **PG Certification in ML and AI** - IIIT Bangalore (GPA: 3.4/4.0, 2023)
✓ **B.Tech in CSE** - VIT Vellore (GPA: 8.94/10, 2021)

**College Highlights:**
• Vice President and Co-Founder of Vriksh Club (Environmental Initiative)
• Published 2 papers in IEEE and Springer
• Women Techies Hackathon 2019 Award
• On-Stage Performances & Event Hosting
• Volunteer in CommicCon, Red Cross Youth, Creativity Clubs`,
  },
  {
    keywords: ["publications", "research", "papers", "ieee", "springer", "academic"],
    response: `I've published 2 research papers:

✓ **"LIMAP: A Lightweight Multilayer Authentication Protocol for WBAN"** - Springer (Aug 27, 2021)
https://link.springer.com/article/10.1007/s11277-021-08853-x

✓ **"GCN embedded with Polynomial Aggregation Function for Group Activity Recognition"** - 2020 IEEE 4th Conference on Information & Communication Technology (CICT), Dec 5, 2020
https://ieeexplore.ieee.org/document/9312103/authors#authors

I'm passionate about combining academic research with practical applications. Visit the Research section for more details!`,
  },
  {
    keywords: ["award", "achievement", "recognition", "gem", "agile", "insta", "champion"],
    response: `**Work Awards:**
✓ Insta Award - Big Data Automation Excellence
✓ Gem Award - Task Optimization and Efficiency
✓ Agile Champion - Team Excellence
✓ Promoted to Technical Lead

**Academic Award:**
✓ Women Techies Hackathon 2019 Award

**Certifications:**
✓ Databricks Certified Professional (2025)
✓ AWS - Cloud Practitioner
✓ Certified Scrum Master
✓ ML Specialization (Andrew Ng - Coursera)`,
  },
  {
    keywords: ["side work", "hobby", "interests", "dancing", "volunteer", "creative"],
    response: `Beyond my professional work, I'm passionate about:

**Creative & Artistic:**
• Dancing and performance arts
• Event hosting and community building
• DIY projects and creative endeavors

**Community & Volunteering:**
• Vice President - Vriksh Club (Environmental Initiative)
• Red Cross Youth volunteer
• CommicCon organizer
• Mentorship and knowledge sharing

Visit the Side Works section to learn more about my creative pursuits!`,
  },
  {
    keywords: ["contact", "email", "phone", "reach out", "communicate", "linkedin", "github"],
    response: `Feel free to reach out to me:

📧 **Email:** jobsforanjalivashisth@gmail.com
📱 **Phone:** +91 9943750590
🔗 **LinkedIn:** www.linkedin.com/in/anjalivashisth
💻 **GitHub:** github.com/anjali-vashisth
📸 **Instagram:** instagram.com/anjali__vashisth
📍 **Location:** Bangalore, India

I'd love to connect with you!`,
  },
  {
    keywords: ["hello", "hi", "hey", "greetings", "start"],
    response: `Hello! Welcome to my portfolio! I'm Anjali Vashisth - a Data Engineer and Technical Lead with 5+ years of experience in building scalable data solutions. I'm excited to share my work with you. Feel free to explore or ask me anything about my experience, skills, research, awards, or creative pursuits!`,
  },
  {
    keywords: ["project", "projects", "work", "portfolio"],
    response: `I've worked on various projects including:

**Key Projects:**
• ETL Pipeline Modernization - Python, PySpark, Airflow
• GenAI Chatbot Development - LLMs, NLP, Azure
• Airflow DAG Migration - 600+ DAGs migrated
• Data Warehouse Solutions - Databricks, SQL
• CI/CD Infrastructure - Azure DevOps, Kubernetes

Check the Research & Projects section for detailed information!`,
  },
  {
    keywords: ["resume", "cv", "download", "pdf"],
    response: `My resume contains detailed information about my education, work experience, skills, projects, certifications, and awards including Databricks, AWS, and Scrum Master credentials. You can explore my portfolio sections for comprehensive details about my background.`,
  },
  {
    keywords: ["location", "based", "bangalore", "where"],
    response: `I'm currently based in **Bangalore, India**. I'm open to opportunities worldwide and interested in both remote and on-site positions. Feel free to reach out!`,
  },
];

export async function generateResponse(userMessage: string): Promise<string> {
  const lowerMessage = userMessage.toLowerCase();

  // Search through knowledge base
  for (const item of knowledgeBase) {
    if (item.keywords.some((keyword) => lowerMessage.includes(keyword))) {
      return item.response;
    }
  }

  // Default response
  return `That's a great question! I might not have specific information about that in my database, but feel free to check out the different sections of my portfolio:
  
• **Achievements** - College accomplishments, awards, and recognitions
• **Research & Projects** - My academic papers and professional work
• **Career** - Work experience at Danske IT and skill development
• **Side Works** - My creative pursuits, volunteering, and event organization

Or you can contact me directly at:
📧 Email: anjalivashisth1111@gmail.com
📱 Phone: +91 9943750590
🔗 LinkedIn: www.linkedin.com/in/anjalivashisth`;
}
