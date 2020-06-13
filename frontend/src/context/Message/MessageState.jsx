import React, { useReducer, useCallback } from "react";
import MessageContext from "./MessageContext";
import MessageReducer from "./MessageReducer";

const MessageState = (props) => {
  const initialState = {
    messages: [],
  };

  const [state, submit] = useReducer(MessageReducer, initialState);

  const loadAllMessages = (messages) => {
    submit({
      type: "LOAD_ALL_MESSAGES",
      content: messages,
    });
  };

  const loadNewMessage = useCallback((message) => {
    submit({
      type: "LOAD_NEW_MESSAGE",
      content: message,
    });
  }, []);

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
        loadAllMessages,
        loadNewMessage,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
