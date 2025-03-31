import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="chosen-city" className="city-name">{props.city}</h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <h2>
        <img
          src={props.data.icon}
          alt={props.data.description}
          className="weather-icon"
        />
        <span className="temperature" id="temperature">{props.temperature}</span>
        <span className="units">
          {props.unit === "celsius" ? (
            <>
              °C | <a href="/" onClick={props.showFahrenheit}>°F</a>
            </>
          ) : (
            <>
              <a href="/" onClick={props.showCelsius}>°C</a> | °F
            </>
          )}
        </span>
      </h2>
      <h3 className="today" id="description">{props.data.description}</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 card-group">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wind (km/h)</h5>
              <p className="card-text" id="wind">{props.data.wind}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Humidity</h5>
              <p className="card-text" id="humidity">{props.data.humidity}%</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feels Like</h5>
              <p className="card-text" id="feels_like">
                {props.unit === "celsius"
                  ? `${props.data.feelsLike}°C`
                  : `${props.convertToFahrenheit(props.data.feelsLike)}°F`}
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pressure</h5>
              <p className="card-text" id="pressure">{props.data.pressure} hPa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}