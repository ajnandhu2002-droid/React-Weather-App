import React from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherList({ weatherList }) {
  if (!weatherList || weatherList.length === 0) {
    return <p>No weather data yet.</p>;
  }

  return (
    <div className="weather-list">
      {weatherList.map((data, index) => (
        <WeatherCard key={index} data={data} />
      ))}
    </div>
  );
}
