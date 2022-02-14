import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import "./index.css";

ReactDOM.render(
  //render es un metodo porque esta dentro de una funcion
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
