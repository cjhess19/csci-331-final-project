import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap";
import reportWebVitals from "./reportWebVitals";
import { Header, Main, Ski } from "./App";
import { Routes, BrowserRouter } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";
//This is where all the components are rendered
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route exact path="/ski" element={<Ski />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
