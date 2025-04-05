import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [searchCity, setSearchCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      ready: true,
    });
  }

  function search(cityToSearch) {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(searchCity);
    search(searchCity);
  }

  function handleCityChange(event) {
    setSearchCity(event.target.value);
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
        {/* Search Form */}
        <div className="search-container mb-3">
  <form className="search" id="search" onSubmit={handleSubmit}>
    <input
      type="search"
      placeholder="Enter a City"
      autoFocus="on"
      autoComplete="off"
      id="input-city"
      className="form-control shadow-sm"
      onChange={handleCityChange}
      value={searchCity}
    />
    <button type="submit" className="btn btn-primary">
      Search
    </button>
  </form>
</div>

        {/* Weather Info */}
        <div className="weather-info-container">
          <WeatherInfo
            city={city}
            data={weatherData}
            temperature={temperature}
            unit={unit}
            showFahrenheit={showFahrenheit}
            showCelsius={showCelsius}
            convertToFahrenheit={convertToFahrenheit}
          />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search(city);
    return <div>Loading...</div>;
  }
}