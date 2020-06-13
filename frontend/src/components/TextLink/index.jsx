import React from "react";
import { Link } from "react-router-dom";

import "./style.css";
import "./responsive.css";


export default function TextLink(props) {
  return (
    <Link className="link" to={props.to}>
      <p>{props.text}</p>
    </Link>
  );
}
