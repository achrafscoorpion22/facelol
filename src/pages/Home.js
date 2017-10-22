import React, { Component } from "react";
import * as firebase from "firebase";
import PostInput from "../component/Home/PostInput";

export default class Home extends Component {
  state={
      chedli:""
  }
  componentWillMount = () => {
    firebase
      .firestore()
      .collection("posts")
      .get()
      .then(querry => {
        querry.forEach(doc => {
          if(doc.data().user==="8QT69sh719OfkUdhfPERXad0SZg1"){this.setState({chedli:doc.data().statu})
                                                  {this.state.chedli}        }
        });
      });




  };

  render() {
    return (
      <div>
        <PostInput />
        
      </div>
    );
  }
}
