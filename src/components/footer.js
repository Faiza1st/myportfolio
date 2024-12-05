import {Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assests/nav-icon1.svg";
import navIcon2 from "../assests/nav-icon2.svg";
import navIcon3 from "../assests/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/faiza-faisal-383381320/"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/Faiza1st"><img src={navIcon2} alt="GitHub" /></a>
            <a href="https://mail.google.com/mail/"><img src={navIcon3} alt="Email" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}