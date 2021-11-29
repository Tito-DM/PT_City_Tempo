import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MainState } from "./context/state";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <MainState>
    <Router>
      <App />
    </Router>
  </MainState>,
  document.getElementById("root")
);
