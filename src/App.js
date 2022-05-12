import React from "react";
import "./styles.css";
//import Forecast from "./Forecast";
import WeatherToday from "./WeatherToday";
//import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container WeatherApp">
        <div className="row">
          <WeatherToday />
        </div>
      </div>
    </div>
  );
}

export default App;
