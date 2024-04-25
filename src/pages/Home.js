import React from 'react';
import '../styles/Home.css'; // Ensure this path is correct
import profilePicture from '../assests/Profile.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Hi, I’m <span className="name">Suraj Adhikrao Gurav</span></h1>
        <h2>Software Engineer<br/>based in Australia.</h2>
        <p>Welcome to my world.</p>
      </div>
      <div className="home-profile-picture">
        <img src={profilePicture} alt="Suraj Adhikrao Gurav" className="profile-picture" />
      </div>
    </div>
  );
};

export default Home;
