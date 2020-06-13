import React, { memo } from "react";

import "./style.css";
import "./responsive.css";

const SubmitButton = (props) => {
  return (
    <button className="submit" onClick={props.action}>
      {props.value}
    </button>
  );
};

export default memo(SubmitButton);
