import { Link, useParams } from "react-router-dom";
import {
  ExternalLink,
  MoveRight,
} from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { projectsData } from "utils/data";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <div className="mt-60 text-center">Project not found</div>;
  }

  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link to="/projects">
              <MoveRight className="mr-2 h-4 w-4 transform rotate-180" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div
            className={cn(
              "p-4 rounded-xl w-16 h-16 flex items-center justify-center",
              project.iconBg
            )}
          >
            {project.icon}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <Badge variant="secondary">{project.category}</Badge>
              <span className="text-sm text-gray-500">{project.date}</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Project Overview */}
            {project.overview && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <ul className="space-y-3">
                  {project.overview.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technical Details */}
            {project.technicalDetails && (
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  Technical Details
                </h2>
                <ul className="space-y-3">
                  {project.technicalDetails.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <section className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Solutions</h3>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Meta Information */}
          <div className="space-y-8">
            {/* Technologies */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Project Links */}
            <section>
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.liveUrl && (
                  <Button asChild className="w-full">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {!project.liveUrl && (
                  <p className="text-gray-500">
                    No links available,because of some policies.
                  </p>
                )}
              </div>
            </section>

            {/* Screenshots Placeholder */}
            {project.screenshots && project.screenshots.length > 0 && (
              <section>
                <h3 className="text-xl font-semibold mb-4">
                  Project Screenshots
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
