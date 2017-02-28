import React from "react";
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  IndexRedirect,
  Redirect,
  hashHistory
} from "react-router";
import App from "./components/App";
import CompareRatio from "./components/CompareRatio";
import "./index.css";

import "octicons/build/font/octicons.css";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="tiles" />
      <Route path=":view" component={CompareRatio} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>,
  document.getElementById("root")
);
