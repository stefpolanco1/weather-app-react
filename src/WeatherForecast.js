import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Sun</div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">73° | 
                        </span> 
                        <span className="WeatherForecast-temperature-min"> 24°
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}