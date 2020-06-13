import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import PublicRouter from "./routes/PublicRouter";
import PrivateRouter from "./routes/PrivateRouter";

import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Chat from "./pages/Chat";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRouter exact={true} path="/" component={LoginForm} />
        <PublicRouter path="/register" component={RegisterForm} />
        <PrivateRouter path="/chat" component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
