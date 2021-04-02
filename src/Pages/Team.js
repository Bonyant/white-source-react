import React from "react";
import { Container } from "react-bootstrap";
import Employee from "../Components/Employee";
import Employees from "../Components/Employees";

export default function Team() {
  return (
    <Container>
      <Employee />
      <Employees />
    </Container>
  );
}
