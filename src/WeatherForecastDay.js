import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function formatDate() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day"> {formatDate()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div>
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°C
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}°C
        </span>
      </div>
    </div>
  );
}
