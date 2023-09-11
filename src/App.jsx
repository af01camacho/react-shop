import Navbar from "./components/Navbar/main";
import ProductList from "./components/ProductList/main";
import { data } from "./data/products";
import './App.css'
import { useState } from "react";

function App() {
  const [listProduct, setListProduct]= useState([])
  console.log(listProduct)

  return (
    <div className="">
      <Navbar listProduct={listProduct} setListProduct={setListProduct} products={data} />
      <ProductList listProduct={listProduct} setListProduct={setListProduct} products={data} />
    </div>
  );
}

export default App;
