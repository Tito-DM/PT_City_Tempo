const { validationResult } = require("express-validator");
const User = require("../model/user");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { use } = require("../routes");

const jwtGenerator = (user) => {
  //set jwt playload
  const payload = {
    user: {
      id: user.id,
    },
  };

  return jwt.sign(payload, process.env.JWTSECRETKEY, {
    expiresIn: 360000,
  });
};

const passwordFilter = (user) => {
  return {
    username: user.username,
    id: user.id,
  };
};

const login = async (req, res) => {
  //destructaring params
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "credencias invalido" }] });
    }

    //compare password
    const passwordMatch = await bycrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ erros: [{ msg: "credencias errados" }] });
    }
    //filter user
    const data = passwordFilter(user);
    //get token
    const token = jwtGenerator(user);

    res.status(200).json({ token, data });
  } catch (error) {
    res.status(500).send("server Error");
  }
};

const siginUp = async (req, res) => {
  const erros = validationResult(req);

  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }

  const { username, password } = req.body;

  try {
    //check if user exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ erros: [{ msg: "user already exists" }] });
    }

    user = new User({
      username,
      password,
    });

    // encrypt password
    const salt = await bycrypt.genSalt(10);
    user.password = await bycrypt.hash(password, salt);

    //save to db
    await user.save();
    //filter user
    const data = passwordFilter(user);
    //get token
    const token = jwtGenerator(user);

    res.status(200).json({ token, data });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  login,
  siginUp,
};
