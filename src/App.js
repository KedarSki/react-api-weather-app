import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Jumbotron, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Jumbotron className={"jumbo"}>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
