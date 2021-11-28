import React, { Fragment, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import MainContext from "./context/context";
import Auth from "./pages/auth";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import PrivateRoute from "./protectedRoute";

function App() {
  const context = useContext(MainContext);
  const { user } = context;
  const navegate = useNavigate();

  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PrivateRoute user={user?.data?.id}>
              <Auth />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <PrivateRoute user={user?.data?.id}>
              <Auth />
            </PrivateRoute>
          }
        />

        <Route exact path="*" element={<NotFound />} />

        <Route
          exact
          path="/"
          element={
            <PrivateRoute user={user?.data?.id} logged={true}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
