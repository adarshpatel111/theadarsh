import React from "react";
import ProjectCards from "~/components/Projects/project-cards";

const Projects: React.FC = () => {
  return (
    <div className="container w-full mx-auto mt-35">
      <header className="w-full px-4 sm:px-6 lg:px-8 mb-16 flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-primary mb-4">
          My Projects
        </h1>
      </header>
      <ProjectCards />
    </div>
  );
};

export default Projects;
