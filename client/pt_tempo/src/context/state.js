import React, { useReducer } from "react";
import MainContext from "./context";
import Reducer from "./reducer";
const initialSate = {
  user: null,
  messages: null,
  isFetching: true,
};

export const State = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialSate);

  return (
    <MainContext.Provider
      value={{
        isFetching: state.isFetching,
        dispatch,
        messages: state.messages,
        user: state.user,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
