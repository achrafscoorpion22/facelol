import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./component/header.js";
import { Button } from "react-bootstrap";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    window.firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.props.router.push("/login");
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
