import React, { useReducer, useCallback } from "react";
import RegisterContext from "./RegisterContext";
import RegisterReducer from "./RegisterReducer";

import socketio from "socket.io-client";

import AccountService from "../../services/Account";

const RegisterState = (props) => {
  const initialState = {
    user: {},
    socket: null,
    warnings: null,
  };

  const [state, submit] = useReducer(RegisterReducer, initialState);

  const removeWarnings = () => {
    setTimeout(() => {
      submit({
        type: "REMOVE_WARNINGS",
      });
    }, 1000);
  };

  const handleErrors = (error, type) => {
    submit({
      type: `${type}_ERROR`,
      content: {
        text: error,
        type: "danger",
      },
    });
  };

  const createAccount = async (userData) => {
    try {
      await AccountService({
        method: "POST",
        url: "/user",
        data: userData,
      });

      submit({
        type: "CREATE_ACCOUNT",
      });

      removeWarnings();
    } catch (error) {
      const type = "CREATE_ACCOUNT";

      handleErrors(error.response.data, type);

      removeWarnings();
    }
  };

  const login = async (credentials) => {
    try {
      const result = await AccountService.post("/authentication", credentials);

      const token = result.data.token;

      const response = await AccountService.get("/user", {
        headers: {
          token,
        },
      });

      localStorage.setItem("token", token);

      const user = response.data;

      submit({
        type: "LOGIN",
        content: {
          user,
          socket: socketio("http://localhost:5000").emit("is_connected", {
            channel: "chat",
            user,
          }),
        },
      });
    } catch (error) {
      const type = "LOGIN";

      console.log(error.response);

      handleErrors(error.response.data, type);

      removeWarnings();
    }
  };

  const logout = (userName) => {
    localStorage.removeItem("token");

    state.socket.emit("is_disconnected", userName);

    submit({
      type: "LOGOUT",
    });
  };

  const handleReloadPage = useCallback(async () => {
    const token = localStorage.getItem("token");

    const response = await AccountService.get("/user", {
      headers: {
        token,
      },
    });

    const user = response.data;

    submit({
      type: "RELOAD_LOGIN",
      content: {
        user,
        socket: socketio("http://localhost:5000").emit(
          "is_reconnected",
          "chat"
        ),
      },
    });
  }, []);

  return (
    <RegisterContext.Provider
      value={{
        user: state.user,
        socket: state.socket,
        warnings: state.warnings,
        handleReloadPage,
        createAccount,
        login,
        logout,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterState;
