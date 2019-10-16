import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/components/HomePage";
import PageNotFound from "./PageNotFound";
import Result from "../src/components/Result";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h1>Finding Falcone</h1>
        </Col>
      </Row>
      <br />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/result" component={Result} />
        <Route component={PageNotFound} />
      </Switch>{" "}
    </Container>
  );
}

export default App;
