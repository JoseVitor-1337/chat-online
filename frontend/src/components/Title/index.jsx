import React from 'react';

import './style.css';

export default function Title(props) {
  return <h2 className={props.context}>{props.title}</h2>;
}
