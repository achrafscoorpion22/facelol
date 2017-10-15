import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="profile/:id" component={Profile} />
    </Route>
    <Route />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
