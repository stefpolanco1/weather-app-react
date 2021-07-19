import React from "react";
import Form form "./Form";

export default function Weather() {
    return (<div className="Weather">
    <Form />
    <div className="Overview">
      <h1>Boston</h1>
      <ul>
        <li>
          ✨ Last Updated: <span>Sunday 14:00</span>
        </li>
        <li>Cloudy</li>
      </ul>
    </div>
    <div className="row">
      <div className="col-6">
        <div className="d-flex weatherTemperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Cloudy"
            className="icon"
            width="42"
          />
          <div className="float-left">
            <strong>45</strong>
            <span className="units">
              <a href="#" class="active">
                °F
              </a>{" "}
              |<a href="#">°C</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>🥵 Humidity: 20%</li>
          <li>💨 Wind: 4 km/h</li>
        </ul>
      </div>
      <div className="weatherForecast"></div>
    </div>
    </div>);
}