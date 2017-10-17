import React, { Component } from "react";
import Header from "./component/header";
import * as firebase from "firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    firebase.auth().onAuthStateChanged(user => {
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
