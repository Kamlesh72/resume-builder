import ACTIONS from "../../Constants/ACTIONS";
import SECTIONS from "../../Constants/SECTIONS";

const ProjectForm = ({
  handleSection,
  handleSectionData,
  handleSectionPoints,
  form,
}) => {
  return (
    <div>
      <h1 className="font-bold uppercase text-5xl mb-5 flex">
        <span>PROJECTS</span>
        <button
          className="bg-gray-300 h-fit sm:h-auto text-base ml-10 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={(e) => handleSection(e, ACTIONS.ADD, SECTIONS.PROJECTS)}
        >
          ADD
        </button>
      </h1>

      {form.projects.map((project, projectInd) => (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-10 border-2 border-gray-300 p-5 rounded-lg">
          <button
            type="button"
            className="focus:outline-none ml-auto col-span-2 w-fit p-3 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm"
            onClick={(e) =>
              handleSection(e, ACTIONS.DELETE, SECTIONS.PROJECTS, projectInd)
            }
          >
            DELETE
          </button>
          <input
            className="w-full md:col-span-2 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={project.name}
            placeholder="Project Name*"
            onChange={(e) =>
              handleSectionData(e, SECTIONS.PROJECTS, projectInd)
            }
          />

          <h1 className="font-bold uppercase text-xl mt-5 flex">
            <span>Points</span>
            <button
              className="bg-gray-300 h-fit sm:h-auto text-sm ml-5 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
              onClick={(e) =>
                handleSectionPoints(
                  e,
                  ACTIONS.ADD,
                  SECTIONS.PROJECTS,
                  projectInd
                )
              }
            >
              ADD
            </button>
          </h1>
          {project.points.map((point, pointIndex) => (
            <div className="md:col-span-2 flex">
              <input
                className="flex-1 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                id={pointIndex}
                type="text"
                placeholder="Enter description"
                value={point}
                onChange={(e) =>
                  handleSectionPoints(e, ACTIONS.UPDATE, SECTIONS.PROJECTS, projectInd)
                }
              />
              <button
                id={pointIndex}
                type="button"
                className="focus:outline-none ml-3 p-3 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm"
                onClick={(e) =>
                  handleSectionPoints(
                    e,
                    ACTIONS.DELETE,
                    SECTIONS.PROJECTS,
                    projectInd
                  )
                }
              >
                X
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectForm;
