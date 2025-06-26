import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="app-title">🎬 CineHunt</h1>
        <p className="tagline">Discover your next favorite movie.</p>
        <div className="home-buttons">
          <button className="btn login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="btn signup-btn" onClick={() => navigate('/signup')}>Sign Up</button>
          <button className="btn search-btn" onClick={() => navigate('/search')}>Search Movies</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
