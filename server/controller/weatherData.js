const { default: axios } = require("axios");
const express = require("express");
const NodeCaache = require("node-cache");
const request = require("request");

const myCache = new NodeCaache({ stdTTL: 10 });

const getWeatherData = async (req, res) => {
  if (myCache.has("weatherData")) {
    const cachedData = myCache.get("weatherData");
    return res.status(200).json({
      cachedData,
    });
  }

  request(
    "https://api.openweathermap.org/data/2.5/group?id=2267056,2267094,2740636,2735941,2268337&appid=763dba8fd4147a5d98cd2eef4b89eb34",
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
