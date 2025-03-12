import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assests/profilepicture.png";
import { ArrowRightCircle, EmojiLaughing } from "react-bootstrap-icons";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Transdisciplinary Innovator", "Business Strategist", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Welcome !!! <EmojiLaughing size={25} />{" "}
                    <EmojiLaughing size={25} />{" "}
                  </span>
                  <h1>
                    {`I'm Faiza Faisal, `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Transdisciplinary Innovator", "Business Strategist", "Web Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  I'm a fourth-year student pursuing a dual Bachelor's degree in Business and Creative Intelligence & Innovation, with a major in Marketing and a sub-major in IT. My journey has been fueled by a deep passion for blending business strategy with digital innovation. Throughout my academic path, I've honed a unique skill set that bridges the worlds of marketing, technology, and creativity.

In addition to my studies, I completed a coding bootcamp at Monash University, where I sharpened my skills in HTML, CSS, JavaScript, and React. This hands-on experience allows me to build meaningful, user-centered digital solutions that drive business success.

 I'm excited about the opportunity to collaborate on projects that demand fresh perspectives and real-world impact, creating sustainable and scalable solutions.{" "}
                  </p>
                  {/* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                  <a href="tel:+61490050656" className="vvd">
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
