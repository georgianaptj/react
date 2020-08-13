import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from  "./components/button";
import Welcome from "./components/welcome";
import Product from "./components/product"

function App() {
  
  let buttonText: string = "Add to cart";
  let clientName: string = "client";
  let productName: string = "Laptop DELL XPS";
  let stock: number = 6;
  let price: number = 10;

  return (
    <div className="App">
      <Welcome name={clientName}></Welcome>
      <Product name={productName} stock={stock} price={price}></Product>
      <Button data={buttonText}></Button>
    </div>
  );
}

export default App;
