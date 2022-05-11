import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Weather(props) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=4ed117e2336f8bfb81814225ee1d8f37&units=metric`;
  axios.get(url).then(getWeatherUpdate);

  function getWeatherUpdate(response) {
    alert(`It is ${response.data.main.temp} degrees in ${props.city}`);
  }
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="goldenrod"
      size={512}
      animate="true"
    />
  );
}
