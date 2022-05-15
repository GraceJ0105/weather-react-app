import React, { useState } from "react";
import axios from "axios";
import "./WeatherToday.css";
//import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherToday() {
  let [city, setCity] = useState("Vancouver");
  let [temperature, setTemperature] = useState(null);
  let [WeatherUpdate, setWeatherUpdate] = useState("");
  let [windSpeed, setWindspeed] = useState(null);
  let [conditions, setConditions] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      showWeatherUpdate();
    } else {
      alert("Enter a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ed117e2336f8bfb81814225ee1d8f37&units=metric`;
    axios.get(url).then(getWeatherUpdate);
    getWeatherUpdate();
  }

  function getWeatherUpdate(response) {
    setTemperature(Math.round(response.data.main.temp));
    setWindspeed(response.data.wind.speed);
    setConditions(
      response.data.weather[0].description.charAt(0).toUpperCase() +
        response.data.weather[0].description.slice(1)
    );
    //WeatherImage();
  }

  function showWeatherUpdate() {
    setWeatherUpdate(
      <div>
        <h2>{city}</h2>
        <ul>
          <li>Temperature: {temperature}°C</li>
          <li>Wind Speed: {windSpeed}km/h</li>
          <li>Conditions: {conditions}</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            className="searchCity form-control col-8"
            type="search"
            placeholder="Search for a city..."
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            className="searchButton btn btn-primary mb-2 col-4"
          />
        </form>
      </div>
      <br />
      <div>{WeatherUpdate}</div>
    </div>
  );

  //function WeatherImage(temperature) {
  //if (temperature > 10) {
  //return (
  // <ReactAnimatedWeather
  //  icon="CLEAR_DAY"
  //  color="#000"
  //  size={48}
  // animate={true}
  // />
  // );
  // } else {
  //   alert("it's cold!");
  // }
  //}
}
