import React, { useEffect, useContext } from "react";

import AlertContext from "../../context/Alert/AlertContext";
import MessageContext from "../../context/Message/MessageContext";
import RegisterContext from "../../context/Register/RegisterContext";

import putScrollToBottom from "../../utils/putScrollToBottom";

import "./style.css";
import "./responsive.css";

import ChatInput from "../../components/ChatInput";
import LogoutButton from "../../components/LogoutButton";
import MessageItem from "../../components/MessageItem";
import Title from "../../components/Title";

export default function Chat() {
  const { socket, user, handleReloadPage } = useContext(RegisterContext);
  const { messages, loadAllMessages, loadNewMessage } = useContext(
    MessageContext
  );
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    if (socket === null) {
      handleReloadPage();
    }
  }, [handleReloadPage, socket]);

  useEffect(() => {
    putScrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (socket !== null) {
      socket.on("chat_new_message", function (message) {
        loadNewMessage(message);
      });
    }
  }, [loadNewMessage, socket]);

  useEffect(() => {
    if (socket !== null) {
      socket.on("chat_all_messages", function (messages) {
        loadAllMessages(messages);
      });
      socket.on("user_is_online", (name) => {
        setAlert(`${name} está online`, "success");
      });
      socket.on("user_is_offline", (name) => {
        setAlert(`${name} está offline`, "danger");
      });
    }
  }, [loadAllMessages, setAlert, socket]);

  return (
    <div className="chat-container">
      <header>
        <Title context="chat" title={`Bem Vindo ${user.name} ao Chat Online`} />
        <LogoutButton userName={user.name} />
      </header>
      <div className="chat-content">
        {messages.map((message, index) => (
          <MessageItem
            key={index}
            userName={user.name}
            text={message.text}
            title={message.name}
          />
        ))}
      </div>

      <ChatInput
        setAlert={setAlert}
        user={user}
        socket={socket}
        loadNewMessage={loadNewMessage}
      />
    </div>
  );
}
