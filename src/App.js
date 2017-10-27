import React, { Component } from "react";
import Header from "./component/header";
import * as firebase from "firebase";
import "./App.css";
import FriendChat from "./component/friendchat/";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FriendChat />
        <div className="children">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
