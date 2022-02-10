import { useContext } from "react";
import FormContext from "../../store/context/formContext";
import "./ButtonForm.css";

const ButtonForm = ({ type, isDisabled }) => {
  const { formState, setFormState } = useContext(FormContext);

  const clickButton = (event) => {
    event.preventDefault();

    type === "back" ? setFormState(formState - 1) : setFormState(formState + 1);
  };

  return (
    <button
      onClick={clickButton}
      disabled={isDisabled}
      className={`button-form ${type === "back" ? "button-back" : ""}`}
    ></button>
  );
};

export default ButtonForm;
