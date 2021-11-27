const { validationResult } = require("express-validator");
const User = require("../model/user");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { use } = require("../routes");

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

    // set token payload
    const payload = {
      user: {
        id: user.id,
      },
    };
    //generate jwt
    jwt.sign(
      payload,
      process.env.JWTSECRETKEY,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token, user });
      }
    );
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

    //return jwt
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWTSECRETKEY,
      {
        expiresIn: 360000,
      },
      (err, token) => {
        if (err) throw err;
        //distructuring user info
        const { password, ...data } = user._doc;
        res.status(200).json({ token, data });
      }
    );
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  login,
  siginUp,
};
