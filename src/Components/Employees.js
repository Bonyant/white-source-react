import React, { Component } from "react";
import Person from "./Person";
import Spinner from "./Spinner";

export default class Employees extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=12";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data.results,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    return (
      <div className="mt-10">
        <h1>Our Team</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.people.map((person, index) => (
            <Person
              key={index}
              fname={person.name.first}
              lname={person.name.last}
              img={person.picture.large}
            />
          ))}
        </div>
      </div>
    );
  }
}
