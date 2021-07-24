import React, { useState } from "react";
import "./Weather.css";
import Form from "./Form";
import Footer from "./Footer";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {

        setWeatherData ({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }
    
    
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <Form />
                <div className="Overview">
                <h1>{weatherData.city}</h1>
                <ul>
                    <li> ✨ Last Updated:<span><FormattedDate date={weatherData.date} /></span>
                    </li>
                    <li> {weatherData.description}</li>
                </ul>
                </div>
                <div className="row">
                <div className="col-6">
                    <div className="d-flex weatherTemperature">
                    <img
                        src={weatherData.iconUrl}
                        alt={weatherData.description}
                        className="icon"
                        width="42"
                    />
                    <div className="float-left">
                        <strong>{Math.round(weatherData.temperature)}</strong>
                        <span className="units">
                        <button class="active">
                            °F
                        </button>{" "}
                        |<button>°C</button>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                    <li>🥵  Humidity: {Math.round(weatherData.humidity)}%</li>
                    <li>💨  Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
                </div>
                <div className="weatherForecast"></div>
                </div>
                <Footer />
            </div>);
    } else {
        const apiKey = "bc7335652f55946eb62094f23f654f47";
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}