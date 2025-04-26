"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Layers,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

interface ProjectCardProps {
  icon: React.ReactNode;
  iconBg: string;
  date: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  pattern: React.ReactNode;
}

const ProjectCard = ({
  icon,
  iconBg,
  date,
  category,
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  pattern,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="relative overflow-hidden  border-0 shadow-md h-full">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <motion.div
              className={cn(
                "p-2 rounded-md w-10 h-10 flex items-center justify-center",
                iconBg
              )}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {icon}
            </motion.div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {date}
            </span>
          </div>

          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-2">
            {liveUrl && (
              <Button size="sm" variant="default" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
          </div>

          <motion.div
            className="absolute bottom-0 right-0 opacity-60 z-0"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: isHovered ? 0.8 : 0.4 }}
            transition={{ duration: 0.3 }}
          >
            {pattern}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
};

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

export default function ProjectCards() {
  const projects = [
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.div>
  );
}
