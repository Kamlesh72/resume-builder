import { useContext } from "react";
import { FormContext } from "../../Hooks/formContext";

function FormHelper() {
  const { form, setForm } = useContext;
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
  const handleCollege = (e) => {
    setForm((prevForm) => {
      return prevForm;
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
    const pointsIndex = e.target.id;
    setForm((prevForm) => {
      const updatedSection = [...prevForm[section]];
      updatedSection[sectionIndex].points[pointsIndex] = e.target.value;
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
}
