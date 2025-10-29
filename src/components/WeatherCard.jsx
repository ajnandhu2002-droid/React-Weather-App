import React from 'react';

export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>
        {data.city}, {data.country}
      </h2>
      <p>🌡️ Temperature: {data.temperature}°C</p>
      <p>💨 Wind Speed: {data.windspeed} km/h</p>
    </div>
  );
}
