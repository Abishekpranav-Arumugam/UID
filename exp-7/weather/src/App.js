import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Search from './components/Search';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Use the new API key provided
  const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Your provided API key

  const fetchWeather = async (location) => {
    try {
      setError(null);
      setWeatherData(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('Location not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Search fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
