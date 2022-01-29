import React from "react";
import { useState } from "react";
import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      onClick={handleClick}
    >
      <div
        className={cn("flip-card-inner", {
          showBack,
          "hover-trigger": card.variant === "hover"
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.front}</p>
            <label>Details</label>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">{card.back}</p>
            <h1>i want to add an icon</h1>
            <FontAwesomeIcon icon={card.icon[0]} />
            <FontAwesomeIcon icon={card.icon[1]} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
