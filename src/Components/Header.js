import React, { Component } from "react";
import { Container, Navbar, NavLink, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./images/logo192.png";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import News from "../Pages/News";
import Products from "../Pages/Products";
import Numbers from "../Pages/Numbers";
import Team from "../Pages/Team";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="fix">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Home
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
                <NavLink href="/numbers">Numbers</NavLink>
              </Nav>
              <Nav>
                <NavLink href="/news">News</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/team">Our Team</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/numbers" component={Numbers} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/news" component={News} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/team" component={Team} />
          </Switch>
        </Router>
      </>
    );
  }
}
