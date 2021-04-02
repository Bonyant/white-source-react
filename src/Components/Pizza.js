import React, { Component } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";
import PizzaData from "../data/data.json";

export default class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "30 см",
      price: PizzaData.pizza[this.props.id].price30,
      weight: PizzaData.pizza[this.props.id].weight30
    };
  }
  changeSizePriceGr() {
    if (this.state.size === "30 см") {
      this.setState({
        size: "40 см",
        price: PizzaData.pizza[this.props.id].price40,
        weight: PizzaData.pizza[this.props.id].weight40
      });
    } else {
      this.setState({
        size: "30 см",
        price: PizzaData.pizza[this.props.id].price30,
        weight: PizzaData.pizza[this.props.id].weight30
      });
    }
  }
  render() {
    return (
      <div className="spacepd">
        <Card style={{ width: "19rem" }} className="prodst">
          <Card.Img variant="top" src={PizzaData.pizza[this.props.id].img} />
          <Card.Body>
            <Card.Title>{PizzaData.pizza[this.props.id].title}</Card.Title>
            <Card.Text>{PizzaData.pizza[this.props.id].desc}</Card.Text>
            <Container className="toDown">
            <Form>
              <Form.Check
                type="switch"
                id={PizzaData.pizza[this.props.id].id}
                label={this.state.size}
                onChange={() => {
                  this.changeSizePriceGr();
                }}
              />
              <Card.Title>{this.state.price}</Card.Title>
              <Card.Title style={{ position: "absolute", right: "30px" }}>{this.state.weight}</Card.Title>
              <Button style={{ width: "60%" }} className="contactusBx" variant="primary">Купить</Button>
            </Form>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
