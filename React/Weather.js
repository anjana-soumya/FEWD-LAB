import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('Hyderabad');
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'a6ca8c4062788e52113e5722fa89c929';
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
        );
        const data = await res.json();

        if (data.cod !== 200) {
          setError(data.message);
          setWeather(null);
        } else {
          setWeather(data);
          setError(null);
        }
      } catch (err) {
        setError('Failed to fetch weather data.');
        setWeather(null);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md max-w-sm">
      <h2 className="text-xl font-semibold mb-2">Weather in {location}</h2>

      {/* City input */}
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded w-full mb-2"
        placeholder="Enter city"
      />

      {/* Handle Loading, Error, Success */}
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : !weather ? (
        <p>Loading weather data...</p>
      ) : (
        weather.main && (
          <div>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )
      )}
    </div>
  );
};

export default Weather;