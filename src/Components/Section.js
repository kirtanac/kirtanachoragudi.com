import React from "react";
import {  Element } from 'react-scroll';


export default function Section({ title, subtitle, dark, id }) {
  return (
    <React.Fragment key={id}>
    <div className={"section" + (dark ? " section-dark" : "")}>
      <Element className="section-content" id={id} name={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Element>
      </div>
    </React.Fragment>
  );
}
