import ACTIONS from "../../Constants/ACTIONS";
import SECTIONS from "../../Constants/SECTIONS";

const EducationForm = ({ handleSection, handleEducation, form }) => {
  const { education } = form;
  return (
    <div>
      <h1 className="font-bold uppercase text-5xl mb-5 flex">
        <span>EDUCATION</span>
        <button
          className="bg-gray-300 h-fit sm:h-auto text-base ml-10 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          onClick={(e) => handleSection(e, ACTIONS.ADD, SECTIONS.EDUCATION)}
        >
          ADD
        </button>
      </h1>

      {education.map((edu, eduIndex) => (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-10 border-2 border-gray-300 p-5 rounded-lg">
          <button
            type="button"
            className="focus:outline-none ml-auto col-span-2 w-fit p-3 text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm"
            onClick={(e) =>
              handleSection(e, ACTIONS.DELETE, SECTIONS.EDUCATION, eduIndex)
            }
          >
            DELETE
          </button>
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            value={edu.name}
            placeholder="College*"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="degree"
            value={edu.degree}
            placeholder="Degree"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="branch"
            value={edu.branch}
            placeholder="Branch"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="result"
            value={edu.result}
            placeholder="Result"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="startDate"
            value={edu.startDate}
            placeholder="Start Date*"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="endDate"
            value={edu.endDate}
            placeholder="End Date*"
            onChange={(e) => handleEducation(e, eduIndex)}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationForm;