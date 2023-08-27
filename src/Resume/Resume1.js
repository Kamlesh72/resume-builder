import AchievementSection from "./components/AchievementSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { FormContext } from "../Hooks/formContext";
import { useContext } from "react";

const Resume1 = () => {
  const { form: data } = useContext(FormContext);
  const { username, email, number, socialLinks } = data;
  return (
    <div
      className="m-10 pt-10 bg-slate-100 text-sm rounded-3xl font-serif tracking-wide col-span-3"
      style={{ aspectRatio: "0.75" }}
    >
      <div className="resume text-center py-3">
        <div className="text-3xl font-bold tracking-wider">{username}</div>
        <div className="font-medium my-3 px-12 text-base underline text-sky-500 flex justify-evenly">
          {socialLinks.map((social) => (
            <a href={social.link}>{social.platform}</a>
          ))}
          <a href="/">{email}</a>
          <a href="/">{number}</a>
        </div>
        <EducationSection education={data.education} />
        <ExperienceSection experiences={data.experiences} />
        <ProjectsSection projects={data.projects} />
        <AchievementSection achievements={data.achievements} />
        <SkillsSection skills={data.skills} />
      </div>
    </div>
  );
};

export default Resume1;
