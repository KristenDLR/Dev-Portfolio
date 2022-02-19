import React from 'react';
import "./styles.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import linkedIn from '../../assets/icons/LinkedIn/icons8-linkedin-48.png';
import github from '../../assets/icons/Github/icons8-github-48.png';

function Footer() {
  return (

   <Container>
    <Row className="footer">
      <Col >

        <a href="https://www.linkedin.com/in/kris10-de-la-rosa/" target="_blank" rel="noopener noreferrer">
            <img className="footerIcon" src={linkedIn} alt="linkedIn"></img>
            </a>
     
        <a href="https://github.com/KristenDLR?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img className="footerIcon" src={github} alt="Github"></img>
         </a>
       </ Col>
       <Col>
            <p>Kristen De La Rosa © 2022</p>
       </Col>
    </Row>
  </Container>


  );
}

export default Footer;
