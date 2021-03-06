import "./styles.css";
import WeatherToday from "./WeatherToday";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container WeatherApp">
        <div className="row">
          <WeatherToday defaultCity="Vancouver" />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/GraceJ0105/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open source
        </a>{" "}
        code, by Grace Johnson
      </footer>
    </div>
  );
}
