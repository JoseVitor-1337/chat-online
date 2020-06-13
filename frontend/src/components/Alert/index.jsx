import React, { useEffect, useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";

import "./style.css";
import "./responsive.css";

export default function Alert() {
  const { alerts } = useContext(AlertContext);

  useEffect(() => {
    const alertBox = document.querySelector("div.alert-box");
    if (alertBox) {
      showAlertBox(alertBox);

      setTimeout(() => {
        hideAlertBox(alertBox);
      }, 3000);
    }
  }, [alerts]);

  function showAlertBox(alertBox) {
    alertBox.classList.add("show");
    alertBox.classList.remove("hidden");
  }

  function hideAlertBox(alertBox) {
    alertBox.classList.add("hide");
  }

  return alerts.map((alert) => (
    <div key={alert.type} className={`alert-box hidden ${alert.type}`}>
      <p>{alert.text}</p>
    </div>
  ));
}
