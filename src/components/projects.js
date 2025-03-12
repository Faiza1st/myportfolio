import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./projectCards.js";
import pro1 from "../assests/pro1.png";
import pro2 from "../assests/pro2.png";
import pro3 from "../assests/pro3.png";
import pro4 from "../assests/pro4.png";
import pro5 from "../assests/pro5.png";
import pro9 from "../assests/pro9.png";
import pro8 from "../assests/pro8.png";
import pro7 from "../assests/pro7.png";
import picture from "../assests/picture1.png";
import picture2 from "../assests/picture2.png";
import picture3 from "../assests/pic3.png";
import picture4 from "../assests/picture4.png";
import picture5 from "../assests/pic5.png";


import github from "../assests/github2.png"
import bootcamp from "../assests/Bootcampmarks.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";

export const Projects = () => {

    const projects = [
      
      {
        title: "StudentConnect",
        link: "https://github.com/Faiza1st/StudentConnect",
        
        description: "StudentConnect is a specialised social networking site created exclusively for college and university students. It enables students to establish connections, engage in interactions, and exchange their university experiences and everyday lives.",
        imgUrl: pro1,
       },
        {
          title: "Work Day Scheduler",
          description: "The Work Schedule Application is a user-friendly calendar utility that can assist users better plan their everyday work habits. ",
          imgUrl: pro3,
        },
        {
          title: "Code Quiz",
          description: "This JavaScript Fundamentals Quiz Application is intended to measure students' mastery of essential JavaScript topics during coding boot camp. The programme offers a timed quiz experience, tracking top results for comparison among boot camp participants.",
          imgUrl: pro4,
        },
        {
          title: "Password Generator",
          description: "The Password Generator is an easy-to-use web tool developed to help users to create strong and secure passwords. The programme provides a customisable technique to creating strong passwords, with a focus on matching certain criteria for password strength.",
          imgUrl: pro5,
        },
        {
            title: "Interactive Budget Tracker",
            description: "This software is intended to help manage  money successfully by tracking  income, and expenses, and offering insights into  spending patterns. ",
            imgUrl: pro2,
          },
          {
            title: "Snake Game",
            description: "Snake Game using Python and the pygame library ",
            imgUrl: pro9,
          },
          {
            title: "Pong Game",
            description: "Pong Game using Python and the pygame library",
            imgUrl: pro7,
          },
          {
            title: "Turtle Game",
            description: "Turtle Game using Python and the pygame library ",
            imgUrl: pro8,
          },
      ];
      const Bciiprojects = [
      
        {
          title: "Integrating Business and Creative Intelligence",
          link: "https://github.com/Faiza1st/StudentConnect",
          
          description: "My dual degree in Business and Creative Intelligence and Innovation (BCII) empowers me to approach problems from both strategic and creative perspectives. By combining business models with creative, human-centered design methods, I offer solutions that are not only viable but innovative and future-ready.",
          imgUrl: picture,
         },
          {
            title: "Value of Integrating Diverse Knowledge",
            description: "The integration of business strategy, creative intelligence, and technology is key to solving modern-day challenges. By blending insights from marketing, design thinking, and IT, I create solutions that are grounded in business objectives while remaining adaptable to the ever-evolving digital landscape. ",
            imgUrl: picture2,
          },
           {
            title: "Key Characteristics of My Transdisciplinary Approach",
            description: "What sets my approach apart is more than just the integration of diverse disciplines—it's about collaboration, adaptability, and user-centered thinking. I thrive in environments that encourage teamwork across multiple domains, and I adapt methods to suit each unique challenge.  ",
            imgUrl: picture3,
          },
          
           {
           title: "Methods for Solving Real-World Problems",
            description: "I've mastered various methods through my BCII journey that allow me to solve real-world problems effectively. From applying design thinking for user-centered innovation to using Agile development for iterative project delivery.  ",
            imgUrl: picture4,
          },
          {
           title: "Adapting Methods for Different Contexts",
            description: "The ability to select and adapt methods to fit various contexts is central to my problem-solving approach. Whether working on business strategy, digital product development, or creative innovation, I tailor my methods to meet the specific needs of the project.",
            imgUrl: picture5,
          },
        ];
      
    return (
    <section className="project" id="projects">
       <section className="Bciiprojects" id="Bciiprojects"></section>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2> My Projects</h2>
                <p>What sets me apart is my transdisciplinary approach—combining strategic thinking, creative problem-solving, and technical expertise to tackle complex challenges.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first"> Web DevelopmentProjects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Githubs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Innovative Project</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  
                    <Tab.Pane eventKey="second">
                        <a href="https://github.com/Faiza1st"><img className= "project-img" src={github} alt="Github" /></a>
                    </Tab.Pane>
          <Tab.Pane eventKey="third">
                      <Row>
                        {
                          Bciiprojects.map((Bciiprojects, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Bciiprojects}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
