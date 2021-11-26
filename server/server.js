const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./db");

//config enviromental variables
dotenv.config();
//Port config
const PORT = process.env.PORT || 4000;



//init express
const app = express();

//init DB
dbConnection();

//init server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
