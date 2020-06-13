import React, { memo } from "react";
import "./style.css";
import "./responsive.css";

const TextInput = (props) => {
  const input = {
    name: {
      placeholder: "Name",
      type: "text",
    },
    email: {
      placeholder: "Email Address",
      type: "text",
    },
    password: {
      placeholder: "Password",
      type: "password",
    },
  };

  const { placeholder, type } = input[props.property];

  return (
    <div className="text-input-group">
      <input
        type={type}
        value={props.value}
        onChange={(event) =>  props.setValue(event.target.value)}
        required
      />
      <span>{placeholder}</span>
    </div>
  );
};

export default memo(TextInput);
