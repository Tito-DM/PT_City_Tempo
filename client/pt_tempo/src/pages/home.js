import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/styles";
import WeatherCard from "../components/weatherCard";

const useStyles = makeStyles({
  center: {
    margin: "10% 16%",
    width: "50%",
    padding: "10px",
  },

  angryGrid: {
    display: "grid",
    margin: "0 auto",
    gridTemplateRows:" 1fr 1fr 1fr",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap:" 0px",
    height: "80%",
  
    
  },
  
  item0: {
    backgroundColor:"rgba(255, 248, 248,.2)",
    gridRowStart: 1,
    gridColumnStart: 1,
    gridRowEnd: 2,
    gridColumnEnd: 2,
    height: "300px",
    width: "400px",
    margin: "10px"
  },
  item1: {
    backgroundColor: "#98A9B5",
    gridRowStart: 1,
    gridColumnStart: 2,
    gridRowEnd: 2,
    gridColumnEnd: 3,
    height: "300px",
    width: "400px",
    margin: "10px",
  },

  item2: {
    backgroundColor: "#E5C899",
    gridRowStart: 2,
    gridColumnStart: 1,
    gridRowEnd: 3,
    gridColumnEnd: 2,
    height: "300px",
    width: "400px",
    margin: "10px",   
  },

  item3: {
  
    backgroundColor: "#FBE56B",
    gridRowStart: 2,
    gridColumnStart: 2,
    gridRowEnd: 3,
    gridColumnEnd: 3,
    height: "300px",
    width: "400px",
    margin: "10px",
    
  },
  item4: {
  
    backgroundColor: "#FE75DC",
    gridRowStart: 1,
    gridColumnStart: 3,
    gridRowEnd: 3,
    gridColumnEnd: 4,
    height: "620px",
    width: "400px",
    margin: "10px",
    
  }
  
});

const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
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
