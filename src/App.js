import React from "react";
import "./styles.css";
//import Forecast from "./Forecast";
import WeatherToday from "./WeatherToday";
//import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="
        WeatherApp"
        >
          <WeatherToday city="Doncaster" />
          <footer className="footer">
            <a href="https://github.com/GraceJ0105/weather-react-app">
              Open source
            </a>{" "}
            code, by Grace Johnson
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
