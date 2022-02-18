import React from 'react';
import me from '../../assets/large/About/mePurple.jpg'
import "./styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (

   <Container>
    <Row >
      <Col className="about">
         <h1 id="about">I am Kristen De La Rosa</h1>
          <h2 id="about">A Full Stack Developer</h2>
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

export default Home;
