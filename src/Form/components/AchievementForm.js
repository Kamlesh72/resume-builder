import ACTIONS from "../../Constants/ACTIONS";
import SECTIONS from "../../Constants/SECTIONS";

const AchievementForm = ({ handleSectionPoints, form }) => {
  const { points } = form.achievements[0];
  return (
    <div>
      <h1 className="font-bold uppercase text-5xl mb-10">ACHIEVEMENTS</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 my-10 border-2 border-gray-300 p-5 rounded-lg">
      <h1 className="font-bold uppercase text-xl mt-5 flex">
            <span>Points</span>
            <button
              className="bg-gray-300 h-fit sm:h-auto text-sm ml-5 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded"
              onClick={(e) =>
                handleSectionPoints(
                  e,
                  ACTIONS.ADD,
                  SECTIONS.ACHIEVEMENTS
                )
              }
            >
              ADD
            </button>
          </h1>
        {points.map((point, pointIndex) => (
          <div className="md:col-span-2 flex">
          <input
            className="flex-1 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id={pointIndex}
            type="text"
            placeholder="Enter description"
            value={point}
            onChange={(e) =>
              handleSectionPoints(e, ACTIONS.UPDATE, SECTIONS.ACHIEVEMENTS)
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
                SECTIONS.ACHIEVEMENTS
              )
            }
          >
            X
          </button>
        </div>
          

        ))}
      </div>
    </div>
  );
};

export default AchievementForm;
