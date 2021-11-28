import React, { Fragment, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import WeatherCard from "../components/weatherCard";
import Avatar from "react-avatar";
import axios from "axios";
import MainContext from "../context/context";

const useStyles = makeStyles({
 
});

const Home = () => {
  const classes = useStyles();
  const context = useContext(MainContext);
  const { dispatch, user, messages,weatherData } = context;

  useEffect(() => {
    async function fetchData() {
      try {
        const res = axios.get("http://localhost:5000/api/v1/weather", {
          headers: {
            "x-auth-token": user.token,
          },
        });
        //return a promise
        res.then(data=>{
          dispatch({type: "updateWeatherData", payload: data.data.list})
        })
      
      } catch (error) {}
    }

    fetchData();
  }, []);

console.log(weatherData)
  return (
    <Fragment>
      <header>
        <div className="nav">
          <div>{Date.now()}</div>
          <div className="dorpMenu">
            <div>{user.data.username}</div>
            <div className="avatar">
              <Avatar name={user.data.username} size="60" round={true} />
            </div>
            <div>drop</div>
          </div>
        </div>
      </header>
      <main className="center">
        <div className="angryGrid">
    {weatherData.map((data,index)=>(
       <div id={`item-${index}`} key={data.id}>
       <WeatherCard name={data.name} main={data.main} tempo={data.weather}  wind={data.wind}/>
     </div>
    ))}
         
         
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
