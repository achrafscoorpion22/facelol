import React, { Component } from "react";
import * as firebase from "firebase";
import PostInput from "../component/Home/PostInput";

export default class Home extends Component {
  componentWillMount = () => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then(querry => {
        querry.forEach(doc => {
          console.log(doc.data().user);
        });
      });
  };

  render() {
    return (
      <div>
        <PostInput />
        achraf
      </div>
    );
  }
}
