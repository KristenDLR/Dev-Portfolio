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
      <Col className="home">

         <h1 id="home1">Hello, I am</h1>
         <div className="home2">
             <h1 id="home2">Kristen</h1>
             <h1 id="home2">De La Rosa</h1>
         </div>
          <h2 id="home1">A Full Stack Developer</h2>
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
