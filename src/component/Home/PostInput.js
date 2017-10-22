import React, { Component } from "react";
import {
  Form,
  Col,
  FormGroup,
  Button,
  Checkbox,
  ControlLabel,
  Thumbnail,
  FormControl
} from "react-bootstrap";
import * as firebase from "firebase";
import "firebase/firestore";

export default class PostInput extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleAdd = () => {
    firebase
      .firestore()
      .collection("posts")
      .add({
        statu: this.state.value,
        nbrlike: 0,
        user: firebase.auth().currentUser.uid,
        date: new Date()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div>
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
        <Button bsStyle="link" onClick={this.handleAdd}>
          Add
        </Button>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
          <h3>achraf</h3>
          <p>statu</p>
          <p>
            <Button bsStyle="primary">55 likes</Button>&nbsp;
          </p>
        </Thumbnail>
      </div>
    );
  }
}
