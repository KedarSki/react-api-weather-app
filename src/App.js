import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Jumbotron, Form, Container, Button } from "react-bootstrap";
import { getWeatherData } from "./data/WeatherApi";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Lodz");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Container className={"cont"}>
        <Jumbotron className={"jumbo"}>
          <h1>Weather Application</h1>
          <p>Check the weather anywhere in the world!</p>
          <inputGroup>
            <Form.Control
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Enter City and Country"
            />
          </inputGroup>
          <Button variant="info" onClick={() => getData()}>
            Search Weather
          </Button>

          {weatherData !== null
            ? ((
                <img
                  src={
                    "https://openweathermap.org/img/w/${weatherData.weather[0].icon}"
                  }
                  alt="imgicon"
                >
                  {" "}
                </img>
              ),
              (<h3>{weatherData.weather[0].main}</h3>),
              (<h2 className={"temperature"}>Temperature</h2>),
              (
                <h1>
                  {parseFloat(weatherData.main.temp - 273.15).toFixed(1)}
                  &deg;C
                </h1>
              ),
              (
                <h3 className={"location"}>
                  <i className={"fa fa-street-view"}> </i>
                  {weatherData.name()} | {weatherData.sys.country}
                </h3>
              ),
              (
                <h6 className={"temperature-range"}>
                  Min:
                  {parseFloat(weatherData.main.temp_min - 273.15).toFixed(1)}
                  &deg;C || Max:
                  {parseFloat(weatherData.main.temp_max - 273.15).toFixed(1)}
                  &deg;C || Humidity: {weatherData.main.humidity}%
                </h6>
              ))
            : null}
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
