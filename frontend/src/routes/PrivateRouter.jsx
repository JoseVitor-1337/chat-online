import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

export default function PrivateRouter(props) {
  const loggedUser = localStorage.getItem("token");
  const history = useHistory();

  useEffect(() => {
    // if (!loggedUser) {
    //   history.push("/");
    // }
  }, [loggedUser, history]);

  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
}
