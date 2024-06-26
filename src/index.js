import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./i18n/config";
import ReactGA from "react-ga4";

ReactGA.initialize("G-934QSL0VQM");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
