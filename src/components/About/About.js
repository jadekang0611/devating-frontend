import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className="about-container">
      <h2>We love what we do</h2>
      <section>
        Qui reprehenderit dolore laborum velit deserunt irure est ad ex. Dolore
        aliqua consectetur aute tempor. Reprehenderit nisi labore reprehenderit
        qui amet eiusmod minim. Esse aliqua mollit minim proident fugiat aliqua
        quis proident. In esse incididunt pariatur proident excepteur aliqua
        deserunt quis occaecat pariatur aliqua culpa veniam aute. Commodo nisi
        consequat enim voluptate excepteur duis id veniam est enim ullamco
        aliqua do sunt. Consequat eu pariatur amet officia cillum. Aute mollit
        proident Lorem do enim exercitation ea nostrud culpa sint. Elit magna
        nostrud ut ut elit sit ea officia. Commodo incididunt eiusmod enim minim
        qui duis tempor aliqua tempor cupidatat voluptate. Ad non anim velit
        esse dolor qui consequat commodo cupidatat nostrud culpa mollit
        adipisicing qui. Aliquip sint pariatur proident proident id duis
        exercitation incididunt duis proident elit minim. Ullamco officia ex et
        proident deserunt incididunt nostrud velit consequat non est deserunt.
        Ullamco eu minim qui minim velit.
      </section>
      <hr></hr>
      <h2>Founders</h2>
      <CardDeck>
        <Card className="about-card">
          <Card.Img className="about-card-image" variant="top" src="./images/jade.png" />
          <Card.Body>
            <Card.Title className="bio-title">
              Jade Kang, Scrum Master/Engineer
            </Card.Title>
            <Card.Text>
              I’m a creative-minded, analytical, and organized software
              developer with a passion for building software that delivers great
              UI & UX. My background as a Certified Public Accountant and
              startup founder displays my abilities in multitasking and
              researching while operating in a collaborative agile environment
              with a focus on the company’s profitability.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://github.com/jadekang0611">
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                className="font-awesome"
              />
            </a>
            <a href="https://www.linkedin.com/in/jadekang/">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="font-awesome"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
        <Card  className="about-card">
          <Card.Img className="about-card-image" variant="top" src="./images/daisy.png" />
          <Card.Body>
            <Card.Title className="bio-title">
              Daisy Yau, Project Manager/Engineer
            </Card.Title>
            <Card.Text>
              My web development passion sparked when I had the opportunity to
              work with site engineers at my previous position for AdTech
              Products. I was able to collaborate with numerous engineers to
              help debug issues on the site and create a better ad UX for users.
              With my passion to become more technical, it motivated me to
              become a developer myself. I’m always eager to learn more and help
              develop a better process, independently and collaboratively.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://github.com/daisyy125">
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                className="font-awesome"
              />
            </a>
            <a href="https://www.linkedin.com/in/daisyyau/">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="font-awesome"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card className="about-card">
          <Card.Img className="about-card-image" variant="top" src="./images/abdul.png" />
          <Card.Body>
            <Card.Title className="bio-title">
              Abdul James, QA Engineer
            </Card.Title>
            <Card.Text>
              As a new aspiring software engineer, I truly enjoy the challenges
              of defining and applying analytical thinking in offering
              solutions, while being committed to remaining proficient to the
              current technology concepts. I have an appreciation for teamwork,
              precision execution and integrity and take pride in the art of
              software craftmanship. My mission and core values lie within
              ensuring the highest level of service satisfaction for all my
              clients is achieved.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://github.com/sewatu999/">
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                className="font-awesome"
              />
            </a>
            <a href="https://www.linkedin.com/in/abdul-s-james-031975/">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="font-awesome"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
        <Card className="about-card">
          <Card.Img className="about-card-image" variant="top" src="./images/sage.png" />
          <Card.Body>
            <Card.Title className="bio-title">
              Sage Kearney, UI Engineer
            </Card.Title>
            <Card.Text>
              Visionary full stack software engineer who’s artfully managed to
              weld her background in graphic design with tech expertise in the
              form of web development to further fuel her passion for
              storytelling. Using a client centered approach at the forefront of
              every project, this self starter engineer is equipped to craft
              creative solutions for entrepreneurs who are looking to elevate
              their online user experience and transform what was once a figment
              of the imagination into a real, tangible product.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a href="https://github.com/Sage-Kearney">
              <FontAwesomeIcon
                icon={['fab', 'github-square']}
                className="font-awesome"
              />
            </a>
            <a href="https://www.linkedin.com/in/sage-kearney/">
              <FontAwesomeIcon
                icon={['fab', 'linkedin']}
                className="font-awesome"
              />
            </a>
            <a href="#">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default About;
