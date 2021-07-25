import React, { useState } from "react";
import "./Weather.css";
import Footer from "./Footer";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState (props.defaultCity);
    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }
    function search() {
        const apiKey = "bc7335652f55946eb62094f23f654f47";
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);  
    }
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <div>
                    <form onSubmit={handleSubmit} className="mb-3">
                        <div className="row">
                        <div className="col-9">
                            <input
                            type="search"
                            placeholder="Search a city 🏙..."
                            className="form-control"
                            id="city-input"
                            autocomplete="off"
                            onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                        </div>
                    </form>
                    <WeatherInfo data={weatherData} />
                </div>
                <Footer />
            </div>
        );
    } else {
        search();
        return "Loading...";
    }
}