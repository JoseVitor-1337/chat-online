import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

export default function PublicRouter(props) {
  const token = localStorage.getItem("token");

  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.goBack();
    }
  }, [token, history]);

  return <Route path={props.path} component={props.component} />;
}
