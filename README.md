# Anjali Vashisth - Portfolio Blog

A modern, artistic portfolio website showcasing achievements, research, projects, career details, and creative side works. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Modern & Artistic Design**
- Beautiful gradient backgrounds and animations
- Smooth transitions and interactive elements
- Responsive design for all devices

📱 **Multiple Pages**
- **Home** - Stunning landing page with highlights
- **Achievements** - College accomplishments and awards
- **Research & Projects** - Technical projects and research papers
- **Career** - Professional experience and skills
- **Side Works** - Creative pursuits, events, volunteering

💬 **Interactive Chat Widget**
- AI-powered chatbot to answer questions about experience, skills, and resume
- Real-time conversation with smooth animations
- Helpful suggestions and guidance

🎨 **Design Components**
- Sidebar navigation with mobile responsiveness
- Gradient text effects and hover animations
- Glassmorphism card designs
- Custom scrollbar styling

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with sidebar and chat
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── achievements/        # Achievements page
│   ├── research/            # Research & Projects page
│   ├── career/              # Career page
│   └── side-works/          # Side Works page
├── components/
│   ├── Sidebar.tsx          # Navigation sidebar
│   └── ChatWidget.tsx       # Interactive chat widget
├── lib/
│   └── chatbot.ts           # Chatbot logic and knowledge base
├── public/                  # Static assets
├── data/                    # Data files
└── package.json
```

## Customization

### Update Resume Data
Edit `/lib/chatbot.ts` to update the resume information and chat responses.

### Modify Colors
Update color scheme in `tailwind.config.ts`:
- Primary: `#1a1a1a`
- Secondary: `#6b5aff` (Purple)
- Accent: `#ff6b9d` (Pink)

### Add Social Links
Update the social links in `components/Sidebar.tsx`:
```tsx
<a href="your-linkedin-url">in</a>
<a href="your-github-url">gh</a>
<a href="your-twitter-url">tw</a>
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Deploy to GitHub Pages

```bash
npm run build
git add .
git commit -m "Deploy"
git push origin main
```

## Features to Customize

### Add Your Resume PDF
Place your resume PDF in the `/public` folder and update the download link in `/app/achievements/page.tsx`

### Customize Chat Responses
Edit the `knowledgeBase` array in `/lib/chatbot.ts` to add personalized responses about your experience and skills.

### Update Achievement Data
Modify the `achievements` array in `/app/achievements/page.tsx` with your actual achievements.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Fast page loads with Next.js optimization
- 📦 Code splitting and lazy loading
- 🎨 GPU-accelerated animations
- 📱 Mobile-first responsive design

## License

This project is open source and available under the MIT License.

## Support

For questions or improvements, feel free to open an issue or contact through the portfolio website.

---

**Built with ❤️ by Anjali Vashisth**
