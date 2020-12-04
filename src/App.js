import React, { Component } from "react";
import logo from "./logo.svg";
import './custom.scss';
import MyNavbar from "./Components/Navbar";
import Section from "./Components/Section";
class App extends Component {
  render() {
  const dummyText = `dummytext`;
    return (
      <div className="App">
        <MyNavbar />
        <Section
          title="Section 1"
    
          dark={false}
          id="section1"
        />
        <Section
          title="about"
          dark={true}
          id="education"
        />
        <Section
          title="experience"
          dark={false}
          id="experience"
        />
        <Section
          title="recipes"
          dark={false}
          id="recipes"
        />

      </div>
    );
  }
}

export default App;
