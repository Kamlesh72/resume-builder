import React from "react";

const AchievementSection = ({ achievements }) => {
  return (
    <div className="mt-7 text-left">
      <div className="w-full bg-green-300 px-12 py-2 text-xl font-semibold">
        ACHIEVEMENT
      </div>
      <div className="px-12 mt-3">
        <ul className="pl-10 list-disc">
          {achievements[0].points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AchievementSection;
