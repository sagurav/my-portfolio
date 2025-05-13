import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import profilePicture from "../assests/Profile.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home">
      <div className="left-column">
        <h2>About Me</h2>
        <p>
          Blending code with chords and sprints, <br />I'm a software engineer
          whose rhythm flows through <br />
          both innovative tech solutions and the vibrant
          <br />
          beats of music, while my spirit races in the thrill of sports.
        </p>
        <Link to="/about" className="section-link">
          Learn more
        </Link>

        <h2>Professional Profile</h2>
        <p>
          Take a moment to explore my resume, <br />
          where my passion for technology and dedication to <br />
          excellence are vividly captured in every detail.
        </p>
        <Link to="/resume" className="section-link">
          Learn more
        </Link>

        <h2>My Work</h2>
        <p>
          Crafting digital canvases with the same fervor as a maestro wields his
          baton. <br />
          I'm a passionate software engineer dedicated to <br />
          sculpting the future of web development with every <br />
          line of code I write.
        </p>
        <Link to="/portfolio" className="section-link">
          Learn more
        </Link>

        <br />
        <br />
        <br />
        <h2>Follow Me</h2>
        <div className="social-icons">
          <a
            href="https://github.com/sagurav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/suraj-adhikrao-gurav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://instagram.com/suraj_adhikrao_gurav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://facebook.com/suraj.gurav.904?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className="right-column">
        <div className="home-profile-picture">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="intro-text">
          <h1>Suraj Adhikrao Gurav</h1>
          <h2>IT Professional</h2>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
