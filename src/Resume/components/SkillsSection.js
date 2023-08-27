import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        SKILLS
      </div>
      <div className="flex flex-row px-12 mt-3">
        <div className="font-medium">
          {skills.map((skill) => (
            <div>{skill.name} :</div>
          ))}
        </div>
        <div className="font-normal pl-5">
          {skills.map((skill) => (
            <div>
              {skill.points.map((point) => (
                <span>{point + " "}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
