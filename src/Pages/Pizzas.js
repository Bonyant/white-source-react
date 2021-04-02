import React from "react";
import PizzaData from "../data/data.json";
import Pizza from "../Components/Pizza";

export default function Pizzas() {
  return (
    <div className="flexview">
      {PizzaData.pizza.map((pizza, index) => {
        return <Pizza key={index} id={index} />;
      })}
    </div>
  );
}
