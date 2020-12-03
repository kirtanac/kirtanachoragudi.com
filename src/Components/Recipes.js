import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Tabs, Tab,  NavDropdown, Form, Button, FormControl } from 'react-bootstrap';

class Recipes extends Component {
  //
  // <Container className="justify-content-md-center" >
  // <h1>Experience</h1>
  // <Row className="align-content-center content">
  //
  // <Col xs={12} md={8}>
  // <p>I'm a student at the University of Michigan pursuing a dual-degree in Business Administration and Computer Science, graduating in May 2021. At U of M, I teach EECS 183 and lead Seven Mile.</p>
  //
  // </Col>
  // <Col xs={6} md={4}><p>Icon</p></Col>
  // </Row>
  // </Container>
  render() {
    return (
      <div className="section section-experience" id="recipes">
        <div className="section-content " >

        <Tabs defaultActiveKey="cookies" id="uncontrolled-tab-example">
  <Tab eventKey="tikka-masala" title="Mom's Tofu Tikka Masala">
    <h1>Mom's Tofu Tikka Masala</h1>
  </Tab>
  <Tab eventKey="cookies" title="Vegan Chocolate Chip Cookies">
    <h1>Vegan Chocolate Chip Cookies</h1>
  </Tab>
  <Tab eventKey="sp-gnocchi" title="Warming Sweet Potato Gnocchi" >
    <h1>Warming Sweet Potato Gnocchi</h1>
  </Tab>
</Tabs>

        </div>
      </div>
    );
  }
}


export default Recipes;
