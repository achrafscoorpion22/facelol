import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

export default class LeftMenu extends Component {
  render() {
    return (
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Tab 1</NavItem>
        <NavItem eventKey="second">Tab 2</NavItem>
      </Nav>
    );
  }
}
