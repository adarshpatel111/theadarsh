import {
  ExternalLink,
  Github,
  Code,
  Layers,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

// Pattern components remain the same
const PurpleWaves = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,50 Q25,30 50,50 T100,50 T150,50"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,60 Q25,40 50,60 T100,60 T150,60"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,70 Q25,50 50,70 T100,70 T150,70"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,80 Q25,60 50,80 T100,80 T150,80"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,90 Q25,70 50,90 T100,90 T150,90"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const RedStrokes = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 30 }).map((_, index) => (
        <line
          key={index}
          x1={40 + Math.random() * 40}
          y1={40 + Math.random() * 40}
          x2={45 + Math.random() * 40}
          y2={45 + Math.random() * 40}
          stroke="#ef4444"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  </div>
);

const BlueWaves = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,50 Q25,30 50,50 T100,50 T150,50"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,60 Q25,40 50,60 T100,60 T150,60"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,70 Q25,50 50,70 T100,70 T150,70"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,80 Q25,60 50,80 T100,80 T150,80"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,90 Q25,70 50,90 T100,90 T150,90"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const YellowChevrons = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20,80 L40,60 L60,80"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M15,85 L40,65 L65,85"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M10,90 L40,70 L70,90"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M5,95 L40,75 L75,95"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const GreenDots = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, rowIndex) =>
        Array.from({ length: 10 }).map((_, colIndex) => (
          <circle
            key={`${rowIndex}-${colIndex}`}
            cx={50 + colIndex * 5}
            cy={50 + rowIndex * 5}
            r="1.5"
            fill="#10b981"
          />
        ))
      )}
    </svg>
  </div>
);

const YellowLines = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="50" x2="80" y2="90" stroke="#eab308" strokeWidth="2" />
      <line x1="25" y1="45" x2="85" y2="85" stroke="#eab308" strokeWidth="2" />
      <line x1="30" y1="40" x2="90" y2="80" stroke="#eab308" strokeWidth="2" />
      <line x1="35" y1="35" x2="95" y2="75" stroke="#eab308" strokeWidth="2" />
      <line x1="40" y1="30" x2="100" y2="70" stroke="#eab308" strokeWidth="2" />
    </svg>
  </div>
);

export const projectsData = [
  {
    icon: <Code className="h-6 w-6 text-white" />,
    iconBg: "bg-purple-600",
    date: "Jan 2023",
    category: "Web Development",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/username/ecommerce",
    pattern: <PurpleWaves />,
  },
  {
    icon: <Palette className="h-6 w-6 text-white" />,
    iconBg: "bg-blue-500",
    date: "Mar 2023",
    category: "UI/UX Design",
    title: "Design System",
    description:
      "A comprehensive design system with reusable components, color palettes, and typography guidelines.",
    technologies: ["Figma", "Storybook", "Tailwind CSS"],
    liveUrl: "https://example.com/design-system",
    githubUrl: "https://github.com/username/design-system",
    pattern: <BlueWaves />,
  },
  {
    icon: <Smartphone className="h-6 w-6 text-white" />,
    iconBg: "bg-yellow-500",
    date: "May 2023",
    category: "Mobile App",
    title: "Fitness Tracker",
    description:
      "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com/fitness-app",
    githubUrl: "https://github.com/username/fitness-app",
    pattern: <YellowChevrons />,
  },
  {
    icon: <Server className="h-6 w-6 text-white" />,
    iconBg: "bg-green-500",
    date: "Jul 2023",
    category: "Backend",
    title: "API Gateway",
    description:
      "A scalable API gateway service with authentication, rate limiting, and request routing capabilities.",
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    githubUrl: "https://github.com/username/api-gateway",
    pattern: <GreenDots />,
  },
  {
    icon: <Layers className="h-6 w-6 text-white" />,
    iconBg: "bg-yellow-500",
    date: "Sep 2023",
    category: "Full Stack",
    title: "Project Management Tool",
    description:
      "A collaborative project management application with task tracking, team communication, and analytics.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com/project-tool",
    githubUrl: "https://github.com/username/project-tool",
    pattern: <YellowLines />,
  },
  {
    icon: <Code className="h-6 w-6 text-white" />,
    iconBg: "bg-red-500",
    date: "Nov 2023",
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and professional experience with a modern design.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com/portfolio",
    githubUrl: "https://github.com/username/portfolio",
    pattern: <RedStrokes />,
  },
];
