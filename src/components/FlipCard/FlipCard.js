import React from "react";
import { useState } from "react";
import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons'




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
          <label onClick={handleClick}>Details</label>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
           <FontAwesomeIcon icon={faGithub} src={card.gitHub}>{card.front}</FontAwesomeIcon>
           </div>
            <p className=" back card-text fs-1 fw-bold">{card.back}</p>

            <img className="icon" src= {card.icon1} alt="React Icon"></img>
            <img className="icon" src= {card.icon2} alt="React Icon"></img>
            <img className="icon" src= {card.icon3} alt="React Icon"></img>
            {/* <FontAwesomeIcon icon={card.icon[0]} />
            <FontAwesomeIcon icon={card.icon[1]} /> */}
            <FontAwesomeIcon onClick={handleClick} icon={faBackwardStep} />
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
