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
// import voting from "../../assets/card/voteSticker.jpg";
import space from "../../assets/card/nasa.jpg";
import herokuIcon from "../../assets/icons/Heroku-48-96px/icons8-heroku-48.png";
import apiIcon from "../../assets/icons/API-48-96px/icons8-api-48.png";
import cssIcon from "../../assets/icons/CSS3-48-96px/icons8-css3-48.png";
import jsIcon from "../../assets/icons/JavaScript-48-96px/icons8-javascript-48.png";
import phone from "../../assets/card/phone.jpg";
import Footer from '../Footer/Footer';


function Portfolio() {
  const currentTab= {
    name: "portfolio",
    description: "A brief snapshot of some of my diverse work"
  };



  const cards = [
    {
      id: "1",
      variant: "click",
      front: "Clicker in Space",
      background:space,
      back: "This react app is a game of Space Images you can click. Once clicked, the images shuffle! Don't click the same gif twice! Beat your High score!! The application renders different images to the screen. Each image listens for click events. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.    .",
      icon1:npmIcon,
      icon2: reactIcon,
      icon3: herokuIcon,
      gitHub:"https://github.com/KristenDLR/clickerinspace",
      link:"https://clickerinspace.herokuapp.com/"
    },
    {
      id: "2",
      variant: "click",
      front: "Giftastic",
      background:phone,
      back: "Giftastic is an activity that incorporates API data from giphy.com/ to allow user interface to search GIFs and ratings, by generating buttons for easy use and presenting the use the top 10 best search results of TV shows. ",
      icon1:apiIcon,
      icon2: jsIcon,
      icon3: cssIcon,
      gitHub:"https://github.com/KristenDLR/GifTastic",
      link:"https://kristendlr.github.io/GifTastic/"
    },
    {
      id: "3",
      variant: "click",
      front: "three",
      back: "Back",
      icon1:npmIcon,
      icon2: reactIcon,
      icon3: mongoIcon,
      gitHub:"https://github.com/michjmend/Promote-The-Vote",
      link:"https://promotethevote.herokuapp.com/"
    },
   
  ];

  return (
 
    <section>
    <h1 id="home2">{capitalizeFirstLetter(currentTab.name)}</h1>
    <div className="containerP">
      <div className="row h-100">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
    <Footer></Footer>
    </section>
 
   
  )
}

export default Portfolio;
