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
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
