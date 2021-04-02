import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, color: "#111"};
  }

  componentDidMount(){
      this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
      clearInterval(this.timerID);
  }

  tick() {
      this.setState(state => ({
          seconds: state.seconds + 1,
          color: Math.floor(Math.random()*16777215).toString(16)
      }));
  }

  render() {
    return <h2 style={{ color: "#" + this.state.color, textAlign: "center", margin: "20px 0 0 0" }}>Timer: {this.state.seconds}</h2>
  }
}
