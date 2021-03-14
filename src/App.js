import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Jumbotron, Form, Container, Button } from "react-bootstrap";
import { WiDaySunny } from "weather-icons-react";

function App() {
  return (
    <div className="App">
      <Container className={"cont"}>
        <Jumbotron className={"jumbo"}>
          <h1>Weather Application</h1>
          <p>Check the weather anywhere in the world!</p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter City and Country" />
            </Form.Group>
            <Button variant="info">Search Weather</Button>{" "}
          </Form>
          <i className={"fa fa-sun"}></i>
          <h3>Sunny</h3>
          <h2 className={"temperature"}>Temperature</h2>
          <h1>25&deg;C</h1>
          <h3 className={"location"}>
            <i className={"fa fa-street-view"}> </i>
            Lodz | Poland
          </h3>
          <h6 className={"temperature-range"}>
            Min: 25&deg;C || Max: 28&deg;C || Humidity: 10%
          </h6>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
