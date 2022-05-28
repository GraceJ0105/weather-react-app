import React, { useState, useEffect } from "react";
import "./Temperature.css";

export default function City(props) {
  let [temperature, setTemperature] = useState(props.temp);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temp * (9 / 5) + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(Math.round(props.temp));
  }

  useEffect(() => {
    setTemperature(Math.round(props.temp));
  }, [props.temp]);

  return (
    <div className="Temperature">
      {temperature}{" "}
      <a href="/" onClick={showCelsius}>
        °C
      </a>
      |{" "}
      <a href="/" onClick={showFahrenheit}>
        °F
      </a>
    </div>
  );
}
