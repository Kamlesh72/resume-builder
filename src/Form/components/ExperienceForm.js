import SECTIONS from "../../Constants/SECTIONS";

const ExperienceForm = ({
  handleSectionData,
  handleSectionPoints,
  deleteSectionData,
  deleteSectionPoints,
  form,
}) => {
  return (
    <div>
      <div className="text-3xl font-semibold mb-5 underline">
        WORK EXPERIENCE
      </div>
      {form.experiences.map((experience, expIndex) => (
        <div class="w-full bg-slate-500 p-5 my-5">
          <button
            onClick={(e) =>
              deleteSectionData(e, SECTIONS.EXPERIENCES, expIndex)
            }
          >
            X
          </button>
          <div class="relative z-0 w-full mb-6 group">
            <input
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              name="name"
              value={experience.name}
              onChange={(e) =>
                handleSectionData(e, SECTIONS.EXPERIENCES, expIndex)
              }
            />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
                name="from"
                value={experience.from}
                onChange={(e) =>
                  handleSectionData(SECTIONS.EXPERIENCES, expIndex)
                }
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="text"
                name="to"
                value={experience.to}
                onChange={(e) =>
                  handleSectionData(SECTIONS.EXPERIENCES, expIndex)
                }
              />
            </div>
          </div>
          {experience.points.map((point, index) => (
            <div class="relative z-0 w-full mb-6 group">
              <input
                class="inline-block py-2.5 px-0 w-11/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                id={index}
                type="text"
                name="points"
                value={point}
                onChange={(e) =>
                  handleSectionPoints(e, SECTIONS.EXPERIENCES, expIndex)
                }
              />
              <button
                onClick={(e) =>
                  deleteSectionPoints(e, SECTIONS.EXPERIENCES, expIndex)
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
