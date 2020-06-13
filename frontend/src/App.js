import React from "react";
import "./global.css";

import MessageState from "./context/Message/MessageState";
import AlertState from "./context/Alert/AlertState";
import RegisterState from "./context/Register/RegisterState";

import Alert from "./components/Alert";

import Routes from "./routes";

function App() {
  return (
    <MessageState>
      <AlertState>
        <RegisterState>
          <Alert />
          <div className="container">
            <Routes />
          </div>
        </RegisterState>
      </AlertState>
    </MessageState>
  );
}

export default App;
