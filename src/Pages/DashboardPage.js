import axios from "axios";
import Resume1 from "../Resume/Resume1";
import MyForm from "../Form/MyForm";
import data from "../formTemplate.json";
import randomData from "../demoData.json";
import React, { useEffect, useState } from "react";
import { FormContext } from "../Hooks/formContext";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import Resume1page2 from "../Resume/Resume1page2";
import ReactToPdf from "react-to-pdf";

const DashboardPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [form, setForm] = useState(data);
  const [whichSection, setSection] = useState(0);
  const [whichData, setData] = useState(0);
  const [formElements, setFormElements] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  const ref = React.createRef();

  const fillRandomData = () => {
    setData((prevData) => !prevData);
    if (whichData) setForm(data);
    else setForm(randomData);
  };
  useEffect(() => {
    const init = async () => {
      console.log("FETCHING DATA.....");
      const toastId = toast.loading("Fetching Data...", {
        position: "top-center",
      });
      const params2 = {
        grant_type: "authorization_code",
        [process.env.REACT_APP_CTID]: process.env.REACT_APP_CTID2,
        [process.env.REACT_APP_CTSC]: process.env.REACT_APP_CTSC2,
        redirect_uri: `${process.env.REACT_APP_FRONTEND_URL}/dashboard`,
        code: params.get("code"),
      };

      const resAPI = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/get-linkedin-data`,
        { params: params2 }
      );
      const userData = resAPI.data.userData;
      toast.success("Fetched Successfully", {
        id: toastId,
      });
      setForm((prevForm) => {
        const updatedHeader = { ...prevForm.header };
        updatedHeader.firstName = userData.given_name;
        updatedHeader.lastName = userData.family_name;

        return { ...prevForm, header: updatedHeader };
      });
    };
    if (params.get("code")) init();
    // eslint-disable-next-line
  }, [params.get("code")]);

  const styles = {
    transform: "scale(0.8) translate(-20%, -15%)",
  };

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <div className="">
        <div className="p-3 bg-white flex flex-col items-center justify-center">
          {whichSection === 0 ? (
            <div className="flex">
              <button
                className=" bg-blue-300 h-fit sm:h-auto py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
                onClick={() => fillRandomData()}
              >
                {whichData ? "CLEAR DATA" : "FILL RANDOM DATA"}
              </button>
              <a
                href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77u3nsqg1v8xq2&redirect_uri=${process.env.REACT_APP_FRONTEND_URL}/dashboard&state=my_secret_state&scope=profile+openid`}
                className="inline-block bg-blue-300 h-fit sm:h-auto ml-5 py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
              >
                FETCH FROM LINKEDIN
              </a>
              <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                {({ toPdf }) => (
                  <button
                    className=" bg-blue-300 ml-5 h-fit sm:h-auto py-2 px-4 text-base hover:bg-gray-400 text-gray-800 font-bold rounded"
                    onClick={toPdf}
                  >
                    GENERATE PDF
                  </button>
                )}
              </ReactToPdf>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="grid grid-cols-2">
          <div id="my-form">
            <MyForm whichSection={whichSection} setSection={setSection} />
          </div>

          <div className="lg:ml-20">
            <div ref={ref} className="w-full p-10" style={styles}>
              <Resume1
                formElements={formElements}
                setFormElements={setFormElements}
              />
              {!formElements.reduce((acc, curr) => acc & curr, true) && (
                <Resume1page2 formElements={formElements} />
              )}
            </div>
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default DashboardPage;
