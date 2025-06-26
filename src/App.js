import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import MovieSearch from './MovieSearch';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <MovieSearch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
