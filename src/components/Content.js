import React from "react";
import mapImg from '../img/map.png';
import Result from "./Result";
import Accordion from "./Accordion"


export function Content() {

  return (
    <section className="main">
      <div className="container">
        <div className="hero">
          <img src={mapImg} alt="map"/>
        </div>
        <Result likelyRefusal>
          <h2 className="section-title">Edge Case</h2>
          <p className="lead">Your project does not meet certain key constraints. We recommend reviewing the project detalis as an application will likely be refused. Arrange a pre-application meeting to discuss this further with a planning officer.</p>
          <h2 className="section-title">Reasons</h2>
          <h3 className="section-subtitle">Land Use</h3>
          <Accordion></Accordion>
        </Result>
      </div>
    </section>
  )
}
