import { Navigate } from "react-router-dom";
import { HOME, LOGIN } from "./routes";

function PrivateRoute({ children, user, logged }) {
  if (logged) {
    return user ? children : <Navigate to={LOGIN} />;
  }
  return !user ? children : <Navigate to={logged ? LOGIN : HOME} />;
}

export default PrivateRoute;
