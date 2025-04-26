import React from "react";
import { projectsData } from "utils/data";
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
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";

const ProjectSection = () => {
  // Get only the first 3 projects
  const featuredProjects = projectsData.slice(0, 3);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Check out more in my projects
            section.
          </p>
          <div className="mt-6 w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="relative overflow-hidden border-0 shadow-md h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <motion.div
                      className={cn(
                        "p-2 rounded-md w-10 h-10 flex items-center justify-center",
                        project.iconBg
                      )}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {project.icon}
                    </motion.div>
                    <span className="text-xs">{project.date}</span>
                  </div>

                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-2">
                    {project.liveUrl && (
                      <Button size="sm" variant="default" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>

                  <motion.div
                    className="absolute bottom-0 right-0 opacity-60 z-0"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredProject === index ? 0.8 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.pattern}
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center pt-4">
          <motion.button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={"/projects"}
              className="flex justify-center items-center gap-2"
            >
              <ExternalLink className="h-5 w-5 mr-1" /> View All Projects
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
