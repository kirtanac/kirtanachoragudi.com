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
      <Navbar bg="light" expand="lg" sticky="top" className="nav" id="navbar">
           <Navbar.Brand className="nav-brand" href="#home" onClick={this.scrollToTop}>Kirtana Choragudi</Navbar.Brand>
           <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="div" className="nav-items mr-auto">
            <Nav.Item className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 4
              </Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 5
              </Link>
            </Nav.Item>
          </Nav>
           </Navbar.Collapse>
      </Navbar>
    );
  }
}
