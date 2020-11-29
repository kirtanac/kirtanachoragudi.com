import logo from './logo.svg';
import './custom.scss';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { Nav, Navbar, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import MyNavbar from './Components/Navbar.js'
import Section from './Components/Section.js'
import {  Element } from 'react-scroll';

function App() {
  const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Sed lectus vestibulum mattis ullamcorper velit sed. Nec nam aliquam sem et tortor. Elit eget gravida cum sociis natoque. Ipsum a arcu cursus vitae. Massa sapien faucibus et molestie ac feugiat sed. Turpis egestas maecenas pharetra convallis posuere morbi leo. Duis at consectetur lorem donec massa sapien faucibus et molestie. Purus sit amet luctus venenatis lectus. Pellentesque nec nam aliquam sem et tortor consequat id porta. Sapien et ligula ullamcorper malesuada. Fringilla ut morbi tincidunt augue interdum velit euismod. Vitae turpis massa sed elementum tempus egestas sed. Netus et malesuada fames ac turpis egestas integer eget aliquet. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
Nisi est sit amet facilisis. Vitae congue eu consequat ac felis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Nisl condimentum id venenatis a condimentum. Rutrum tellus pellentesque eu tincidunt tortor. Semper auctor neque vitae tempus quam. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Enim lobortis scelerisque fermentum dui faucibus. Volutpat ac tincidunt vitae semper quis lectus nulla at.
Pellentesque id nibh tortor id aliquet lectus proin. Blandit cursus risus at ultrices mi. Iaculis eu non diam phasellus vestibulum lorem. Et odio pellentesque diam volutpat commodo. Sodales ut etiam sit amet nisl purus in. Adipiscing elit ut aliquam purus sit. Bibendum enim facilisis gravida neque convallis a cras. Duis at consectetur lorem donec massa sapien faucibus et molestie. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Non odio euismod lacinia at quis risus sed vulputate odio. Vel turpis nunc eget lorem dolor sed viverra ipsum. A lacus vestibulum sed arcu.
`;

  return (
    <div className="App">
    <MyNavbar />
           <Section
             title="Section 1"
             subtitle={dummyText}
             dark={true}
             id="section1"
           />
           <Section
             title="Section 2"
             subtitle={dummyText}
             dark={false}
             id="#section2"
           />
           <Section
             title="Section 3"
             subtitle={dummyText}
             dark={true}
             id="#section3"
           />
           <Section
             title="Section 4"
             subtitle={dummyText}
             dark={false}
             id="#section4"
           />
           <Section
             title="Section 5"
             subtitle={dummyText}
             dark={true}
             id="section5"
           />
           <Section
             title="Section 6"
             subtitle={dummyText}
             dark={false}
             id="#section6"
           />
    </div>
  );
}

export default App;
