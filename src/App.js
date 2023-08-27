import Resume1 from "./Resume/Resume1";
import MyForm from "./Form/MyForm";
import data from "./demoData.json";
import { useState } from "react";
import { FormContext } from "./Hooks/formContext";

function App() {
  const [form, setForm] = useState(data);
  return (
    <FormContext.Provider value={{ form, setForm }}>
      <div className="bg-slate-600 grid grid-cols-2">
        <MyForm />
        <Resume1 />
      </div>
    </FormContext.Provider>
  );
}

export default App;
