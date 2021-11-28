import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import WeatherCard from "../components/weatherCard";
import Avatar from "react-avatar";
import axios from "axios";

const useStyles = makeStyles({
  center: {
    margin: "5% 16%",
    width: "50%",
    padding: "10px",
  },

  angryGrid: {
    display: "grid",
    margin: "0 auto",
    gridTemplateRows: " 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: " 0px",
    height: "80%",
    color: "white",
  },

  item0: {
    backgroundColor: "rgba(255, 248, 248,.3)",
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 2,
    gridColumnEnd: 2,
    height: "300px",
    width: "400px",
    margin: "10px",
  },
  item1: {
    backgroundColor: "rgba(255, 248, 248,.3)",
    gridRowStart: 1,
    gridColumnStart: 2,
    gridRowEnd: 2,
    gridColumnEnd: 3,
    height: "300px",
    width: "400px",
    margin: "10px",
  },

  item2: {
    backgroundColor: "rgba(255, 248, 248,.3)",
    gridRowStart: 2,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridColumnEnd: 2,
    height: "300px",
    width: "400px",
    margin: "10px",
  },

  item3: {
    backgroundColor: "rgba(255, 248, 248,.3)",
    gridRowStart: 2,
    gridColumnStart: 2,
    gridRowEnd: 3,
    gridColumnEnd: 3,
    height: "300px",
    width: "400px",
    margin: "10px",
  },
  item4: {
    backgroundColor: "rgba(255, 248, 248,.3)",
    gridRowStart: 1,
    gridColumnStart: 3,
    gridRowEnd: 3,
    gridColumnEnd: 4,
    height: "620px",
    width: "400px",
    margin: "10px",
  },
  nav: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    margin: "20px",
  },
  dorpMenu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    async function fetchData() {
      try {
        const res = axios.get("http://localhost:5000/api/v1/weather", {
          headers: {
            "x-auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFhMmU2NzYyNTVmYzQzYzE2Njk1Yzc2In0sImlhdCI6MTYzODA2NTk0NSwiZXhwIjoxNjM4NDI1OTQ1fQ.S2L-aO_z5N-iS_yVsxGMMv3Kl249we3SSqumEYjOynI",
          },
        });
        console.log(res);
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <header>
        <div className={classes.nav}>
          <div>{Date.now()}</div>
          <div className={classes.dorpMenu}>
            <div>peyong</div>
            <div className={classes.avatar}>
              <Avatar name="Wim Mostmans" size="60" round={true} />
            </div>
            <div>drop</div>
          </div>
        </div>
      </header>
      <main className={classes.center}>
        <div className={classes.angryGrid}>
          <div className={classes.item0}>
            <WeatherCard />
          </div>
          <div className={classes.item1}>
            <WeatherCard />
          </div>
          <div className={classes.item2}>
            <WeatherCard />
          </div>
          <div className={classes.item3}>
            <WeatherCard />
          </div>
          <div className={classes.item4}>
            <WeatherCard />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
