import axios from "axios";
import Resume1 from "../Resume/Resume1";
import MyForm from "../Form/MyForm";
import data from "../formTemplate.json";
import randomData from "../demoData.json";
import { useEffect, useState } from "react";
import { FormContext } from "../Hooks/formContext";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
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
  useEffect(() => {
    const init = async () => {
      params.append("grant_type", "authorization_code");
      params.append(process.env.REACT_APP_CTID, process.env.REACT_APP_CTID2);
      params.append(process.env.REACT_APP_CTSC, process.env.REACT_APP_CTSC2);
      params.append(
        "redirect_uri",
        "https://kamlesh72.github.io/resume-builder/dashboard"
      );
      params.delete("state");
      const { data } = await axios.get(
        "https://www.linkedin.com/oauth/v2/accessToken",
        params
      );
      const userResponse = await axios.get(
        "https://api.linkedin.com/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${data.access_token}`,
          },
        }
      );
      const userData = userResponse.data;
      setForm((prevForm) => {
        const updatedHeader = { ...prevForm.header };
        updatedHeader.firstName = userData.given_name;
        updatedHeader.lastName = userData.family_name;

        return { ...prevForm, header: updatedHeader };
      });
    };
    if (params.get("code")) init();
  }, [params]);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <div className="bg-slate-200 flex flex-col items-center justify-center min-h-screen">
        {whichSection === 0 ? (
          <div>
            <button
              className="bg-blue-300 h-fit sm:h-auto py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
              onClick={() => fillRandomData()}
            >
              {whichData ? "CLEAR DATA" : "FILL RANDOM DATA"}
            </button>
            <a
              href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77u3nsqg1v8xq2&redirect_uri=https://kamlesh72.github.io/resume-builder/dashboard&state=my_secret_state&scope=profile+openid"
              className="bg-blue-300 h-fit sm:h-auto ml-5 py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
            >
              FETCH FROM LINKEDIN
            </a>
          </div>
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
};

export default DashboardPage;
