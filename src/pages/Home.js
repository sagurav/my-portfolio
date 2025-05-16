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
        Passionate about transforming challenges into clean, scalable code.
          A creative technologist who blends engineering precision with artistic rhythm,
          bringing harmony to both digital platforms and real-world solutions.
        </p>
        <Link to="/about" className="section-link highlight-button" style={{ color: '#73bbe5', textDecoration: 'underline' }}>Learn more</Link>

        <h2>Professional Profile</h2>
        <p>
          I am a passionate IT professional with a strong background in software engineering, data integration,
          and business intelligence. With a blend of leadership and technical expertise, I design and deliver scalable,
          secure, and innovative solutions across diverse industries. My work reflects dedication, adaptability,
          and a continuous drive to learn and evolve. This portfolio showcases the versatility and leadership that adapts to any challenge.
        </p>
        <Link to="/resume" className="section-link highlight-button" style={{ color: '#73bbe5', textDecoration: 'underline' }}>Explore My Resume</Link>

        <h2>My Work</h2>
        <p>
          Every application tells a story. From concept to deployment,
          I architect modern, secure, and impactful solutions that scale.
          Experience my latest work — built with purpose and passion.
        </p>
        <Link to="/portfolio" className="section-link highlight-button" style={{ color: '#73bbe5', textDecoration: 'underline' }}>View Projects</Link>


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
