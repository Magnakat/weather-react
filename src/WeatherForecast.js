import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast); // Debugging: Check the structure of the forecast data
        return (
            <div className="info">
                <div className="container1 text-center">
                    <div className="row align-items-end">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "be4e69tfaco8bd17e380191b2ab05c44";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}