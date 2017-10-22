import React, { Component } from "react";
import * as firebase from "firebase";
import PostInput from "../component/Home/PostInput";
import Posts from "../component/Home/Posts";
import LeftMenu from "../component/Home/LeftMenu";
import {
  Row,
  Col,
  FormGroup,
  Button,
  Checkbox,
  ControlLabel,
  FormControl
} from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Row>
        <Col sm={2}>
          <LeftMenu />
        </Col>
        <Col sm={6}>
          <PostInput />
          <Posts />
        </Col>
        <Col sm={2} />
      </Row>
    );
  }
}
