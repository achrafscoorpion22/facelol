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
import { Link } from "react-router";
import * as firebase from "firebase";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorCode: "",
      errorMessage: "",
      email: "",
      password: "",
      user: ""
    };
  }
  handleClick = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ user: firebase.auth().currentUser });
        console.log(this.state.user);
        this.props.router.push("/");
      })
      .catch(error => {
        // Handle Errors here.
        this.setState({ errorCode: error.code });
        this.setState({ errorMessage: error.message });
        // ...
        console.log("no no no ");
      });
  };
  handleChange = event => {
    this.setState({
      [event.target.type]: event.target.value
    });
  };

  render() {
    return (
      <div className="body2">
        <div className="form-1">
          <br />
          <br />
          <h1 className="form-2"> Sign in </h1>
          <br />
          <br />
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={12}>Email</Col>
              <Col sm={12}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <br />

            <FormGroup controlId="formHorizontalPassword ">
              <Col sm={12}>Password</Col>

              <Col sm={12}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <br />

            <FormGroup>
              <Col sm={12}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <br />
            <br />
            <FormGroup>
              <Col sm={12}>
                <Button className="form-5" onClick={this.handleClick}>
                  {" "}
                  Sign in
                </Button>
              </Col>
              <Col sm={12}>
                <Link to="/SignUp">
                  <Button className="form-5">Sign up</Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
