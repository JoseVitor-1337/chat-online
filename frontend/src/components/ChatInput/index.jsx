import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import "./style.css";
import "./responsive.css";

export default function ChatInput({ setAlert, socket, user, loadNewMessage }) {
  const [text, setText] = useState("");

  async function handleSendMessage() {
    const message = {
      messageInfo: {
        text,
        name: user.name,
      },
      channel: "chat",
    };

    if (text !== "") {
      socket.emit("send_message", message);

      await loadNewMessage(message.messageInfo);
    } else {
      setAlert("Escreva alguma coisa", "danger");
    }
  }

  return (
    <div className="chat-input-group">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Text Your Message Here"
        required
      />
      <div onClick={handleSendMessage} className="arrow-box">
        <FiArrowRight size={30} />
      </div>
    </div>
  );
}
