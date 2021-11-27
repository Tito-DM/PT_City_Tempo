import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Auth from "./pages/auth";
import Home from "./pages/home";
import NotFound from "./pages/notfound";

function App() {
  return (
  <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path= "/login" component= {Auth}/>
        <Route exact path= "/sign" component= {Auth}/>  
        <Route exact path= "/notfound" component= {NotFound}/> 
      </Switch>
  </Router>);
}

export default App;
