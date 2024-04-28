import React from 'react';
import '../styles/About.css';
import profilePicture from '../assests/ProfileImageABT.jpg'; 
import hobby1 from '../assests/hobby1.jpg'; 
import hobby2 from '../assests/hobby2.jpg';
import hobby3 from '../assests/hobby3.jpg';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <div className="about-content">
          <h1>so WHO Am I?</h1>
          <p>Venturing through the dynamic landscape of technology, I, Suraj Adhikrao Gurav, stand at the helm of technical innovation as a leader of the technical integration team.</p>



        <p>My journey began in the vast field of Electronics and Telecommunication, where my bachelor's degree from Mumbai University was not just a learning phase but a cornerstone for my future endeavors.
Stepping confidently into the software realm, I have found my rhythm in the harmonious chaos of code, where I not only solve problems, but also craft digital experiences that resonate with users worldwide. With an inherent ability to navigate through complex development environments, I am equally at home orchestrating the symphony of a technical team as I am indulging in the solitary pursuit of perfecting a piece of code.</p>
<p>My career path has been a testament to a relentless pursuit of excellence, marked by a tenure at Tech Mahindra - India where I've been honored with accolades like the ACE Award. But my identity transcends the bounds of the professional sphere.</p>
<p>As a sports aficionado, I find the principles of cricket, volleyball, chess, carrom, and kabaddi to be akin to the methodologies of my work—strategy, precision, and a team-centric approach. Music threads through my life with the strings of a guitar and the rhythm of a Clapbox, fostering creativity that spills over into my technological craft.</p>
<p>A fun-loving spirit, a happy demeanor, and a propensity to lend a helping hand defines my personal journey. For me, every sunrise heralds new opportunities to grow, to give, and to inspire. It's this rich tapestry of diverse interests and unyielding drive that shapes my narrative—both as a distinguished professional and an impassioned human</p>
        </div>

        
        <div className="about-images">
          <img src={profilePicture} alt="Suraj Adhikrao Gurav" className="profile-img" />
        </div>
      </section>
        <h1>May Be I'm Good At !!!!</h1>
      <div className="hobbies-gallery">
        <img src={hobby1} alt="Hobby 1" className="hobby-img" />
        <img src={hobby2} alt="Hobby 2" className="hobby-img" />
        <img src={hobby3} alt="Hobby 3" className="hobby-img" />
    
      </div>
    </div>
  );
};

export default About;
