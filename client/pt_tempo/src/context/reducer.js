const Reducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
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

    default:
      return state;
  }
};

export default Reducer;
