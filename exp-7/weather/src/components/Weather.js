import React from 'react';
import './Weather.css';

function Weather({ data }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-container">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="description">{weather[0].description}</p>
      <p>Temperature: {main.temp} °C</p>
      <p>Feels Like: {main.feels_like} °C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
