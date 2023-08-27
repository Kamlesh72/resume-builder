import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        PROJECTS
      </div>
      {projects.map((project) => (
        <div className="px-12 mt-3">
          <div className="font-medium text-base">{project.name}</div>
          <ul className="pl-10 list-disc">
            {project.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
