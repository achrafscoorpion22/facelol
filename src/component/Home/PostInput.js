import React, { Component } from "react";
import {
  Form,
  Col,
  FormGroup,
  Button,
  Tabs,
  Tab,
  Well,
  FormControl
} from "react-bootstrap";
import * as firebase from "firebase";
import "firebase/firestore";

export default class PostInput extends Component {
  state = {
    value: "",
    type: "text"
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleAdd = () => {
    firebase
      .firestore()
      .collection("posts")
      .add({
        content: this.state.value,
        likes: 0,
        type: this.state.type,
        userid: firebase.auth().currentUser.uid,
        date: new Date()
      })
      .then(function(docRef) {
        this.setState({ value: "" });
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  handleTab = type => {
    this.setState({ type });
  };
  render() {
    return (
      <Well>
        <Tabs
          defaultActiveKey={"text"}
          id="uncontrolled-tab-example"
          onSelect={this.handleTab}
        >
          <Tab eventKey={"text"} title="Text">
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                componentClass="textarea"
                placeholder="What are you thinking about"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Tab>
          <Tab eventKey={"video"} title="Video">
            <FormGroup>
              <FormControl
                type="textarea"
                value={this.state.value}
                placeholder="Enter video url"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Tab>
          <Tab eventKey={"photo"} title="Photo">
            <FormControl type="file" placeholder="Upload your ugly face" />
          </Tab>
        </Tabs>
        <FormGroup>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Add some tags to your shit"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button bsStyle="primary" type="submit" onClick={this.handleAdd}>
          Add Post
        </Button>
      </Well>
    );
  }
}
