import AchievementSection from "./components/AchievementSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { FormContext } from "../Hooks/formContext";
import { useContext } from "react";

const Resume1page2 = ({ formElements }) => {
  const { form: data } = useContext(FormContext);
  const { header, socialLinks } = data;
  return (
    <div
      className="m-10 pt-10 bg-white text-sm rounded-3xl font-serif tracking-wide shadow-lg shadow-black"
      style={{ height: "1370px", width: "900px" }}
    >
      <div className="resume text-center py-3">
        {!formElements[0] && <EducationSection education={data.education} />}
        {!formElements[1] && (
          <ExperienceSection experiences={data.experiences} />
        )}
        {!formElements[2] && <ProjectsSection projects={data.projects} />}
        {!formElements[3] && (
          <AchievementSection achievements={data.achievements} />
        )}
        {!formElements[4] && <SkillsSection skills={data.skills} />}
      </div>
    </div>
  );
};

export default Resume1page2;
