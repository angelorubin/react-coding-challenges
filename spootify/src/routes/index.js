import React from "react";
import Discover from "./Discover";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Routes() {
  // Here you'd return an array of routes
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Discover />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
