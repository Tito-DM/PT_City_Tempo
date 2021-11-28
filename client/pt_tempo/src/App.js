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

function App() {
  const context = useContext(MainContext);
  const { user } = context;
  const navegate = useNavigate();

  return (
    <Fragment>
      <Routes>
        {user?.data?.id && user?.token ? (
          <Route exact path="/" element={<Home />} />
        ) : (
          <Fragment>
            <Route exact path="/login" element={<Auth />} />
            <Route exact path="/signup" element={<Auth />} />
          </Fragment>
        )}

        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
