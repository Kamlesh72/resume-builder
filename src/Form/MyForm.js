import SECTIONS from "../Constants/SECTIONS";
import { FormContext } from "../Hooks/formContext";
import { useContext, useState } from "react";
import HeaderForm from "./components/HeaderForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectForm from "./components/ProjectForm";
import AchievementForm from "./components/AchievementForm";
import SkillsForm from "./components/SkillsForm";

const MyForm = () => {
  const { form, setForm } = useContext(FormContext);
  const [whichSection, setSection] = useState(0);

  const handleInfo = (e) => {
    setForm((prevForm) => {
      return { ...prevForm, [e.target.name]: e.target.value };
    });
  };
  const handleSocialLinks = (e) => {
    setForm((prevForm) => {
      const platform = e.target.name;
      const link = e.target.value;
      const updatedSocialLinks = prevForm.socialLinks.map((social) => {
        if (social.platform === platform) {
          return { ...social, platform, link };
        }
        return social;
      });
      return { ...prevForm, socialLinks: updatedSocialLinks };
    });
  };
  const deleteSocialLink = (linkIndex) => {
    setForm((prevForm) => {
      const updatedSocialLinks = [...prevForm.socialLinks];
      updatedSocialLinks.splice(linkIndex, 1);
      return { ...prevForm, socialLinks: updatedSocialLinks };
    });
  };
  const handleEducation = (e, field) => {
    setForm((prevForm) => {
      const updatedCollege = {
        ...prevForm.education[field],
        [e.target.name]: e.target.value,
      };
      return {
        ...prevForm,
        education: { ...prevForm.education, [field]: updatedCollege },
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
  const handleSectionPoints = (e, section, sectionIndex) => {
    const pointIndex = e.target.id;
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      updatedSection[sectionIndex].points[pointIndex] = e.target.value;
      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };
  const deleteSectionData = (section, sectionIndex) => {
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      updatedSection.splice(sectionIndex, 1);
      return {
        ...prevForm,
        [section]: updatedSection,
      };
    });
  };
  const deleteSectionPoints = (e, section, sectionIndex) => {
    const pointIndex = e.target.id;
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      updatedSection[sectionIndex].points.splice(pointIndex, 1);
      return {
        ...prevForm,
        [section]: updatedSection,
      };
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
          handleInfo={handleInfo}
          handleSocialLinks={handleSocialLinks}
          deleteSocialLink={deleteSocialLink}
          form={form}
          setForm={setForm}
        />
      );
    } else if (whichSection === 1) {
      return (
        <EducationForm
          handleEducation={handleEducation}
          form={form}
          setForm={setForm}
        />
      );
    } else if (whichSection === 2) {
      return (
        <ExperienceForm
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          deleteSectionData={deleteSectionData}
          deleteSectionPoints={deleteSectionPoints}
          form={form}
        />
      );
    } else if (whichSection === 3) {
      return (
        <ProjectForm
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          form={form}
        />
      );
    } else if (whichSection === 4) {
      return (
        <AchievementForm handleAchievements={handleAchievements} form={form} />
      );
    } else {
      return (
        <SkillsForm
          handleSectionData={handleSectionData}
          handleSectionPoints={handleSectionPoints}
          form={form}
        />
      );
    }
  };

  return (
    <div className="p-20 bg-blue-400 col-span-2">
      <div className="flex flex-col gap-5">{displaySection()}</div>
      <button
        type="button"
        class="text-white bg-blue-600 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        onClick={() => setSection((prevSection) => (prevSection + 1) % 6)}
      >
        NEXT
      </button>
    </div>
  );
};

export default MyForm;
