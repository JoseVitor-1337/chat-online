import React from "react";
import "./style.css";

export default function Text(props) {
  return <p className={props.context}>{props.text}</p>;
}
