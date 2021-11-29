const { default: axios } = require("axios");
const express = require("express");
const NodeCaache = require("node-cache");
const request = require("request");

const myCache = new NodeCaache({ stdTTL: 1800 }); //store in cache for 30 miin

const getWeatherData = async (req, res) => {
 
  if (myCache.has("weatherData")) {
    return res.status(200).json(
      myCache.get("weatherData"),
    );
  }

  request(
    process.env.OPENWEATHER_API_URL,
    { json: true },
    (err, ress, body) => {
      if (err) {
        return res.status(400).json("error");
      }
      //cach the data
      myCache.set("weatherData", body);
      return res.status(200).json(body);
    }
  );

  //const resp = await axios.get("https://dog.ceo/api/breeds/list/all")
  //return res.status(200).json( resp);
  //cach the data
  // myCache.set("weatherData", resp);
};

module.exports = getWeatherData;
