import React, { useState } from 'react';
import './Search.css';

function Search({ fetchWeather }) {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim() !== '') {
      fetchWeather(location);
      setLocation('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Search;
