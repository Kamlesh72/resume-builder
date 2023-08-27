import SECTIONS from "../../Constants/SECTIONS";

const ProjectForm = ({ handleSectionData, handleSectionPoints, form }) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5 underline">PROJECTS</div>
      {form.projects.map((project, projectInd) => (
        <div class="w-full bg-slate-500 p-5 my-5">
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="name"
              value={project.name}
              onChange={(e) =>
                handleSectionData(e, SECTIONS.PROJECTS, projectInd)
              }
            />
          </div>
          {project.points.map((point, index) => (
            <div class="relative z-0 w-full mb-6 group">
              <input
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                id={index}
                type="text"
                name="points"
                value={point}
                onChange={(e) =>
                  handleSectionPoints(e, SECTIONS.PROJECTS, projectInd)
                }
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectForm;
