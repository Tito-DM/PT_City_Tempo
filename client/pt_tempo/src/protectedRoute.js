import { Navigate } from "react-router-dom";

function PrivateRoute({ children, user,logged }) {
    if (logged) {
        return user ? children : <Navigate to="/login" />}
    return !user ?children: <Navigate to={logged ? "/login": "/"} />;
}

export default PrivateRoute;
