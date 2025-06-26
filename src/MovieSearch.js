import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieSearch.css';

const API_KEY = '107882cb'; // Replace with your OMDb API key

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const searchMovies = async () => {
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    const data = await res.json();
    setMovies(data.Search || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear login data
    navigate('/'); // Redirect to home
  };

  return (
    <div className="search-container">
      <div className="top-bar">
        <h1>🎬 Movie Search</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
