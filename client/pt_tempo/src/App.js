import React, { Fragment } from "react";
import WeatherCard from "./components/weatherCard"
import "./App.css";

function App() {
  return (
    <Fragment>
      <header></header>

      <main  className="container">
        <div class="angry-grid">
          <div id="item-0"></div>
          <div id="item-1">&nbsp;</div>
          <div id="item-2">&nbsp;</div>
          <div id="item-3">&nbsp;</div>
          <div id="item-4">&nbsp;</div>
        </div>

        <WeatherCard/>
      </main>
    </Fragment>
  );
}

export default App;
