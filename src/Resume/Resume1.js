import AchievementSection from "./components/AchievementSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { FormContext } from "../Hooks/formContext";
import { useContext, useEffect } from "react";

const Resume1 = ({ formElements, setFormElements }) => {
  const { form: data } = useContext(FormContext);
  const { header, socialLinks } = data;

  useEffect(() => {
    console.log("use effect");
    const h = document.getElementById("resume-container").clientHeight;
    console.log(h);
    if (h > 1370) {
      setFormElements((prevEl) => {
        const updatedEl = [...prevEl];
        for (let i = 4; i > 0; i--) {
          if (updatedEl[i]) {
            updatedEl[i] = false;
            break;
          }
        }
        return updatedEl;
      });
    }
  });

  return (
    <div
      className=" mt-10 pt-10 bg-white text-sm rounded-3xl font-serif tracking-wide shadow-lg shadow-black"
      style={{ height: "1370px", width: "900px" }}
    >
      <div className="resume text-center py-3" id="resume-container">
        <div className="text-3xl font-bold tracking-wider">
          {header.firstName + header.lastName}
        </div>
        <div className="font-medium my-3 px-12 text-base underline text-sky-500 flex justify-evenly">
          {socialLinks.map((social) => (
            <a href={social.link}>{social.platform}</a>
          ))}
          <a href="/">{header.email}</a>
          <a href="/">{header.phone}</a>
        </div>
        {formElements[0] && <EducationSection education={data.education} />}
        {formElements[1] && (
          <ExperienceSection experiences={data.experiences} />
        )}
        {formElements[2] && <ProjectsSection projects={data.projects} />}
        {formElements[3] && (
          <AchievementSection achievements={data.achievements} />
        )}
        {formElements[4] && <SkillsSection skills={data.skills} />}
      </div>
    </div>
  );
};

export default Resume1;
