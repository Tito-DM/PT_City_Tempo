import React from "react";
import "./weatherCard.css";

const WeatherCard = ({ name, main, tempo, wind,largeCard }) => {
  //destructure main object
  const { temp, temp_min, temp_max, humidity, pressure } = main;
  const { speed } = wind;

  //convert kelvin to celcius
  const tempCelsius = Math.floor(temp - 273.15);
  const tempMinCelsius = Math.floor(temp_min - 273.15);
  const tempMaxCelsius = Math.floor(temp_max - 273.15);

  return (
    <div className="weatherCard">
      <div className={largeCard ? "topLargeCard": "top"}>
        <div className="iconText-section">
          <div className="weatherCard-icon">
            <img
              src={`https://openweathermap.org/img/wn/${tempo[0].icon}@2x.png`}
              alt="icon"
              width={largeCard ? "200px" :"100px"}
              height= {largeCard ? "200px" :"100px"}
            />
          </div>
          <div className={largeCard ? "weatherDescriptionLargeCard":"weatherDescription"}>{tempo[0].description}</div>
        </div>

        <div className="cityTemp-section">
          <div className={largeCard ? "cityNameLargeCard" :"cityName"}>{name}</div>
          <span className={largeCard ? "weatherDescriptionLargeCard":"weatherDescription"}>{`${tempCelsius}º`}</span>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-content">
          <div>Temperatura minima</div>
          <div>{`${tempMinCelsius}º`}</div>
        </div>
        <div className={largeCard ? "dividerLargeCard" : "divider"}></div>
        <div className="bottom-content">
          <div>Temperatura max</div>
          <div>{`${tempMaxCelsius}º`}</div>
        </div>
        <div className={largeCard ? "dividerLargeCard" : "divider"}></div>
        <div className="bottom-content">
          <div>Humidade</div>
          <div>{`${humidity}%`}</div>
        </div>
        <div className={largeCard ? "dividerLargeCard" : "divider"}></div>
        <div className="bottom-content">
          <div>Vento</div>
          <div>{`${speed}km/h`}</div>
        </div>
        <div className={largeCard ? "dividerLargeCard" : "divider"}></div>
        <div className="bottom-content">
          <div>Pressão</div>
          <div>{`${pressure}mb`}</div>
        </div>
        <div className={largeCard ? "dividerLargeCard" : "divider"}></div>
      </div>
    </div>
  );
};

export default WeatherCard;
