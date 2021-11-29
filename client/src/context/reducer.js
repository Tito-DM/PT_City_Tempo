import { AUTH, LOGOUT, MESSAGE, UPDATEWEATHERDATA } from "./types";

const Reducer = (state, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        user: action.payload,
      };
    case MESSAGE:
      return {
        ...state,
        messages: action.payload,
      };

    case UPDATEWEATHERDATA:
      return {
        ...state,
        weatherData: action.payload,
      };

    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default Reducer;
