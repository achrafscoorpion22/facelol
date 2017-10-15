import React, { Component } from "react";
import {
  input,
  Image,
  Navbar,
  NavDropdown,
  MenuItem,
  Nav
} from "react-bootstrap";
import { Link } from "react-router";
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: ""
    };
  }
  render() {
    return (
      <div className="headercss">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Image
                src="https://orig00.deviantart.net/5e7d/f/2012/270/3/d/hired_gun_graves_by_fazie69-d5g2ytj.png"
                className="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <input type="text" className="search" placeholder="Search..." />
            </Nav>
            <Nav pullRight>
              <li className="dropdown">
                <Link to="/">accueil</Link>
              </li>
              <li className="dropdown">
                <Link to="/profile/26512">profile</Link>
              </li>

              <NavDropdown eventKey={3} title="Setting" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
