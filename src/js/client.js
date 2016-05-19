import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Calender from "./pages/Calender";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";

var app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing}></IndexRoute>
      <Route path="calender" component={Calender}></Route>
    </Route>
  </Router>
, app);
