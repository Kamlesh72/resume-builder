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
import { toast } from "react-hot-toast";
import SECTIONS from "../Constants/SECTIONS";

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
  const handleSocialLinks = (e, linkIndex) => {
    setForm((prevForm) => {
      const link = e.target.value;
      const updatedSocialLinks = [...prevForm.socialLinks];
      updatedSocialLinks[linkIndex].link = link;
      return { ...prevForm, socialLinks: updatedSocialLinks };
    });
  };
  const handleSection = (e, OPTION, section, sectionIndex) => {
    if (OPTION === ACTIONS.ADD && form[section].length === 2) {
      toast.error("Cannot Add more than 2 Sections");
      return;
    }
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
      if (OPTION === ACTIONS.ADD) {
        if (section === SECTIONS.ACHIEVEMENTS) {
          if (updatedPoints.length === 8) {
            toast.error("Cannot Add more than 8 Points");
            return { ...prevForm };
          }
        } else if (updatedPoints.length === 4) {
          toast.error("Cannot Add more than 4 Points");
          return { ...prevForm };
        }
        updatedPoints.push("");
      } else if (OPTION === ACTIONS.DELETE) updatedPoints.splice(pointIndex, 1);
      else if (OPTION === ACTIONS.UPDATE) {
        const value = e.target.value;
        if (value.length >= 150) {
          toast.error("Word limit exceeded");
          return { ...prevForm };
        }
        updatedPoints[pointIndex] = value;
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
    return (
      <div className="">
        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <HeaderForm
            handleHeader={handleHeader}
            handleSocialLinks={handleSocialLinks}
            form={form}
          />
        </div>
        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <EducationForm
            handleSection={handleSection}
            handleEducation={handleEducation}
            form={form}
          />
        </div>

        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <ExperienceForm
            handleSection={handleSection}
            handleSectionData={handleSectionData}
            handleSectionPoints={handleSectionPoints}
            form={form}
          />
        </div>

        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <ProjectForm
            handleSection={handleSection}
            handleSectionData={handleSectionData}
            handleSectionPoints={handleSectionPoints}
            form={form}
          />
        </div>

        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <AchievementForm
            handleSectionPoints={handleSectionPoints}
            handleAchievements={handleAchievements}
            form={form}
          />
        </div>
        <div className="p-8 lg:px-12 my-10 rounded-2xl shadow-2xl bg-white h-fit">
          <SkillsForm
            handleSection={handleSection}
            handleSectionData={handleSectionData}
            handleSectionPoints={handleSectionPoints}
            form={form}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-full mx-12">
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
