import React, { memo } from "react";

import Title from "../Title";
import Text from "../Text";

import "./style.css";

function MessageItem({ title, userName, text }) {
  function seeItsMe() {
    if (title === userName) {
      return "its-me message-box";
    } else {
      return "its-not-me message-box";
    }
  }
  return (
    <div className={seeItsMe()}>
      <Title context="message" title={title === userName ? "Você" : title} />
      <Text context="message" text={text} />
    </div>
  );
}

export default memo(MessageItem);
