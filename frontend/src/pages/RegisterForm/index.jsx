import React, { useEffect, useState, useContext } from "react";
import "./style.css";
import "./responsive.css";

import { useHistory } from "react-router-dom";

import AlertContext from "../../context/Alert/AlertContext";
import RegisterContext from "../../context/Register/RegisterContext";

import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";
import Title from "../../components/Title";

const RegisterForm = () => {
  const { createAccount, warnings } = useContext(RegisterContext);
  const { setAlert } = useContext(AlertContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (warnings) {
      setAlert(warnings.text, warnings.type);
      if (warnings.type === "success") {
        history.push("/");
      }
    }
  }, [warnings, setAlert, history]);

  return (
    <div className="form">
      <div className="content">
        <Title context="form" title="Chat Online"></Title>
        <TextInput property="name" value={name} setValue={setName} />
        <TextInput property="email" valua={email} setValue={setEmail} />
        <TextInput
          property="password"
          value={password}
          setValue={setPassword}
        />
        <TextLink to="/" text="Logar no Sistema" />
        <SubmitButton
          action={() => createAccount({ name, email, password })}
          value="Criar Conta"
        />
      </div>
    </div>
  );
};

export default RegisterForm;
