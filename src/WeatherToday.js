import React, { useState } from "react";
import "./WeatherToday.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherToday(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function searchLocation(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "1f58dda5f792abed0d8202f0bd588333";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "1f58dda5f792abed0d8202f0bd588333";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherToday container">
        <form onSubmit={handleSubmit} className="form mt-1">
          <div className="form-group mb-2">
            <input
              className="searchCity form-control"
              type="search"
              placeholder="Search for a city..."
              autoFocus="on"
              autoComplete="off"
              onChange={updateCity}
            />{" "}
            <div className="searchButtons mt-3">
              <input
                type="submit"
                value="Search"
                className="searchButton btn btn-dark"
              />
              <input
                type="submit"
                value="Current"
                className="currentButton btn btn-secondary"
                onClick={getCurrentLocation}
              />
            </div>
          </div>
        </form>

        <div className="row weatherRow">
          <div className="col-sm">
            <h1 className="city">{weatherData.city}</h1>
            <FormattedDate date={weatherData.date} />
            <Temperature temp={weatherData.temperature} />
            <WeatherIcon code={weatherData.icon} size={60} />
          </div>
          <div className="WeatherInfo col-sm mt-2">
            <ul>
              <li>
                <span className="weatherSubject">Wind Speed:</span>{" "}
                {weatherData.wind}km/h
              </li>
              <li>
                <span className="weatherSubject">Humidity:</span>{" "}
                {weatherData.humidity}%
              </li>
              <li className="text-capitalize">
                <span className="weatherSubject">Conditions:</span>{" "}
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <WeatherForecast lon={weatherData.lon} lat={weatherData.lat} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
