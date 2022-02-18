import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "../FlipCard/FlipCard";
import { capitalizeFirstLetter } from '../../utils/helpers';
// import { faReact,faHtml5,faCss3, faNpm } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from '@fortawesome/free-solid-svg-icons'
// import { faHtml5, faReact } from '@fortawesome/free-brand-svg-icons'
import reactIcon from "../../assets/icons/React Native-48-96px/icons8-react-native-48.png"
import npmIcon from "../../assets/icons/NPM-48-96px/icons8-npm-48.png"
import mongoIcon from "../../assets/icons/MongoDB-48-96px/icons8-mongodb-48.png"
import voting from "../../assets/card/voteSticker.jpg"

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
      background:voting,
      back: "This application was created to provide a platform for US citizens to communicate with others about why they vote and how they better prepare themselves, This Project Uses a Node and Express Web Server, Is backed by a MongoDB Database.Is deployed using Heroku.",
      icon1:npmIcon,
      icon2: reactIcon,
      icon3: mongoIcon,
      gitHub:"https://github.com/michjmend/Promote-The-Vote"
    },
    {
      id: "2",
      variant: "click",
      front: "Click",
      back: "Back",
      // icon:[faReact, faCss3  ]
    },
    {
      id: "3",
      variant: "click",
      front: "Focus",
      back: "Back",
      // icon:[faHtml5, faReact ]
    }
  ];

  return (
    <section>
    <h1 id="home2">{capitalizeFirstLetter(currentTab.name)}</h1>
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
