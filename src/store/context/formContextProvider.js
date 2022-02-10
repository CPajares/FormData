import { useState } from "react";
import FormContext from "./formContext";

const FormContextProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);
  const [formState, setFormState] = useState(0);
  const [profileUser, setProfileUser] = useState({
    email: "",
    name: "",
    surname: "",
    description: "",
    country: "",
    city: "",
    experience: "",
    role: "",
    skill: "",
    skills,
    avatar: `https://avatars.dicebear.com/api/gridy/${Math.floor(
      Math.random() * 100
    )}.svg`,
  });

  return (
    <FormContext.Provider
      value={{
        skills,
        setSkills,
        formState,
        setFormState,
        profileUser,
        setProfileUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
