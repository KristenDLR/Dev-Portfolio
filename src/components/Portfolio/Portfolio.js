import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "../FlipCard/FlipCard";
import { capitalizeFirstLetter } from '../../utils/helpers';
import reactIcon from "../../assets/icons/React Native-48-96px/icons8-react-native-48.png"
import npmIcon from "../../assets/icons/NPM-48-96px/icons8-npm-48.png"
import htmlIcon from "../../assets/icons/Html 5-48-96px/icons8-html-5-48.png"
import arcade from "../../assets/card/arcade.jpg";
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
      back: "This react app is a game of Space Images, Don't click the same gif twice! Beat your High score!! The application renders different images to the screen. Each image listens for click events. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.",
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
      front: "Code Quiz",
      background:arcade,
      back: "This app feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes. Timed code quiz that's made up of multiple-choice questions.",
      icon1:htmlIcon,
      icon2: jsIcon,
      icon3: cssIcon,
      gitHub:"https://github.com/KristenDLR/quiz-game",
      link:"https://kristendlr.github.io/quiz-game/"
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
