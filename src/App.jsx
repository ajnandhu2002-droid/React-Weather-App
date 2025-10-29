import React, { useState } from 'react';
import SearchBox from './components/SearchBox.jsx';
import WeatherList from './components/WeatherList.jsx';
import './App.css';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherList, setWeatherList] = useState([]);
  const [error, setError] = useState('');

  const fetchWeather = async (cityName) => {
    try {
      setError('');
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError('City not found');
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const newWeather = {
        city: name,
        country,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
      };

      setWeatherList([newWeather]); // or [...weatherList, newWeather] if you want multiple
    } catch (err) {
      setError('Failed to fetch weather');
    }
  };

  return (
    <div className="app">
      <h1>Weather Checker 🌤️</h1>
      <SearchBox
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeather(city)}
      />
      {error && <p className="error">{error}</p>}
      <WeatherList weatherList={weatherList} />
    </div>
  );
}
