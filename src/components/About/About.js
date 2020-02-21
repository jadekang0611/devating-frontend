import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className="about-container">
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <h2>Let’s just put it out there- all of us met online.</h2>
      <section>
        With a strike of curiosity, or maybe insanity, all four of us willingly
        enrolled in a three month long coding bootcamp in the winter of 2019.
        During this whirlwind of an experience, by chance we were paired
        together for a group project where we were tasked to build our own MERN
        app. By that point in our bootcamp, we had come to the realization that
        developers are their own breed. Their own, nerdy, love to be in front of
        a computer solving problems, obsessed with computer hardware, probably
        not the most social kind of breed. C’mon, you know it’s true. If you
        know this to be true, which you do, then you also know that these nerds
        are awesome. If you are reading this- you are awesome & we LOVE your
        nerdyness. And we actually want you to get out there and meet somebody
        who is just as, or even more, nerdy than you are! We believe everyone
        deserves the chance to find their lover-grammer (you know like,
        programmer, except with love.. too cheesy?), so with that focus we stuck
        our heads together and built Devating just for you. Now get to it! It’s
        time you got out from behind that computer! Feel free to say hey to us
        on linkedin or shoot us an email, we’d love to hear from you. Later
        nerds!
      </section>
      <hr></hr>
      <h2>Meet the developers</h2>
      <CardDeck>
        <Card className="about-card">
          <Card.Img
            className="about-card-image"
            variant="top"
            src="./images/jade.png"
          />
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
            <a href="mailto:jkang.se@gmail.com">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
        <Card className="about-card">
          <Card.Img
            className="about-card-image"
            variant="top"
            src="./images/daisy.png"
          />
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
            <a href="mailto:jkang.se@gmail.com">
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
          <Card.Img
            className="about-card-image"
            variant="top"
            src="./images/abdul.png"
          />
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
            <a href="mailto:jkang.se@gmail.com">
              <FontAwesomeIcon
                icon={['fas', 'envelope']}
                className="font-awesome"
              />
            </a>
          </Card.Footer>
        </Card>
        <Card className="about-card">
          <Card.Img
            className="about-card-image"
            variant="top"
            src="./images/sage.png"
          />
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
            <a href="mailto:jkang.se@gmail.com">
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
