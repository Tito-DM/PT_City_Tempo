import React, { Fragment, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import WeatherCard from "../../components/weatherCard/weatherCard";
import Avatar from "react-avatar";
import axios from "axios";
import MainContext from "../../context/context";
import { FaPowerOff } from "react-icons/fa";
import CardSkeleton from "../../components/CardSkeleton";
import { LOGOUT, UPDATEWEATHERDATA } from "../../context/types";
import { LOGIN, WEATHERDATA } from "../../routes";
import "./home.css"

const Home = () => {
  const context = useContext(MainContext);
  const { dispatch, user, weatherData } = context;
  const [isfetching, setIsfetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsfetching(true);
      try {
         //get the url of the server from .env file and path routes file routes-->WEATHERDATA
        const res = axios.get(`${process.env.REACT_APP_API_URL}${WEATHERDATA}`, {
          headers: {
            "x-auth-token": user.token,
          },
        });
        //return a promise
        res.then((data) => {
          dispatch({ type: UPDATEWEATHERDATA, payload: data.data.list });
          setIsfetching(false);
        });
      } catch (error) {}
    }

    fetchData();
    // make a request each 30 min
    //1800000ms = 30min
    let interval = setInterval(fetchData, 1800000);

    //destroy interval on unmount
    return () => clearInterval(interval);
  }, [dispatch,user.token]);

  const hendleLogout = () => {
    dispatch({ type: LOGOUT });

    <Navigate to={LOGIN} />;
  };
  //handle skeleton display
  const handleSkeletonDisplay = () => {
    return (
      <Fragment>
        <div id="item-0">
          <CardSkeleton />
        </div>
        <div id="item-1">
          <CardSkeleton />
        </div>
        <div id="item-2">
          <CardSkeleton />
        </div>
        <div id="item-3">
          <CardSkeleton />
        </div>
        <div id="item-4">
          <CardSkeleton />
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <header>
        <div className="nav">
          <div className="logoutBtnContainer">
            <div>{user.data.username.toUpperCase()}</div>
            <div className="avatar">
              <Avatar name={user.data.username} size="60" round={true} />
            </div>
            <div className="logoutButton" onClick={hendleLogout}>
              <FaPowerOff size={30} color="#ef5350 "  />
              <span className="logutText">logout</span>
            </div>
          </div>
        </div>
      </header>
      <main className="center">
        <div className="angryGrid">
          {isfetching
            ? handleSkeletonDisplay()
            : weatherData?.map((data, index) => (
                <div id={`item-${index}`} key={data.id}>
                  <WeatherCard
                    name={data.name}
                    weatherInfo={data.main}
                    weatherCondition={data.weather}
                    wind={data.wind}
                    largeCard={index === 4 ? true : false} //true for large card and false for medium card
                  />
                </div>
              ))}
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
