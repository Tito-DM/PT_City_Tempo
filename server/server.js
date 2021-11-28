const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./db");
const routers = require("./routes")
const cors = require("cors")
//config enviromental variables
dotenv.config();
//Port config
const PORT = process.env.PORT || 4000;
//init express



const app = express();
//init DB
dbConnection();

app.use(cors());
//init bodyParser
app.use(express.json({extended:false}))

//use routes
app.use("/api/v1",routers)

//init server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
