// Resume data
const resumeData = {
  name: "Anjali Vashisth",
  title: "Professional in Tech & Creative Fields",
  email: "anjali@example.com",
  phone: "+1-XXX-XXX-XXXX",
  location: "India",
  skills: [
    "Web Development",
    "UI/UX Design",
    "Project Management",
    "Event Coordination",
    "Research",
  ],
  experience: [
    "Multiple years of experience in tech",
    "Event hosting and coordination",
    "Research projects",
    "Volunteer work",
  ],
  interests: [
    "Dancing",
    "Volunteering for social causes",
    "DIY projects",
    "Event hosting",
    "Environmental conservation",
  ],
};

const knowledgeBase = [
  {
    keywords: ["skills", "expertise", "languages", "programming"],
    response: `I have diverse skills including:
• Web Development (Frontend & Backend)
• UI/UX Design
• Project Management
• Research & Analysis
• Event Coordination
• Creative Direction

Feel free to ask about any specific skill!`,
  },
  {
    keywords: ["experience", "work", "career", "job"],
    response: `I have comprehensive experience in:
• Multiple tech projects
• Event hosting and coordination
• Research initiatives
• Volunteer work for social causes
• Creative and design work

Would you like to know about a specific project or role?`,
  },
  {
    keywords: ["project", "projects", "work", "portfolio"],
    response: `I've worked on various projects including:
• Web applications and portfolios
• Research papers and studies
• Event organization and management
• Community service initiatives
• DIY and creative projects

Check out the Research & Projects section for detailed information!`,
  },
  {
    keywords: ["side work", "hobby", "interests", "dancing", "volunteering"],
    response: `Beyond my professional work, I'm passionate about:
• Dancing and performance arts
• Volunteering for environmental causes (like lake cleaning)
• DIY projects and creative endeavors
• Event hosting and community building

Visit the Side Works section to learn more about these interests!`,
  },
  {
    keywords: ["location", "based", "where", "live"],
    response: `I'm currently based in India and open to opportunities worldwide. I'm flexible with location preferences and interested in remote work as well!`,
  },
  {
    keywords: ["resume", "cv", "download", "pdf"],
    response: `You can download my resume from the achievements section. It contains detailed information about my education, experience, skills, and projects.`,
  },
  {
    keywords: ["college", "education", "degree", "university"],
    response: `I have completed my education with focus on practical skills and academic excellence. Check the Achievements section for my college credentials and academic accomplishments!`,
  },
  {
    keywords: ["research", "papers", "publication", "academic"],
    response: `I've worked on several research projects and have publications in my field. Visit the Research & Projects page to explore my research work in detail!`,
  },
  {
    keywords: ["contact", "email", "phone", "reach out"],
    response: `Feel free to reach out to me through:
• Email: anjali@example.com
• Phone: Available upon request
• LinkedIn: Check the sidebar for my LinkedIn profile
• GitHub: Available in the social links

I'd love to connect with you!`,
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: `Hello! Welcome to my portfolio. I'm Anjali Vashisth, and I'm excited to share my work with you. Feel free to explore different sections or ask me anything about my experience, skills, or projects!`,
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
  
• **Achievements** - College accomplishments and awards
• **Research & Projects** - My academic and professional work
• **Career** - Professional experience and growth
• **Side Works** - My creative pursuits and volunteer work

Or you can contact me directly through the social links in the sidebar!`;
}
