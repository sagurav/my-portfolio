import React, { useState, useEffect } from 'react';
import '../styles/Portfolio.css';
import profilePic from "../assests/Profile.jpg";  

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const githubApiKey = process.env.REACT_APP_GITHUB_API_KEY;
  const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const youtubeChannelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const repoResponse = await fetch(`https://api.github.com/users/sagurav/repos`, {
          headers: { Authorization: `Bearer ${githubApiKey}` }
        });
        const repoData = await repoResponse.json();
        setRepos(repoData);
        setAllRepos(repoData);

        const youtubeResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${youtubeChannelId}&key=${youtubeApiKey}`);
        const youtubeData = await youtubeResponse.json();
        const playlistId = youtubeData.items[0].contentDetails.relatedPlaylists.uploads;
        const videosResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${youtubeApiKey}`);
        const videosData = await videosResponse.json();
        setVideos(videosData.items);
        setAllVideos(videosData.items);
      } catch (error) {
        setError('An error occurred: ' + error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [githubApiKey, youtubeApiKey, youtubeChannelId]);

  const handleSearch = event => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredRepos = allRepos.filter(repo => repo.name.toLowerCase().includes(value));
    const filteredVideos = allVideos.filter(video => video.snippet.title.toLowerCase().includes(value));
    setRepos(filteredRepos);
    setVideos(filteredVideos);
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <div className="profile-section">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <h1>Suraj Adhikrao Gurav</h1>
          <p>Software Engineering Professional</p>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search for repositories or videos..."
          value={searchTerm}
          onChange={handleSearch}
        />
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
              {videos.map(video => (
                <li key={video.snippet.resourceId.videoId} className="video-item">
                  <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">
                    {video.snippet.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
