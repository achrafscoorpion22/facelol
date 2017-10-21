import React, { Component } from "react";
import Header from "./component/header";
import * as firebase from "firebase";
import "./App.css";

class App extends Component {
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
