import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import profilePic  from "../assests/Profile.jpg";

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/sagurav/repos')
      .then(response => response.json())
      .then(data => setRepos(data))
      .catch(error => console.error('Error fetching GitHub data: ', error));
  }, []);

  return (
    <div className="portfolio">
    <div className="portfolio-container">
      <div className="profile-section">
        <img src={profilePic} alt="Suraj Adhikrao Gurav" className="profile-pic" />
        <h1>Suraj Adhikrao Gurav</h1>
        <p>Software Engineering Professional</p>
      </div>
      <div className="portfolio-content">
        <section className="repo-section">
          <h2>GitHub Repositories</h2>
          <ul className="repo-list">
            {repos.map(repo => (
              <li key={repo.id} className="repo-item">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                   
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="video-section">
          <h2>YouTube Videos</h2>
          <ul className="video-list">
            <li className="video-item">
              <a href="https://www.youtube.com/watch?v=Tk4WDQ1AvcY" target="_blank" rel="noopener noreferrer">
                Watch my video on YouTube
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
