import React, { memo } from "react";

import "./style.css";

const TextInput = (props) => {
  const input = {
    name: {
      label: "Name",
      type: "text",
    },
    email: {
      label: "Email Address",
      type: "text",
    },
    password: {
      label: "Password",
      type: "password",
    },
  };

  const { label, type } = input[props.property];

  return (
    <div className="text-input-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        required
      />
    </div>
  );
};

export default memo(TextInput);
