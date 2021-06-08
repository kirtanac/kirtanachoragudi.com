import React from "react";
import Recipes from "./Recipes";
import Work from "./Work";
import About from "./About";

// import ImgBg from "../../public/home-background.png";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export default function Section({ title, subtitle, dark, id }) {

  if(id==="about"){
    return (
      <About/>
    );
  }else if(id==="experience"){
    return (
      <Work/>
    );
  }else if(id==="recipes"){
      return (
      <Recipes/>

      );
  }else if(id==="section1"){

  return (
    <div className={"top section" + (dark ? " section-dark" : " section-light")}>
    <Container className="justify-content-md-space-around" id="section1">
    <Row>
    <Col md={12} lg={0}><br/><br/></Col>
    <Col md={12} lg={3} className="introtext">
      <p >Hi, I’m Kirtana. I’m passionate about making the world a better place, and love to use technology and business to do so.</p></Col>

        <Col md={12} lg={9} className="imageholder">

      <Image alt="Kirtana Choragudi and 2 pictures of her" className="backgroundimage" src="./home-background.png" fluid/>
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
