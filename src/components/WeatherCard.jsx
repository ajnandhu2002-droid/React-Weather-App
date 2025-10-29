import React from "react";

export default function WeatherCard({ data }) {
  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code)) return "🌤️";
    if (code === 3) return "☁️";
    if ([45, 48].includes(code)) return "🌫️";
    if (code >= 51 && code <= 67) return "🌦️";
    if (code >= 71 && code <= 77) return "❄️";
    if (code >= 80 && code <= 82) return "🌧️";
    if (code >= 95 && code <= 99) return "⛈️";
    return "❓";
  };

  return (
    <div className="weather-card">
      <h2>
        {data.city}, {data.country}
      </h2>
      <div className="icon" style={{ fontSize: "2rem" }}>
        {getWeatherIcon(data.weathercode)}
      </div>
      <p>🌡️ Temperature: {data.temperature}°C</p>
      <p>💨 Wind Speed: {data.windspeed} km/h</p>
    </div>
  );
}
