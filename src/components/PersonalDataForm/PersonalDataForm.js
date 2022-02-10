import { useContext, useEffect, useState } from "react";
import FormContext from "../../store/context/formContext";
import ButtonForm from "../ButtonForm/ButtonForm";
import HeaderForm from "../HeaderForm/HeaderForm";
import "./PersonalDataForm.css";

const PersonalDataForm = () => {
  const { setProfileUser, profileUser } = useContext(FormContext);

  const changeDataForm = (event) => {
    setProfileUser({ ...profileUser, [event.target.id]: event.target.value });
  };

  const [isDisabled, setIsdisabled] = useState(true);

  useEffect(() => {
    if (
      profileUser.email !== "" &&
      profileUser.name !== "" &&
      profileUser.surname !== "" &&
      profileUser.description !== "" &&
      profileUser.country !== "" &&
      profileUser.city !== ""
    ) {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  }, [
    profileUser.city,
    profileUser.country,
    profileUser.description,
    profileUser.email,
    profileUser.name,
    profileUser.surname,
  ]);

  return (
    <>
      <div className="container__personalData">
        <HeaderForm title={"Personal details"}></HeaderForm>
        <form className="form__personalData" autoComplete="off">
          <div className="form__personal-details">
            <label htmlFor="email">E-mail address:</label>
            <input
              id="email"
              value={profileUser.email}
              onChange={changeDataForm}
              type="email"
              placeholder="Enter your email adress"
            />
          </div>
          <div className="form__personal-details">
            <label htmlFor="">Name:</label>
            <input
              id="name"
              value={profileUser.name}
              onChange={changeDataForm}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="form__personal-details">
            <label htmlFor="">Surname:</label>
            <input
              id="surname"
              value={profileUser.surname}
              onChange={changeDataForm}
              type="text"
              placeholder="Enter your Surname"
            />
          </div>
          <div className="form__personal-details">
            <label htmlFor="">Your description:</label>
            <textarea
              id="description"
              value={profileUser.description}
              onChange={changeDataForm}
              maxLength={250}
              cols={21}
              rows={10}
              placeholder="Enter your description"
            ></textarea>
          </div>
          <div className="form__personal-details">
            <label htmlFor="">Country:</label>
            <input
              id="country"
              value={profileUser.country}
              onChange={changeDataForm}
              type="text"
              placeholder="Enter your country"
            />
          </div>
          <div className="form__personal-details">
            <label htmlFor="city">City:</label>
            <input
              id="city"
              value={profileUser.city}
              onChange={changeDataForm}
              type="text"
              placeholder="Enter your city"
            />
          </div>
          <div className="form__keypad">
            <ButtonForm isDisabled={isDisabled} type={"follow"}></ButtonForm>
          </div>
          <div className="warning-container">
            {isDisabled && (
              <p className="warning-personal">
                Please, fill in all fields to continue
              </p>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDataForm;
