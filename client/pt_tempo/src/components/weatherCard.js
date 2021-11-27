import React from "react";
import { BsFillCloudSunFill } from "react-icons/bs";
import "./weatherCard.css";

const WeatherCard = () => {
  return (
    <div className="weatherCard">
      <div className="top">
        <div className="iconText-section">
          <div className="weatherCard-icon">
            <BsFillCloudSunFill size={100} color="black" />
          </div>
          <span className="weatherDescription">text</span>
        </div>

        <div className="cityTemp-section">
          <div>City</div>
          <span>Temp</span>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default WeatherCard;
