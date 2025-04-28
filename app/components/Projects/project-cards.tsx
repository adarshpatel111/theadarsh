import { useState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MoveRight,
} from "lucide-react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";
import { Link } from "react-router";
import { projectsData } from "utils/data";

interface ProjectCardProps {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  date: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  pattern: React.ReactNode;
}

const ProjectCard = ({
  id,
  icon,
  iconBg,
  date,
  category,
  title,
  description,
  technologies,
  liveUrl,
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
      <Card className="relative h-full overflow-hidden border-0 shadow-md">
        <div className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-start justify-between">
            <motion.div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md p-2",
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

          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mb-4 line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>

          <div className="mb-4 flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-2">
            <Button size="sm" variant="default" asChild>
              <Link to={`/projects/${id}`} rel="noopener noreferrer">
                <MoveRight className="mr-1 h-4 w-4" />
                More
              </Link>
            </Button>
            {liveUrl && (
              <Button size="sm" variant="default" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Live
                </a>
              </Button>
            )}
          </div>

          <motion.div
            className="absolute bottom-0 right-0 z-0 opacity-60"
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

export default function ProjectCards() {
  const projects = projectsData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
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
