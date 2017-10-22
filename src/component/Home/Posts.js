import React, { Component } from "react";
import Post from "./Post";
import * as firebase from "firebase";
import "firebase/firestore";

export default class Posts extends Component {
  state = {
    posts: []
  };
  componentDidMount = () => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then(querry => {
        querry.forEach(doc => {
          console.log(doc.data());
          this.setState({ posts: this.state.posts.concat(doc.data()) });
        });
      });
  };

  render() {
    if (this.state.posts.length <= 0)
      return <div>There is no posts available</div>;

    return <div>{this.state.posts.map(data => <Post data={data} />)}</div>;
  }
}
