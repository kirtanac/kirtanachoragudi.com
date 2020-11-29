import React from "react";
// import ImgBg from "../../public/home-background.png";
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Section({ title, subtitle, dark, id }) {

  if(title==="education"){
    return (
      <div className="section section-education" id={id}>
      <div className="section-content" >


          <Container className="justify-content-md-center" >
          <h1>Education</h1>
          <Row className="align-content-center content">
          <Col xs={6} md={4}><p>Icon</p></Col>
          <Col xs={12} md={8}>
          <p>I'm a student at the University of Michigan pursuing a dual-degree in Business Administration and Computer Science, graduating in May 2021. At U of M, I teach EECS 183 and lead Seven Mile.</p>

          </Col>
          </Row>
          </Container>

  </div>
      </div>
    );
  }else if(title==="experience"){
    return (
      <div className="section section-experience" id={id}>
        <div className="section-content " >
        <Container className="justify-content-md-center" >
        <h1>Experience</h1>
        <Row className="align-content-center content">

        <Col xs={12} md={8}>
        <p>I'm a student at the University of Michigan pursuing a dual-degree in Business Administration and Computer Science, graduating in May 2021. At U of M, I teach EECS 183 and lead Seven Mile.</p>

        </Col>
        <Col xs={6} md={4}><p>Icon</p></Col>
        </Row>
        </Container>
        </div>
      </div>
    );
  }else if(id==="section1"){

  return (
    <div className={"top section" + (dark ? " section-dark" : " section-light")}>
    <Container className="justify-content-md-center" id="section1">
    <Row>
    <Col md={12} lg={0}><br/><br/></Col>
    <Col md={12} lg={3} className="introtext">
      <p>Hi, I’m Kirtana. I’m passionate about making the world a better place, and love to use technology and business to do so.</p></Col>

        <Col md={12} lg={9} className="imageholder">

      <Image className="backgroundimage" src="./home-background.png" fluid/>
      </Col>

    </Row>

          </Container>
      </div>

  );
}else{

  return (
    <div className={"section" + (dark ? " section-dark" : " section-light")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
}
