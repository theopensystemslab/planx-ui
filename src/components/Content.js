import React from "react";
import mapImg from '../img/map.png';
import Result from "./Result";
import Accordion from "./Accordion"
import styled from 'styled-components';


const ShowButton = styled.button`
  display: block;
  width: 100%;
  font-family: inherit;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1.5rem;
  border: 0;
  background-color: transparent;
  font-weight: bold;
  opacity: 0.5;
  color: #242424;
  line-height: 1.5;
`;

export function Content() {

  return (
    <section className="main">
      <div className="container">
        <main className="card">
          <div className="hero">
            <img src={mapImg} alt="map"/>
          </div>
          <Result likelyRefusal>
            <h2 className="section-title">Edge Case</h2>
            <p className="lead">Your project does not meet certain key constraints. We recommend reviewing the project detalis as an application will likely be refused. Arrange a pre-application meeting to discuss this further with a planning officer.</p>
            <h2 className="section-title">Reasons</h2>
            <h3 className="section-subtitle">Land Use</h3>
            <Accordion></Accordion>
            <ShowButton>Show All</ShowButton>
          </Result>
        </main>
      </div>
    </section>
  )
}
