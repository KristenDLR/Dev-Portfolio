import React from 'react';
import me from '../../assets/large/About/mePurple.jpg'
import "./styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (

   <Container fluid>
    <Row>
      <Col>
         <h1 id="about">I am Kristen De La Rosa</h1>
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
