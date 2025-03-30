import React from "react";
import "./Weather.css";

export default function Weather() {
  return(
  <div className="Weather">
    <div className="input-group mb-3">
        <form className="search" id="search">
          <input
            type="search"
            placeholder="Enter a City"
            autofocus="on"
            autocomplete="off"
            id="input-city"
            className="form-control shadow-sm"
          />

          <button type="submit" className="bsearch">Search</button>
        </form>
      </div>
     <h1 id="chosen-city">Harare</h1>
      <h3 id="date-today"></h3>
      <h2>
        🌤 <span className="temperature" id="temperature">27</span
        ><span className="units">
          <a href="#" id="celsius-link">°C</a> |
          <a href="#" id="fahrenheit-link">°F</a></span
        >
      </h2>
      <h3 className="today" id="description">Partly Sunny</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4 card-group">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Wind (km/h)</h5>
              <p className="card-text" id="wind">7</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Humidity</h5>
              <p className="card-text" id="humidity">30</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Feels Like</h5>
              <p className="card-text" id="feels_like">27°C</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Pressure</h5>
              <p className="card-text" id="pressure">8°</p>
            </div>
          </div>
        </div>
      </div>
  </div>
);
}

