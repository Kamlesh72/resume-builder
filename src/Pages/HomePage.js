import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Resume1Image from "../Assets/resume_1.png";

const HomePage = () => {
  const navigate = useNavigate();
  const [whichResume, setResume] = useState(0);

  return (
    <div className="bg-slate-200 p-5 lg:p-20 h-screen flex justify-between flex-col">
      <div className="flex">
        <div
          className={`cursor-pointer ${
            whichResume === 0 &&
            " border-blue-500 border-2 p-0.5 rounded-lg shadow shadow-blue-800"
          }`}
        >
          <img
            src={Resume1Image}
            className={`w-20 sm:w-32 lg:w-40 p-1 bg-slate-600 rounded-lg`}
            alt="resume-1"
          />
        </div>
      </div>
      <button
        className="focus:outline-none mx-auto w-fit p-4 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm"
        onClick={() => navigate("/dashboard")}
      >
        CREATE MY RESUME
      </button>
    </div>
  );
};

export default HomePage;
