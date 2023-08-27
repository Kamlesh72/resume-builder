import React from "react";

const EducationSection = ({ education }) => {
  const { college, school } = education;
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        EDUCATION
      </div>
      <div className="px-12 mt-3">
        <div className="flex justify-between">
          <span className="font-medium text-base">
            {college.name} | {college.branch}
          </span>
          <span className="text-gray-700">
            {college.from} - {college.to}
          </span>
        </div>
        <div className="text-gray-700">CGPA : {college.cgpa}</div>
      </div>
      <div className="px-12 mt-3">
        <div className="flex justify-between">
          <span className="font-medium text-base">{school.name}</span>
          <span className="text-gray-700">
            {school.from} - {school.to}
          </span>
        </div>
        <div className="text-gray-700">HSC: {school.hscPercent}%</div>
      </div>
    </div>
  );
};

export default EducationSection;
