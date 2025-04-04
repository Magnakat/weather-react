import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity); // State to track the displayed city name
  const [searchCity, setSearchCity] = useState(props.defaultCity); // State to track the input field value
  const [unit, setUnit] = useState("celsius"); // State to track the temperature unit

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000), // Convert UTC timestamp to Date object
      ready: true,
    });
  }

  function search(cityToSearch) {
    const apiKey = "2d96d64425dca1d6eda00d942a281c0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityToSearch}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form from reloading the page
    setCity(searchCity); // Update the displayed city name
    search(searchCity); // Pass the searchCity directly to the search function
  }

  function handleCityChange(event) {
    setSearchCity(event.target.value); // Update the input field value
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
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a City"
                  autoFocus="on"
                  autoComplete="off"
                  id="input-city"
                  className="form-control shadow-sm"
                  onChange={handleCityChange}
                  value={searchCity} // Bind the input field to the `searchCity` state
                />
              </div>
              <div className="col-3">
                <button type="submit" className="btn btn-primary w-100">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Weather Info */}
        <div className="weather-info-container">
          <WeatherInfo
            city={city} // Pass the displayed city name
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
    search(city); // Fetch data for the default city on initial load
    return <div>Loading...</div>;
  }
}