import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digit: 0,
      color: "#111",
      isDisabled: false,
    };
  }

  handleStart() {
    this.setState(() => ({ isDisabled: true }));
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((state) => ({
      digit: state.digit + 1,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    }));
  }

  handleStop() {
    this.setState(() => ({ isDisabled: false }));
    clearInterval(this.timerID);
  }

  handleReset() {
    this.setState({ digit: 0, color: "#111" });
  }

  render() {
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            margin: "20px 0",
            color: this.state.color,
          }}
        >
          {this.state.digit}
        </h1>
        <Container style={{ textAlign: "center" }}>
          <Button
            variant="success"
            disabled={this.state.isDisabled}
            onClick={() => this.handleStart()}
          >
            Start
          </Button>{" "}
          <Button
            variant="danger"
            disabled={!this.state.isDisabled}
            onClick={() => this.handleStop()}
          >
            Stop
          </Button>{" "}
          <Button
            variant="warning"
            disabled={this.state.isDisabled}
            onClick={() => this.handleReset()}
          >
            Reset
          </Button>{" "}
        </Container>
      </>
    );
  }
}
