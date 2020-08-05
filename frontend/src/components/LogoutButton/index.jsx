import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import RegisterContext from "../../context/Register/RegisterContext";

import "./style.css";

export default function LogoutButton({ userName }) {
  const { logout } = useContext(RegisterContext);
  const history = useHistory();

  const logoutChat = () => {
    logout(userName);

    history.push("/");
  };

  return (
    <div onClick={logoutChat} className="log-out">
      <FiLogOut size={25} />
    </div>
  );
}
