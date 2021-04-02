import React from "react";
import NewsData from "../data/data.json";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Container } from "react-bootstrap";


export default function Post(props) {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>{NewsData.news[props.id].title}</h1>
          <p>{NewsData.news[props.id].content}</p>
          <p className="date">{NewsData.news[props.id].date}</p>
        </Container>
      </Jumbotron>
    </div>
  );
}
