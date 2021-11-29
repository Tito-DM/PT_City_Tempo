const Reducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        user: action.payload,
      };
    case "message":
      return {
        ...state,
        messages: action.payload,
      };

    case "updateWeatherData":
      return {
        ...state,
        weatherData: action.payload,
      };

    case "logout":
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
