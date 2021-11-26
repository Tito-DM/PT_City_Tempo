const moongose = require("mongoose");
const dotenv = require("dotenv");

//config enviromental variables
dotenv.config();
//Port config

const dbConnection = async () => {
  try {
    await moongose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = dbConnection;
