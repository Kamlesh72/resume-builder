import React from "react";

const ExperienceSection = ({ experiences }) => {
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        WORK EXPERIENCE
      </div>
      {experiences.map((experience) => (
        <div className="px-12 mt-3">
          <div className="flex justify-between">
            <span className="font-medium text-base">{experience.name}</span>
            <span className="text-gray-700">
              {experience.from} - {experience.to}{" "}
            </span>
          </div>
          <ul className="pl-10 list-disc">
            {experience.points.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
