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
import requireAuthentication from "./component/required";
import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBF6Ptm1m37hCrfVp_82fjeS1qLnAEJH9A",
  authDomain: "facelol-9b4ff.firebaseapp.com",
  databaseURL: "https://facelol-9b4ff.firebaseio.com",
  projectId: "facelol-9b4ff",
  storageBucket: "facelol-9b4ff.appspot.com",
  messagingSenderId: "286974022400"
};

firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={requireAuthentication(App)}>
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
