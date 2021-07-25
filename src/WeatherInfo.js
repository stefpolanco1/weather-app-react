import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="weatherInfo">
            <div className="Overview">
                <h1>{props.data.city}</h1>
                <ul>
                    <li>✨<FormattedDate date={props.data.date} /></li>
                    <li>{props.data.description}</li>
                </ul>
                </div>
                <div className="row">
                <div className="col-6">
                    <div className="d-flex weatherTemperature">
                    <img
                        src={props.data.iconUrl}
                        alt={props.data.description}
                        className="icon"
                        width="42"
                    />
                    <div className="float-left">
                        <strong>{Math.round(props.data.temperature)}</strong>
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
                    <li>🥵  Humidity: {Math.round(props.data.humidity)}%</li>
                    <li>💨  Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
                <div className="weatherForecast"></div>
                </div>
        </div>
    );
}