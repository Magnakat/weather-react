import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function dayTemperature() {
    let temperature = Math.round(props.data.temperature.day);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="all-forecast">
      <div className="WeatherForecast-day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt={props.data.condition.description}
        width={50}
      />
      <div className="WeatherForecast-temperatures">
          <span className="col">{dayTemperature()}</span>
        </div>
      </div>
  );
}
