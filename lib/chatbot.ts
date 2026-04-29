// Resume data
const resumeData = {
  name: "Anjali Vashisth",
  title: "Full Stack Developer | Designer | Community Builder",
  email: "anjalivashisth1111@gmail.com",
  phone: "+91 9943750590",
  location: "Bangalore, India",
  skills: [
    "Web Development",
    "UI/UX Design",
    "Python Automation",
    "Azure CICD",
    "ETL & Airflow",
    "Data Engineering",
    "Project Management",
  ],
  experience: [
    "Data Engineer at Danske IT (Infosys)",
    "AWS Cloud Practitioner Certified",
    "Scrum Master Certified",
    "Databricks Certified",
    "Event Coordination & Hosting",
    "Research & Publications",
  ],
  interests: [
    "Dancing",
    "Volunteering for social causes",
    "DIY projects",
    "Event hosting",
    "Environmental conservation",
  ],
  workHighlights: {
    company: "Danske IT (Infosys)",
    awards: ["Gem Award", "Agile Champion", "Promoted to Senior Engineer", "Insta Award"],
    certifications: ["AWS Cloud Practitioner", "Scrum Master", "Databricks"],
    workInvolved: ["Python Automation", "Azure CICD", "Airflow & DAGs", "ETL Pipelines"],
    extras: ["Presented in Various Meets", "Organized Fun-Time Events", "Team Leadership"],
  },
  collegeHighlights: [
    "Vice President and Co-Founder of Vriksh Club (Environmental Initiative)",
    "Published 2 Papers in IEEE Explorer and Springer",
    "Award Winner - Women Techies Hackathon 2019",
    "On-Stage Performances & Event Hosting",
    "Volunteer & Organizer - CommicCon, Red Cross Youth, Creativity Clubs",
  ],
};

const knowledgeBase = [
  {
    keywords: ["skills", "expertise", "languages", "programming"],
    response: `My technical skills include:
• Web Development (Frontend & Backend)
• Python Automation
• Azure CICD Pipelines
• ETL & Airflow
• AWS Cloud (Certified Practitioner)
• UI/UX Design
• Data Engineering
• Project Management

I'm also skilled in soft skills like leadership, event coordination, and community engagement. What specific skill would you like to know more about?`,
  },
  {
    keywords: ["experience", "work", "career", "job", "danske", "infosys"],
    response: `I work as a Data Engineer at Danske IT (Infosys) with extensive experience in:
• Automation using Python
• CI/CD with Azure
• ETL Pipelines using Airflow
• Data Engineering solutions

Achievements:
✓ Gem Award recipient
✓ Agile Champion
✓ Promoted to Senior Engineer
✓ Insta Award recipient

Certifications:
✓ AWS Cloud Practitioner
✓ Scrum Master
✓ Databricks Certified

Beyond technical work, I've presented in various meets and organized team events!`,
  },
  {
    keywords: ["project", "projects", "work", "portfolio"],
    response: `I've worked on various projects including:
• Web applications and portfolios
• Data engineering pipelines
• Research papers and studies
• Event organization and management
• Community service initiatives
• DIY and creative projects

Check out the Research & Projects section for detailed information about my work!`,
  },
  {
    keywords: ["side work", "hobby", "interests", "dancing", "volunteering", "college"],
    response: `Beyond my professional work, I'm passionate about:
• Dancing and performance arts
• Volunteering for environmental causes (Vriksh Club - Environmental Initiative)
• Event hosting and community building
• DIY projects and creative endeavors
• Mentorship and knowledge sharing

College highlights:
✓ Vice President and Co-Founder of Vriksh Club
✓ Published 2 papers in IEEE and Springer
✓ Women Techies Hackathon 2019 Award
✓ Active in CommicCon, Red Cross Youth, Creativity Clubs

Visit the Side Works section to learn more!`,
  },
  {
    keywords: ["location", "based", "where", "live", "bangalore"],
    response: `I'm currently based in Bangalore, India. I'm open to opportunities worldwide and interested in both remote and on-site positions. Feel free to reach out with opportunities!`,
  },
  {
    keywords: ["resume", "cv", "download", "pdf"],
    response: `You can download my resume from the achievements section or check it in my social profiles. It contains detailed information about my education, work experience, skills, projects, and certifications including AWS, Scrum Master, and Databricks.`,
  },
  {
    keywords: ["college", "education", "degree", "university"],
    response: `My college achievements include:
✓ Vice President and Co-Founder of Vriksh Club
✓ Published 2 Papers in IEEE Explorer and Springer
✓ Award Winner - Women Techies Hackathon 2019
✓ On-Stage Performances & Event Hosting
✓ Active Volunteer in CommicCon, Red Cross Youth, Creativity Clubs

Check the Achievements section for more details!`,
  },
  {
    keywords: ["research", "papers", "publication", "academic", "ieee", "springer"],
    response: `I've published 2 research papers:
• Published in IEEE Explorer
• Published in Springer

I'm passionate about academic research combined with practical applications. Visit the Research & Projects page to explore my research work and project details!`,
  },
  {
    keywords: ["contact", "email", "phone", "reach out", "communicate"],
    response: `Feel free to reach out to me through:
• Email: anjalivashisth1111@gmail.com
• Phone: +91 9943750590
• LinkedIn: linkedin.com/in/anjalivash19231
• Instagram: instagram.com/anjali__vashisth
• Location: Bangalore, India

I'd love to connect with you!`,
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: `Hello! Welcome to my portfolio. I'm Anjali Vashisth - a Full Stack Developer, Designer, and Community Builder. I'm excited to share my work with you. Feel free to explore different sections or ask me anything about my experience, skills, work at Danske IT, college achievements, or projects!`,
  },
  {
    keywords: ["award", "achievement", "recognition", "gem", "agile", "champion"],
    response: `My key achievements include:

Work Awards:
✓ Gem Award - Recognition for excellence
✓ Agile Champion - Leadership in agile practices
✓ Promoted to Senior Engineer
✓ Insta Award - Special recognition

College Achievements:
✓ Women Techies Hackathon 2019 Award
✓ Vice President - Vriksh Club
✓ Published 2 Research Papers (IEEE & Springer)

Academic:
✓ Graduated with Honors
✓ Dean's List
✓ Academic Excellence Recognition`,
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
🔗 LinkedIn: linkedin.com/in/anjalivash19231`;
}
