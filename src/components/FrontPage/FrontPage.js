import { useContext } from "react";
import FormContext from "../../store/context/formContext";
import "./FrontPage.css";
const FrontPage = () => {
  const { formState, setFormState } = useContext(FormContext);

  const clickYourData = () => {
    setFormState(formState + 1);
  };

  return (
    <button onClick={clickYourData} className="button-frontPage" type="button">
      Start whit Your Data
    </button>
  );
};

export default FrontPage;
