import ACTIONS from "../../Constants/ACTIONS";
import SECTIONS from "../../Constants/SECTIONS";

const ExperienceForm = ({
  handleSection,
  handleSectionData,
  handleSectionPoints,
  form,
}) => {
  return (
    <div>
      <h1 className="font-bold uppercase text-5xl mb-5 flex">
        <span>WORK EXPERIENCE</span>
        <button
          className="bg-gray-300 h-fit sm:h-auto text-base ml-10 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={(e) => handleSection(e, ACTIONS.ADD, SECTIONS.EXPERIENCES)}
        >
          ADD
        </button>
      </h1>

      {form.experiences.map((experience, expIndex) => (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-10 border-2 border-gray-300 p-5 rounded-lg">
          <button
            type="button"
            className="focus:outline-none ml-auto col-span-2 w-fit p-3 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm"
            onClick={(e) =>
              handleSection(e, ACTIONS.DELETE, SECTIONS.EXPERIENCES, expIndex)
            }
          >
            DELETE
          </button>
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={experience.name}
            placeholder="Company*"
            onChange={(e) =>
              handleSectionData(e, SECTIONS.EXPERIENCES, expIndex)
            }
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="designation"
            value={experience.designation}
            placeholder="Designation*"
            onChange={(e) =>
              handleSectionData(e, SECTIONS.EXPERIENCES, expIndex)
            }
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="startDate"
            placeholder="Start Date*"
            value={experience.startDate}
            onChange={(e) => handleSectionData(SECTIONS.EXPERIENCES, expIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="endDate"
            placeholder="End Date*"
            value={experience.endDate}
            onChange={(e) => handleSectionData(SECTIONS.EXPERIENCES, expIndex)}
          />

          <h1 className="font-bold uppercase text-xl mt-5 flex">
            <span>Points</span>
            <button
              className="bg-gray-300 h-fit sm:h-auto text-sm ml-5 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
              onClick={(e) =>
                handleSectionPoints(
                  e,
                  ACTIONS.ADD,
                  SECTIONS.EXPERIENCES,
                  expIndex
                )
              }
            >
              ADD
            </button>
          </h1>
          {experience.points.map((point, pointIndex) => (
            <div className="md:col-span-2 flex">
              <input
                className="flex-1 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                id={pointIndex}
                name="points"
                value={point}
                placeholder="Enter description"
                onChange={(e) =>
                  handleSectionPoints(
                    e,
                    ACTIONS.UPDATE,
                    SECTIONS.EXPERIENCES,
                    expIndex
                  )
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
                    SECTIONS.EXPERIENCES,
                    expIndex
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

export default ExperienceForm;