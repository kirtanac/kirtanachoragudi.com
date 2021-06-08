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
          <Col xs={12} md={4}> <img src="./u-m_logo-black.png" alt="University of Michigan icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>I am currently leading a series of pandemic response technologies to re-open businesses safely, track COVID-19 hotspots, and visualize vaccine coverage. Our teams work in collaboration with the University of Michigan School of Public Health and the Michigan Department of Health & Human Service.</p>
          </Col>
          </Row>

          <Row className="align-content-center  justify-content-md-center content text">
            <Col xs={12} md={4}><img src="./BCGlogo.png" alt="work icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>In 2022, I am excited to be joining the Boston Consulting Group as an Associate. I will be based in BCG's Detroit office.</p>
          </Col>
          </Row>

          <Row className="align-content-center  justify-content-md-center content text">
            <Col xs={12} md={4}><img src="./study.svg" alt="book icon" className="icon"></img></Col>
          <Col xs={12} md={8} className="text-left">
          <p>In my free time, I love to read, work out, listen to or play music, and cook. See 2 of my favorite recipes below.</p>
          </Col>
          </Row>
          </Container>

  </div>
      </div>
    );
  }
}


export default About;
