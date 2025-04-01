import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [searchCity, setSearchCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setWeatherData({
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
    return (celsius * 9) / 5 + 32;
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                onChange={handleCityChange}
                value={searchCity}
              />
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo
          city={city}
          data={weatherData}
          unit={unit}
          convertToFahrenheit={convertToFahrenheit}
        />
      </div>
    );
  } else {
    search(city);
    return <div>Loading...</div>;
  }
}