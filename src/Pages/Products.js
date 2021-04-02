import React from "react";
import Product from "../Components/Product";
import Pizzas from "./Pizzas";
import ProductData from "../data/data.json";

export default function Products() {
  return (
    <>
      <div className="heading">
        <h1>Phones</h1>
      </div>
      <div className="flexview">
        {ProductData.products.map((post, index) => {
          return <Product id={index} />;
        })}
      </div>
      <hr />
      <div className="heading">
        <h1>Pizzas</h1>
      </div>
      <Pizzas />
    </>
  );
}
