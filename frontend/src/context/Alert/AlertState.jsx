import React, { useReducer, useCallback } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = {
    alerts: [],
  };

  const [state, submit] = useReducer(AlertReducer, initialState);

  const setAlert = useCallback((text, type) => {
    submit({
      type: "SET_ALERT",
      content: {
        text,
        type,
      },
    });

    setTimeout(() => {
      submit({
        type: "REMOVE_ALERT",
      });
    }, 4000);
  }, []);

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
