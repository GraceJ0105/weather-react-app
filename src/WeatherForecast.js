import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [weatherForecastData, setWeatherForecastData] = useState({
    loaded: false,
  });

  function handleForecastResponse(response) {
    setWeatherForecastData({
      loaded: true,
      data: response.data.daily,
    });
  }
  useEffect(() => {
    setWeatherForecastData({
      loaded: false,
    });
  }, [props.lon]);

  if (weatherForecastData.loaded) {
    return (
      <div className="WeatherForecast row">
        {weatherForecastData.data.map(function (dailyForecast, index) {
          if (index > 0 && index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "1f58dda5f792abed0d8202f0bd588333";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
