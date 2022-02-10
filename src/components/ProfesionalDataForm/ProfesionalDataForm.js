import { useContext, useEffect, useState } from "react";
import FormContext from "../../store/context/formContext";
import ButtonForm from "../ButtonForm/ButtonForm";
import HeaderForm from "../HeaderForm/HeaderForm";
import "./ProfesionalDataForm.css";

const ProfesionalDataForm = () => {
  const { setProfileUser, profileUser, setSkills, skills } =
    useContext(FormContext);

  const changeDataForm = (event) => {
    setProfileUser({ ...profileUser, [event.target.id]: event.target.value });
  };

  const clickAddSkill = () => {
    if (skills.length < 5 && profileUser.skill.length) {
      setSkills([...skills, profileUser.skill]);
    }
    setProfileUser({ ...profileUser, skill: "" });
  };

  const clickDeleteSkill = (evento) => {
    setSkills(skills.filter((skill) => skill !== evento.target.id));
  };

  const [isDisabled, setIsdisabled] = useState(true);

  useEffect(() => {
    if (
      profileUser.experience !== "" &&
      profileUser.role !== "" &&
      skills.length
    ) {
      setIsdisabled(false);
    } else {
      setIsdisabled(true);
    }
  }, [profileUser.experience, profileUser.role, skills.length]);

  return (
    <div className="container__profesionalData">
      <HeaderForm title={"Profesional details"}></HeaderForm>
      <form className="form__profesionalData" autoComplete="off">
        <div className="form__containerData">
          <div className="form__profesional-details">
            <label htmlFor="experience">Experience:</label>
            <input
              onChange={changeDataForm}
              id="experience"
              value={profileUser.experience}
              type="number"
              placeholder="Work years experiencie"
            />
          </div>
          <div className="form__profesional-details">
            <label htmlFor="role">Role:</label>
            <select
              value={profileUser.role}
              onChange={changeDataForm}
              id="role"
            >
              <option></option>
              <option>Front-end</option>
              <option>Back-end</option>
              <option>Mobile</option>
              <option>Data</option>
            </select>
          </div>
          <div className="form__profesional-details">
            <label htmlFor="skill">Skills:</label>
            <input
              onChange={changeDataForm}
              value={profileUser.skill}
              minLength={1}
              maxLength={20}
              id="skill"
              type="text"
              placeholder="Max. 5"
            />
            <button
              onClick={clickAddSkill}
              className="button__add-skill"
              type="button"
            >
              ADD
            </button>
          </div>
        </div>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <p
              id={skill}
              onClick={clickDeleteSkill}
              key={index}
              className="skill-list"
            >
              #{skill}
            </p>
          ))}
        </div>

        <div className="form__keypad">
          <ButtonForm isDisabled={false} type={"back"}></ButtonForm>
          <ButtonForm isDisabled={isDisabled} type={"follow"}></ButtonForm>
        </div>
        {isDisabled && (
          <p
            className="
warning-profesional"
          >
            Please, fill in all fields to continue
          </p>
        )}
      </form>
    </div>
  );
};

export default ProfesionalDataForm;
