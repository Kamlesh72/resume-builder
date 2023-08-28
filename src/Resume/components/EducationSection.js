import React from "react";

const EducationSection = ({ education }) => {
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        EDUCATION
      </div>
      {education.map((ed) => (
        <div className="px-12 mt-3">
        <div className="flex justify-between">
          <span className="font-medium text-base">
            {ed.name} | {ed.branch}
          </span>
          <span className="text-gray-700">
            {ed.startDate} - {ed.endDate}
          </span>
        </div>
        <div className="text-gray-700">{ed.result}</div>
      </div>
      ))}
     
    </div>
  );
};

export default EducationSection;
