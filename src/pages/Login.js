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
export default class Login extends Component {
  render() {
    return (
      <div>
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
            </Col>
            <Col sm={10}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
