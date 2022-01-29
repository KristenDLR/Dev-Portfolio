import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "../FlipCard/FlipCard";
import { capitalizeFirstLetter } from '../../utils/helpers';
import { faReact,faHtml5,faCss3 } from "@fortawesome/free-brands-svg-icons";

// import { faHtml5, faReact } from '@fortawesome/free-brand-svg-icons'


function Portfolio() {
  const currentTab= {
    name: "portfolio",
    description: "A brief snapshot of some of my diverse work"
  };



  const cards = [
    {
      id: "1",
      variant: "click",
      front: "Promote The Vote",
      back: "Back",
      icon:[faHtml5, faReact ]
    },
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back",
      icon:[faHtml5, faCss3  ]
    },
    {
      id: "3",
      variant: "click",
      front: "Focus",
      back: "Back",
      icon:[faHtml5, faReact ]
    }
  ];

  return (
    <section>
    <h1>{capitalizeFirstLetter(currentTab.name)}</h1>
    <div className="container">
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Portfolio;
