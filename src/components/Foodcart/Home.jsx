import React,{useState,useContext}from 'react'
import Product from './product'
import './Header.css' // Assuming you have a CSS file for styling
import data from"./products.json";
const Home = () => {
  const [products] = useState(data);
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>

  )
}

export default Home