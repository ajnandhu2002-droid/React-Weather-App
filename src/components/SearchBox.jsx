import React from 'react';

export default function SearchBox({ city, setCity, onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
}
