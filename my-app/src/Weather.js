import React, { useState, useEffect } from 'react';
import './App.css';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = '42c10c6eeff25fdb9a2e1ae45c758f7f';
      const city = 'Queensland,';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data); // In case API doesn't work
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="weather-widget">
      {weatherData ? (
        <div>
          <h1 className="weather-title">{weatherData.name}</h1>
          {weatherData.main && (
            <p className="weather-temp">{Math.round(weatherData.main.temp - 273.15)}°C</p>
          )}
        </div>
      ) : (
        <p className="loading-text">Loading...</p>
      )}
    </div>
  );
};


export default WeatherWidget;