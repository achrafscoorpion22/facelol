import React, { Component } from "react";
import {
  Form,
  Col,
  FormGroup,
  Button,
  Checkbox,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import * as firebase from "firebase";
export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleClick = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({ error: "err" });
      });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.router.push("/");
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.type]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={this.handleClick}>Sign Up</Button>
            </Col>
          </FormGroup>
        </Form>

        {this.state.error && <h1>{this.state.error}</h1>}
      </div>
    );
  }
}
