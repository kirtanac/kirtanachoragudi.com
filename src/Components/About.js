import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Tabs, Tab,  NavDropdown, Nav, Form, Button, FormControl, Card, Container, Col, Row } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="section section-about" id="about">
      <div className="section-content" >
          <Container className="justify-content-md-center info-container" >
          <h1>About</h1>
          <Row className="align-content-center justify-content-md-center content text">
          <Col xs={12} md={4}> <img src="./education.svg" alt="education icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>I'm a student at the University of Michigan pursuing a dual-degree in Business Administration and Computer Science, graduating in May 2021. At U of M, I teach EECS 183 and lead Seven Mile.</p>
          </Col>
          </Row>

          <Row className="align-content-center  justify-content-md-center content text">
            <Col xs={12} md={4}><img src="./work.svg" alt="work icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>After graduation, I am excited to be joining the Boston Consulting Group as an Associate. I will be based in BCG's Detroit office.</p>
          </Col>
          </Row>

          <Row className="align-content-center  justify-content-md-center content text">
            <Col xs={12} md={4}><img src="./study.svg" alt="book icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>In my free time, I love to read, work out, listen to or play music, and cook. See some of my favorite recipes below.</p>
          </Col>
          </Row>
          </Container>

  </div>
      </div>
    );
  }
}


export default About;
