import { useContext } from "react";
import FormContext from "../../store/context/formContext";
import ButtonForm from "../ButtonForm/ButtonForm";
import HeaderForm from "../HeaderForm/HeaderForm";
import "./ProfileCard.css";

const ProfileCard = () => {
  const { profileUser, skills } = useContext(FormContext);

  return (
    <section className="profileCard">
      <HeaderForm title={"Profile"}></HeaderForm>
      <div className="profileCard__main-data">
        <img width={80} height={80} src={profileUser.avatar} alt="" />
        <h2>{profileUser.name}</h2>
        <h3>{profileUser.surname}</h3>
        <p>
          {profileUser.role},
          {profileUser.experience !== "0"
            ? ` whit ${profileUser.experience} years experience `
            : " Junior"}
        </p>
        <ul className="skills">
          {skills.map((skill, index) => (
            <li className="skill" key={index}>
              #{skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="profileCard__secondary-data">
        <p className="description">{profileUser.description}</p>
        <ul className="container__list">
          <li>
            <p> {profileUser.email}</p>
          </li>
          <li>{profileUser.country}</li>
          <li>{profileUser.city}</li>
        </ul>
      </div>
      <div className="form__keypad">
        <ButtonForm type={"back"}></ButtonForm>
      </div>
    </section>
  );
};

export default ProfileCard;
