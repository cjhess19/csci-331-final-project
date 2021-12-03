import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap";
import { App } from "./App";


ReactDOM.render(
  <React.StrictMode>
    
      <div style={{backgroundImage: "url('../images/background.jpg')"}}>
    <App />
    </div>

  </React.StrictMode>,
  document.getElementById("root")
);

