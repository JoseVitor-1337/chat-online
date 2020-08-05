import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import "./responsive.css";

import AlertContext from "../../context/Alert/AlertContext";
import RegisterContext from "../../context/Register/RegisterContext";

import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";
import Title from "../../components/Title";

const LoginForm = () => {
  const { login, warnings, user } = useContext(RegisterContext);
  const { setAlert } = useContext(AlertContext);

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (warnings) {
      setAlert(warnings.text, warnings.type);
    }
  }, [warnings, setAlert]);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      history.push("/chat");
    }
  }, [user, history]);

  return (
    <div className="form">
      <div className="content">
        <Title context="form" title="Chat Online" />
        <TextInput property="email" valua={email} setValue={setEmail} />
        <TextInput
          property="password"
          value={password}
          setValue={setPassword}
        />
        <TextLink to="/register" text="Criar uma conta" />
        <SubmitButton
          action={() => login({ email, password })}
          value={"Logar"}
        />
      </div>
    </div>
  );
};

export default LoginForm;
