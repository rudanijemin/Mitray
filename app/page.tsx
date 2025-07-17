import React from "react";
import { getAllProducts } from "./lib/productContentful";
import Home from "./home/page";

export default async function Main() {

  const products = await getAllProducts();
    console.log("products", products);
  return (
    <>
    <Home/>
    </>
  )
}
