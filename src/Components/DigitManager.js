import React, { Component } from "react";
import {Button, Container} from "react-bootstrap";

export default class DigitManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
      color: "blue"
    };
  }

  handleInc() {
    this.setState((state) => ({
      digit: state.digit + 1,
    }));
  }

  handleDec() {
    this.setState((state) => ({
      digit: state.digit - 1,
    }));
  }

  handleReset() {
    this.setState({
      digit: 0,
      color: "blue"
    });
  }

  handleColor() {
    this.setState({
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    });
  }

  render() {
    return (
      <>
        <h1
          style={{
            color: this.state.color,
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          {this.state.digit}
        </h1>
        <Container style={{ textAlign: "center" }}>
        <Button variant="success" onClick={() => this.handleInc()}>
          +
        </Button>{" "}
        <Button variant="danger" onClick={() => this.handleDec()}>
          -
        </Button>{" "}
        <Button variant="warning" onClick={() => this.handleReset()}>
          Reset
        </Button>{" "}
        <Button variant="info" onClick={() => this.handleColor()}>
          Color
        </Button>
        </Container>
      </>
    );
  }
}
