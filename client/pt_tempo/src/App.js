import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

function App() {
  return (
  <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path= "/login" element= {<Auth />}/>
        <Route exact path= "/signup" element= {<Auth />}/>  
        <Route exact path= "*" element= {<NotFound />}/> 
      </Routes>
  </Router>);
}

export default App;
