import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/Css/Global.css";
import "./Assets/Css/Reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);