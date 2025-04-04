import React from "react";
import WeatherIcon from "./WeatherIcon";

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
        <div>
            <div className="row">
                <div className="col">{day()}</div>
                <div className="col">Tue</div>
                <div className="col">Wed</div>
                <div className="col">Thur</div>
                <div className="col">Fri</div>
                <div className="col">Sat</div>
            </div>

            <div className="container1 text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <WeatherIcon
                            code={props.data.condition.icon_url}// Use the correct property for the weather icon
                            size={30}
                        />
                    </div>
                    <div className="col">🌦</div>
                    <div className="col">🌧</div>
                    <div className="col">🌨</div>
                    <div className="col">🌩</div>
                    <div className="col">⛈</div>
                </div>
            </div>
            <div className="container1 text-center">
                <div className="row align-items-end">
                    <div className="col">{dayTemperature()}</div>
                    <div className="col">20°</div>
                    <div className="col">15°</div>
                    <div className="col">14°</div>
                    <div className="col">12°</div>
                    <div className="col">10°</div>
                </div>
            </div>
        </div>
    )
}