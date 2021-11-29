import axios from "axios";
import React, { useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import MainContext from "../../context/context";
import Loader from "react-loader-spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { AUTH } from "../../context/types";
import { HOME, LOGIN, SIGNUP } from "../../routes";
import "./auth.css";

const Auth = () => {
  const location = useLocation();
  let navegate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msgActivator, setMsgActivator] = useState(false);
  const context = useContext(MainContext);
  const { dispatch, messages } = context;

  const [AuthState, setAuthState] = useState({
    username: "",
    password: "",
    password_confirmation: "",
  });

  //handle loader and msg display
  const cancelMessage = () => {
    setLoading(false);
    setTimeout(() => {
      setMsgActivator(false);
    }, 6000);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}${location.pathname}`,
        AuthState,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      if (res.data.sucess) {
        dispatch({ type: AUTH, payload: res.data });
        setLoading(false);
        //redirect to home page
        navegate(HOME);
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        const { msg } = error?.response?.data?.errors[0];
        dispatch({ type: "message", payload: msg });
        setMsgActivator(true);
        cancelMessage();
      }
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
  const handlePasswordIconToggle = () => {
    if (showPassord) {
      return (
        <BsFillEyeSlashFill
          className="passwordView"
          size={20}
          onClick={handleShowPassword}
        />
      );
    }

    return (
      <IoEyeSharp
        className="passwordView"
        size={20}
        onClick={handleShowPassword}
      />
    );
  };

  return (
    <div className="authMainContainer">
      <div className="titleContainer">
        <h1 className="title">O TEMPO AGORA </h1>
      </div>
      <div className="msgAlertContainer">
        <div>
          {loading ? (
            <Loader type="Oval" color="red" height={50} width={50} />
          ) : null}
        </div>
        <div className="msgAlert">
          {msgActivator ? <Alert severity="warning">{messages}</Alert> : null}
        </div>
      </div>

      <div className="center">
        <form onSubmit={HandleSubmit}>
          <div>
            <div className="inputLabel">
              <label className="inputLabel">Nome do Usuario</label>
            </div>
            <div className="inputfield">
              <input
                type="text"
                required
                name="username"
                value={AuthState.username}
                onChange={hanleInput}
                className="inputStyele"
              />
            </div>
          </div>

          <div className="passwordContainer">
            <div>
              <label className="inputLabel">Palavra-Passe</label>
            </div>
            <div className="inputfield">
              <input
                type={showPassord ? "text" : "password"}
                minLength="8"
                required
                name="password"
                value={AuthState.password}
                onChange={hanleInput}
                className="inputStyele"
              />
            </div>
            {location.pathname !== LOGIN ? handlePasswordIconToggle() : null}
          </div>
          {location.pathname !== LOGIN ? (
            <div>
              <div>
                <label className="inputLabel">
                  {" "}
                  confirmação da Palavra-Passe
                </label>
              </div>
              <div className="inputfield">
                <input
                  type="password"
                  minLength="8"
                  required
                  name="password_confirmation"
                  value={AuthState.password_confirmation}
                  onChange={hanleInput}
                  className="inputStyele"
                />
              </div>
            </div>
          ) : null}
          <input type="submit" value="entrar" className="subButtom" />
          <Link
            to={location.pathname === LOGIN ? SIGNUP : LOGIN}
            className="signLogLink"
          >
            {location.pathname === LOGIN
              ? "Cria uma Conta"
              : "Login se Ja Estas Registado"}
          </Link>
        </form>
      </div>

      <div className="weather">
        <div className="weatheIcons">
          <div>
            <BsFillCloudSunFill size={60} color="#0288d1" />
          </div>
          <div>
            <BsFillSunFill size={60} color="#f57f17" />
          </div>
          <div>
            <BsFillCloudLightningRainFill size={60} color="#757575" />
          </div>
          <div>
            <BsSnow size={60} color="#4fc3f7 " />
          </div>
          <div>
            <BsWind size={60} color="#757575" />
          </div>
          <div>
            <BsCloudsFill size={60} color="#757575" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
