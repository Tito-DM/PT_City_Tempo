import React, { Fragment, useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import WeatherCard from "../components/weatherCard";
import Avatar from "react-avatar";
import axios from "axios";
import MainContext from "../context/context";
import { FaPowerOff } from "react-icons/fa";
import CardSkeleton from "../components/skeleton/CardSkeleton";

const useStyles = makeStyles({});

const Home = () => {
  const classes = useStyles();
  const context = useContext(MainContext);
  const { dispatch, user, weatherData } = context;
  const [isfetching, setIsfetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsfetching(true);
      try {
        const res = axios.get("http://localhost:5000/api/v1/weather", {
          headers: {
            "x-auth-token": user.token,
          },
        });
        //return a promise
        res.then((data) => {
          dispatch({ type: "updateWeatherData", payload: data.data.list });
          setIsfetching(false);
        });
      } catch (error) {}
    }

    fetchData();
    // make a request each 30 min
    let interval = setInterval(fetchData, 1800000);

    //destroy interval on unmount
    return () => clearInterval(interval);
  }, []);

  console.log(weatherData, isfetching);
  return (
    <Fragment>
      <header>
        <div className="nav">
          <div className="dorpMenu">
            <div>{user.data.username.toUpperCase()}</div>
            <div className="avatar">
              <Avatar name={user.data.username} size="60" round={true} />
            </div>
            <div>
              <FaPowerOff size={30} color="#ef5350 " />
            </div>
          </div>
        </div>
      </header>
      <main className="center">
        <div className="angryGrid">
          {isfetching ? (
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
          ) : null}
          {weatherData?.map((data, index) => (
            <div id={`item-${index}`} key={data.id}>
              <WeatherCard
                name={data.name}
                main={data.main}
                tempo={data.weather}
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
