import React, { Fragment, useContext } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import MainContext from "./context/context";
import Auth from "./pages/auth/auth";
import Home from "./pages/home/home";
import NotFound from "./pages/notfound/notfound";
import PrivateRoute from "./protectedRoute";
import { HOME, LOGIN, SIGNUP } from "./routes";

function App() {
  const context = useContext(MainContext);
  const { user } = context;


  return (
    <Fragment>
      <Routes>
        <Route
          exact
          path= {LOGIN}
          element={
            <PrivateRoute user={user?.data?.id}>
              <Auth />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={SIGNUP}
          element={
            <PrivateRoute user={user?.data?.id}>
              <Auth />
            </PrivateRoute>
          }
        />

        <Route exact path="*" element={<NotFound />} />

        <Route
          exact
          path={HOME}
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
