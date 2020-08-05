import React, { memo } from "react";

import "./style.css";

const SubmitButton = (props) => {
  return (
    <button className="submit" onClick={props.action}>
      {props.value}
    </button>
  );
};

export default memo(SubmitButton);
