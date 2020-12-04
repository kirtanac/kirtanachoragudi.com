import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import { Tabs, Tab,  NavDropdown, Nav, Form, Button, FormControl, Card, Container, Col, Row } from 'react-bootstrap';

class Work extends Component {
  render() {

    let rows = []
    let images = [];

    let renderData = [{"img": "./MISymptoms.png", "title": "MI Symptoms", "role": "Lead", "year": "2020 - Present", "description": ""},
      {"img": "./183.png", "title": "EECS 183", "role": "Instructional Aide (TA)", "year": "2017 - Present", "description": ""},
      {"img": "./SevenMile.png", "title": "Seven Mile", "role": "President, Development Director", "year": "2016 - 2020", "description": ""},
      {"img": "./BCG.png", "title": "BCG", "role": "Summer Associate", "year": "2019", "description": ""},
      {"img": "./SADD.png", "title": "SADD", "role": "National Student Representative, Board of Directors", "year": "2016 - 2019", "description": ""},
      {"img": "./Microsoft.png", "title": "Microsoft", "role": "Explore Intern", "year": "2018", "description": ""}
      ];


    console.log("renderData: ", renderData);
    for (var i = 0; i < renderData.length; ++i) {
      images.push(  <Col sm={6} md={4} className="panel mb-2">
          <Card className="text-left work-box shadow-sm">
            <Card.Body className="work-box" >
              <Card.Img className="work-box-image" variant="top" src={"./" + renderData[i]["img"]} />
              <Card.Title className="font-weight-normal work-box-title">{renderData[i]["title"]}</Card.Title>
              <Card.Subtitle className="work-box-subtitle mb-2">{renderData[i]["year"]}</Card.Subtitle>
              <Card.Subtitle className="work-box-subtitle"><i>{renderData[i]["role"]}</i></Card.Subtitle>
            <Card.Text className="small work-box-text">
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>);}

        let nextRowCount = 1;
      for (var i = 0; i < renderData.length; ++i) {
        console.log("i: ", i, " and i/3: ", i/3);
        if(((i+1)/3) === nextRowCount){
          rows.push (
            <Row className="panel align-content-center lead">
            {images[i-2]} {images[i-1]} {images[i]}
            </Row>
          );
          nextRowCount++;
          console.log("pushed ", renderData[i-3], renderData[i-2],images[i-1])
        }

    }

    return (
           <div className="section section-work mb-8" id="experience">
              <div className="section-content justify-content-md-center" >
              <Container className="justify-content-md-center work-container text-dark" >
              <h1 className="text-dark mb-4">Work</h1>
              {rows}

              </Container>
              </div>
            </div>
    );
  }
}


export default Work;
