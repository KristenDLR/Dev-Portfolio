import React from "react";
import { useState } from "react";
import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackwardStep, faForwardStep } from '@fortawesome/free-solid-svg-icons'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function FlipCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleClick() {
    if (card.variant === "click") {
      setShowBack(!showBack);
    }
  }

  return (
    <div
      className="flip-card-outer"

    >
      <div
        className={cn("flip-card-inner", {
          showBack

        })}
      >
        <div
          className="card front"
          style={{
            backgroundImage: `linear-gradient(#00000000, #00000050), url(${card.background})`, backgroundSize:`cover`,backgroundRepeat:`no-repeat`
          }}
        >
          <div className="card-body d-flex justify-content-center align-items-center">

            <p className=" front card-text fs-1 fw-bold">{card.front}</p>
          </div>
          <button onClick={handleClick}>Details</button>
        </div>
        <div className="card back">
          <div className="card-body">
            <div className="row">
              < a href={card.gitHub}>
                <FontAwesomeIcon icon={faGithub} src={card.gitHub}></FontAwesomeIcon>
                <h1 className="cardTitle" src={card.gitHub}>{card.front}</h1>
                </a>
            </div>
            <p className=" back card-text fs-1 fw-bold">{card.back}</p>
            <div className="row">
               <img className="icon" src= {card.icon1} alt="React Icon"></img>
               <img className="icon" src= {card.icon2} alt="React Icon"></img>
               <img className="icon" src= {card.icon3} alt="React Icon"></img>
            </div>
            <Row>
              <Col>
                 <button className="buttonPort" onClick={handleClick} >
                 <FontAwesomeIcon icon={faBackwardStep} />
                 </button>
              </Col>
              <Col>
               <a href={card.link}>
                 <button className="buttonPort" >
                 <FontAwesomeIcon icon={faForwardStep} />
                 </button>
               </a>
               </Col>
             </Row>
            </div>
        </div>
      </div>
    </div>
  );
}


export default FlipCard;
