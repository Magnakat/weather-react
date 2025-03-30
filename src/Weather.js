import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity); // State to track the city
  const [unit, setUnit] = useState("celsius"); // State to track the temperature unit

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`, // Icon URL
      date: new Date(response.data.dt * 1000), // Convert UTC timestamp to Date object
      ready: true,
    });
  }

  function search() {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page
    search(); // Call the search function to fetch data for the entered city
  }

  function handleCityChange(event) {
    setCity(event.target.value); // Update the city state with user input
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }

  if (weatherData.ready) {
    let temperature = weatherData.temperature;
    if (unit === "fahrenheit") {
      temperature = convertToFahrenheit(weatherData.temperature);
    }

    return (
      <div className="Weather">
        <div className="input-group mb-3">
          <form className="search" id="search" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a City"
              autoFocus
              autoComplete="off"
              id="input-city"
              className="form-control shadow-sm"
              onChange={handleCityChange}
            />
            <button type="submit" className="bsearch">
              Search
            </button>
          </form>
        </div>
        <h1 id="chosen-city" className="city-name">{city}</h1>
        <h3 id="date-today">{weatherData.date ? weatherData.date.toLocaleString() : "Loading date..."}</h3>
        <h2>
          <img
            src={weatherData.icon}
            alt={weatherData.description}
            className="weather-icon"
          />
          <span className="temperature" id="temperature">{temperature}</span>
          <span className="units">
            {unit === "celsius" ? (
              <>
                °C | <a href="/" onClick={showFahrenheit}>°F</a>
              </>
            ) : (
              <>
                <a href="/" onClick={showCelsius}>°C</a> | °F
              </>
            )}
          </span>
        </h2>
        <h3 className="today" id="description">{weatherData.description}</h3>
        <div className="row row-cols-1 row-cols-md-2 g-4 card-group">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wind (km/h)</h5>
                <p className="card-text" id="wind">{weatherData.wind}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Humidity</h5>
                <p className="card-text" id="humidity">{weatherData.humidity}%</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Feels Like</h5>
                <p className="card-text" id="feels_like">
                  {unit === "celsius"
                    ? `${weatherData.feelsLike}°C`
                    : `${convertToFahrenheit(weatherData.feelsLike)}°F`}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pressure</h5>
                <p className="card-text" id="pressure">{weatherData.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search(); // Fetch data for the default city on initial load
    return <div>Loading...</div>;
  }
}