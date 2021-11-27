const router = require("express").Router();
const auth = require("./controller/auth");
const getWeatherData = require("./controller/weatherData");
const middleware = require('./middleware')
const { check } = require("express-validator");


//login
router.post(
  "/",
  check("username", "userName não pode estar vazio").isEmail(),
  check("password", "password is não pode estar vazia").exists(),
  auth.login
);

//sign up
router.post(
  "/signup",
  [
    check("username", "username não pode estar vazio").not().isEmpty(),
    check("password", "Palavra passe tem que no minimo 8 caracteres").isLength({
      min: 8,
    }),
  ],
  auth.siginUp
);

//weather data
router.get("/weather",middleware, getWeatherData);

module.exports = router;
