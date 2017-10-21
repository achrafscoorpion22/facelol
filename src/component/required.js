import React, { Component } from "react";
import { browserHistory } from "react-router";
import * as firebase from "firebase";
export default function requireAuthentication(PassedComponent) {
  class requiredauthcomponent extends Component {
    componentWillMount() {
      if (!firebase.auth().currentUser) {
        browserHistory.push({
          pathname: "/login"
        });
      }
    }

    render() {
      return (
        <div>
          {firebase.auth().currentUser ? (
            <PassedComponent {...this.props} />
          ) : null}
        </div>
      );
    }
  }
  return requiredauthcomponent;
}
