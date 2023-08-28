import { FormContext } from "../Hooks/formContext";
import { useContext } from "react";
import HeaderForm from "./components/HeaderForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectForm from "./components/ProjectForm";
import AchievementForm from "./components/AchievementForm";
import SkillsForm from "./components/SkillsForm";
// import DemoForm from "./components/DemoForm";
import ACTIONS from "../Constants/ACTIONS";
import formTemplate from "../formTemplate.json";

const MyForm = ({ whichSection, setSection }) => {
  const { form, setForm } = useContext(FormContext);

  const handleHeader = (e) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        header: { ...prevForm.header, [e.target.name]: e.target.value },
      };
    });
  };
  const handleSocialLinks = (e, OPTION, linkIndex) => {
    setForm((prevForm) => {
      const link = e.target.value;
      const updatedSocialLinks = [...prevForm.socialLinks];
      updatedSocialLinks[linkIndex].link = link;
      return { ...prevForm, socialLinks: updatedSocialLinks };
    });
  };
  const handleSection = (e, OPTION, section, sectionIndex) => {
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      if (OPTION === ACTIONS.ADD) updatedSection.push(formTemplate[section][0]);
      else if (OPTION === ACTIONS.DELETE)
        updatedSection.splice(sectionIndex, 1);
      return { ...prevForm, [section]: updatedSection };
    });
  };
  const handleSectionPoints = (e, OPTION, section, sectionIndex = 0) => {
    const pointIndex = e.target?.id;
    setForm((prevForm) => {
      const updatedPoints = [...prevForm[section][sectionIndex].points];
      if (OPTION === ACTIONS.ADD) updatedPoints.push("");
      else if (OPTION === ACTIONS.DELETE) updatedPoints.splice(pointIndex, 1);
      else if (OPTION === ACTIONS.UPDATE) {
        updatedPoints[pointIndex] = e.target.value;
      }
      const updatedSection = [...prevForm[section]];
      updatedSection[sectionIndex].points = updatedPoints;
      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };
  const handleEducation = (e, eduIndex) => {
    setForm((prevForm) => {
      const field = e.target.name;
      const updatedEducation = [...prevForm.education];
      updatedEducation[eduIndex] = {
        ...updatedEducation[eduIndex],
        [field]: e.target.value,
      };
      return {
        ...prevForm,
        education: updatedEducation,
      };
    });
  };
  const handleSectionData = (e, section, sectionIndex) => {
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      const field = e.target.name;
      updatedSection[sectionIndex][field] = e.target.value;
      return { ...prevForm, [section]: updatedSection };
    });
  };
  const handleAchievements = (e) => {
    const achivementIndex = e.target.id;
    setForm((prevForm) => {
      const updatedAchievements = [...prevForm.achievements];
      updatedAchievements[achivementIndex] = e.target.value;
      return { ...prevForm, achievements: updatedAchievements };
    });
  };

  const displaySection = () => {
    if (whichSection === 0) {
      return (
        <HeaderForm
          handleHeader={handleHeader}
          handleSocialLinks={handleSocialLinks}
          form={form}
        />
      );
    } else if (whichSection === 1) {
      return (
        <EducationForm
          handleSection={handleSection}
          handleEducation={handleEducation}
          form={form}
        />
      );
    } else if (whichSection === 2) {
      return (
        <ExperienceForm
          handleSection={handleSection}
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          form={form}
        />
      );
    } else if (whichSection === 3) {
      return (
        <ProjectForm
          handleSection={handleSection}
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          form={form}
        />
      );
    } else if (whichSection === 4) {
      return (
        <AchievementForm
          handleSectionPoints={handleSectionPoints}
          handleAchievements={handleAchievements}
          form={form}
        />
      );
    } else {
      return (
        <SkillsForm
          handleSection={handleSection}
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          form={form}
        />
      );
    }
  };

  return (
    <div className="w-full mx-auto p-8 md:px-12 lg:px-20 my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl bg-white">
      {displaySection()}
      <div className="mt-10 w-1/2 lg:w-1/4 ml-auto">
        <button
          className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
          onClick={() => setSection((prevSection) => (prevSection + 1) % 6)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default MyForm;
