import "./styles.css";

import WeatherToday from "./WeatherToday";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container WeatherApp">
        <div class="row">
          <Search />
        </div>
        <div class="row">
          <WeatherToday />
        </div>
       
      </div>
    </div>
  );
}
