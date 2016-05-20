import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Calendar from "./pages/Calendar";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path="calendar" component={Calendar}></Route>
    </Route>
  </Router>
, app);
