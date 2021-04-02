import React from "react";
import ProductData from "../data/data.json";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export default function Product(props) {
  return (
    <div className="spacepd">
      <CardDeck>
        <Container>
          <Card border="dark" className="prodst">
            <Card.Img
              variant="center"
              src={ProductData.products[props.id].img}
            />
            <Card.Body>
              <Card.Title>{ProductData.products[props.id].title}</Card.Title>
              <Container className="toCenter">
                <Card.Title style={{ fontSize: "17px" }}>{ProductData.products[props.id].price}</Card.Title>
              </Container>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated: {ProductData.products[props.id].date}
              </small>
            </Card.Footer>
          </Card>
        </Container>
      </CardDeck>
    </div>
  );
}
