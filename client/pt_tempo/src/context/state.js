import React, { useEffect, useReducer } from "react";
import MainContext from "./context";
import Reducer from "./reducer";
const initialSate = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  messages: null,
  weatherData:[],
  isFetching: true,
};

export const MainState = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialSate);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <MainContext.Provider
      value={{
        isFetching: state.isFetching,
        dispatch,
        messages: state.messages,
        user: state.user,
        weatherData: state.weatherData
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
