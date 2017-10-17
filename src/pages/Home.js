import React, { Component } from "react";
import * as firebase from "firebase";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: firebase.auth().currentUser
    };
  }
  userconnected = () => {
    if (!this.state.user) {
      this.props.router.push("/login");
    }
  };

  render() {
    return (
      <div>
        home
        {this.userconnected()}
      </div>
    );
  }
}
