import React from "react";
import "./WeatherToday.css";
import pic from "./images/rain.png";

export default function WeatherToday() {
  let weatherForecast = {
    day: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    temperature: [10, 12, 15, 16, 17, 21, 22],
    windSpeed: [22, 15, 23],
    humidity: [80, 20, 10],
    precipitation: [10, 30, 55],
  };

  return (
    <div className="WeatherToday container">
      <div className="row">
        <div className="col-sm-8">
          <h2 className="mt-4">
            {weatherForecast.day[2]} {weatherForecast.temperature[2]}°C
          </h2>
          <img src={pic} alt="rain" className="rain" />
        </div>
        <div className="col-sm-4 mt-4">
          <ul>
            <li>Wind Speed:{weatherForecast.windSpeed[1]}km/h</li>
            <li>Humidity:{weatherForecast.humidity[1]}%</li>
            <li>Precipitation:{weatherForecast.precipitation[1]}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
