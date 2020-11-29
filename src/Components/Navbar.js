import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Nav, Navbar } from 'react-bootstrap';

export default class MyNavbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (

      <Navbar bg="light" sticky="top" className="navbar" expand="lg">
  <Navbar.Brand className="nav-brand" onClick={this.scrollToTop}>Kirtana Choragudi</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto nav-items">
  <li className="nav-item">
       <Link
           href="#section2"
           to="section2"
           activeClass="active"
           className="nav-link"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
           >
            section2
           </Link>
    </li>

    <li className="nav-item">
             <Link
                 href="#section3"
                 to="section3"
                 activeClass="active"
                 className="nav-link"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                 >
                  section3
                 </Link>
          </li>


    <Nav.Link
    className="nav-link nav-item"
    activeClass="active"
    to="section4"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500} >Section4</Nav.Link>

</Nav>


  </Navbar.Collapse>
  </Navbar>

    );
  }
}
