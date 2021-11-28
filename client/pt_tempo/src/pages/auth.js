import axios from "axios";
import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { IoEyeSharp } from "react-icons/io5";

import {
  BsFillSunFill,
  BsFillCloudLightningRainFill,
  BsSnow,
  BsWind,
  BsFillCloudSunFill,
  BsCloudsFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";

//styles

const useStyles = makeStyles({
  center: {
    margin: "7% 30%",
    width: "50%",
    padding: "10px",
  },
  inputStyele: {
    width: "80%",
    margin: "10px 0px ",
    borderRadius: "5px",
    border: "none",
    height: "35px",
  },

  inputLabel: {
    color: "white",
  },

  subButtom: {
    width: "85px",
    height: "40px",
    background: "#00897b",
    color: "white",
    borderRadius: "5px",
    border: "none",
  },
  passwordContainer: {
    position: "relative",
  },
  passwordView: {
    position: "absolute",
    top: "45%",
    right: "22%",
  },

  weather: {
    clipPath: "polygon(0 41%, 69% 1%, 100% 50%, 100% 100%, 25% 100%, 0 100%)",
    backgroundColor: "white",
    height: "365px",
    width: "100%",
    position: "relative",
  },
  titleContainer: {
    color: "white",
    textAlign: "center",
    width: "100%",
    marginTop: "50px",
  },
  title: {
    letterSpacing: "1.5",
    fontSize: "50px",
  },
  weatheIcons: {
    color: "black",
    width: "90%",
    position: "absolute",
    top: "50%",
    left: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const Auth = () => {
  const classes = useStyles();
  const location = useLocation();

  const [AuthState, setAuthState] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/signup", Auth, {
        headers: {
          "content-type": "application/json",
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const [showPassord, setShowPassWord] = useState(false);

  const handleShowPassword = () => {
    setShowPassWord(showPassord ? false : true);
  };

  const hanleInput = (e) => {
    setAuthState({ ...AuthState, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>O TEMPO AGORA </h1>
      </div>
      <div className={classes.center}>
        <form onSubmit={HandleSubmit}>
          <div>
            <div className={classes.inputLabel}>
              <label className={classes.inputLabel}>Nome do Usuario</label>
            </div>
            <div>
              <input
                type="text"
                required
                name="username"
                value={AuthState.username}
                onChange={hanleInput}
                className={classes.inputStyele}
              />
            </div>
          </div>

          <div className={classes.passwordContainer}>
            <div>
              <label className={classes.inputLabel}>Palavra-Passe</label>
            </div>
            <div>
              <input
                type={showPassord ? "text" : "password"}
                minLength="8"
                required
                name="password"
                value={AuthState.password}
                onChange={hanleInput}
                className={classes.inputStyele}
              />
            </div>
            {location.pathname !== "/login" ? (
              showPassord ? (
                <BsFillEyeSlashFill
                  className={classes.passwordView}
                  size={20}
                  onClick={handleShowPassword}
                />
              ) : (
                <IoEyeSharp
                  className={classes.passwordView}
                  size={20}
                  onClick={handleShowPassword}
                />
              )
            ) : null}
          </div>
          {location.pathname !== "/login" ? (
            <div>
              <div>
                <label className={classes.inputLabel}>
                  {" "}
                  confirmação da Palavra-Passe
                </label>
              </div>
              <div>
                <input
                  type="password"
                  minLength="8"
                  required
                  name="password_confirmation"
                  value={AuthState.password_confirmation}
                  onChange={hanleInput}
                  className={classes.inputStyele}
                />
              </div>
            </div>
          ) : null}
          <input type="submit" className={classes.subButtom} />
        </form>
      </div>

      <div className={classes.weather}>
        <div className={classes.weatheIcons}>
          <div>
            <BsFillCloudSunFill size={100} color="#0288d1" />
          </div>
          <div>
            <BsFillSunFill size={100} color="#f57f17" />
          </div>
          <div>
            <BsFillCloudLightningRainFill size={100} color="#757575" />
          </div>
          <div>
            <BsSnow size={100} color="#4fc3f7 " />
          </div>
          <div>
            <BsWind size={100} color="#757575" />
          </div>
          <div>
            <BsCloudsFill size={100} color="#757575" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
