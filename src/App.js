import Resume1 from "./Resume/Resume1";
import MyForm from "./Form/MyForm";
import data from "./formTemplate.json";
import randomData from "./demoData.json";
import { useState } from "react";
import { FormContext } from "./Hooks/formContext";

function App() {
  const [form, setForm] = useState(data);
  const [isResume, setResume] = useState(0);
  const [whichSection, setSection] = useState(0);
  const [whichData, setData] = useState(0);
  const handleIsResume = () => {
    setResume((prevRes) => !prevRes);
  };
  const fillRandomData = () => {
    setData((prevData) => !prevData);
    if (whichData) setForm(data);
    else setForm(randomData);
  };

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <div className="bg-slate-600 flex flex-col items-center justify-center min-h-screen">
        {whichSection === 0 ? (
          <button
            className="bg-blue-300 h-fit sm:h-auto py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
            onClick={() => fillRandomData()}
          >
            {whichData ? "CLEAR DATA" : "FILL RANDOM DATA"}
          </button>
        ) : (
          ""
        )}
        <div className="w-full lg:w-9/12 flex justify-end pr-5 sm:mt-10">
          <button
            className="bg-blue-300 h-fit sm:h-auto py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
            onClick={handleIsResume}
          >
            {isResume ? "FORM" : "PREVIEW"}
          </button>
        </div>
        {isResume ? (
          <Resume1 />
        ) : (
          <MyForm whichSection={whichSection} setSection={setSection} />
        )}
      </div>
    </FormContext.Provider>
  );
}

export default App;
