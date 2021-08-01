import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ConversionUnits from "./ConversionUnits";

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
                    <div className="d-flex weatherDetails">
                    <WeatherIcon code={props.data.icon}/>
                        <div className="float-left">
                            <ConversionUnits fahrenheit={props.data.temperature} />
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