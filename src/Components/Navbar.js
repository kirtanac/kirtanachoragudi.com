import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

export default class MyNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar scrolling="true" bg="light" expand="lg" sticky="top" className="nav" id="navbar">
           <Navbar.Brand className="nav-brand" onClick={this.scrollToTop}>Kirtana Choragudi</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-items mr-auto">
          <Nav.Item className="nav-item">
            <Nav.Link
              className="nav-link"
              target="blank"
              activeClass="active"
              href="https://www.linkedin.com/in/kirtana-choragudi/"

            >
              LinkedIn
            </Nav.Link>
          </Nav.Item>

          </Nav>
           </Navbar.Collapse>
      </Navbar>
    );
  }
}
