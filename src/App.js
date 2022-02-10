import { useContext } from "react";
import "./App.css";
import FrontPage from "./components/FrontPage/FrontPage";
import PersonalDataForm from "./components/PersonalDataForm/PersonalDataForm";
import ProfesionalDataForm from "./components/ProfesionalDataForm/ProfesionalDataForm";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import FormContext from "./store/context/formContext";

function App() {
  const { formState } = useContext(FormContext);
  return (
    <div className="App">
      {formState === 0 && <FrontPage />}
      {formState === 1 && <PersonalDataForm />}
      {formState === 2 && <ProfesionalDataForm />}
      {formState === 3 && <ProfileCard />}
    </div>
  );
}

export default App;
