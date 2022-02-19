import React from 'react';
import me from '../../assets/large/About/mePurple.jpg'
import "./styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (

   <Container fluid>
    <Row style={{ marginLeft:'20px'}}>
      <Col>
      <h1 id="about">About Me</h1>
      <p style={{ color:'white'}}>Highly motivated developer with demonstrated experience in both front and backend development. Working as a Senior Learning Assistant for Trilogy 2U Instructional Program. Have worked on producing high-quality, responsive design and exceptional user experience with a focus on detailed documentation, establishing multi-device compatibility, and web performance. Proficient in the following areas:</p>
      <ul style={{ color:'white'}}>
        <li>
        <FontAwesomeIcon icon={faTerminal} /> Responsive HTML/CSS</li>
        <li> <FontAwesomeIcon icon={faTerminal} /> JavaScript</li>
        <li><FontAwesomeIcon icon={faTerminal} /> React</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Handlebars.js</li>
        <li><FontAwesomeIcon icon={faTerminal} /> API Framework</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Firebase</li>
        <li><FontAwesomeIcon icon={faTerminal} /> MySQL</li>
        <li><FontAwesomeIcon icon={faTerminal} /> MongoDB</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Firebase</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Github</li>
        <li><FontAwesomeIcon icon={faTerminal} /> Heroku</li>
      </ul>
      <p style={{ color:'white'}}>I take great care to ensure all projects represent the most viable product by providing high quality, responsive, project tested on a wide range of devices. I consider well document and easily-maintained projects enhance website functionality for proper growth.</p>
       </Col>
       <Col>
       <div className="containerAbout">
          <img src={me} alt="Kristen De La Rosa" className="profPic"/>
       </div>
       </Col>
    </Row>
  </Container>


  );
}

export default About;
