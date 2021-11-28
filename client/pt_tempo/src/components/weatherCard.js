import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import "./weatherCard.css";

const WeatherCard = () => {
  return (
    <div className="weatherCard">
      <div className="top">
        <div className="iconText-section">
          <div className="weatherCard-icon">
            <BsFillCloudSunFill size={100} color="white" />
          </div>
          <div className="weatherDescription">Clear Sky</div>
        </div>

        <div className="cityTemp-section">
          <div className="cityName">Porto</div>
          <span className="weatherDescription">20º</span>
        </div>
      </div>

      <div className="bottom">
        <span className="weatherDescription">Humidade</span>
      </div>
    </div>
  );
};

export default WeatherCard;
