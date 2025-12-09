import React from "react";
import lap from "./assets/laptop.png";
import mob from "./assets/mobile.png";
import "./App.css";

function App() {
  const productlist = [
    {
      name: "Laptop",
      discription: "This is a laptop",
      price: 2000,
      image: lap,
    },
    {
      name: "Mobile",
      discription: "This is a mobile",
      price: 1000,
      image: mob,
    },
  ];

  return (
    <div className="app">
      <div className="product-page">
        <h1 className="title">PRODUCT LIST</h1>

        <div className="product-list">
          {productlist.map((item, index) => (
            <article className="product-card" key={index}>
              <div className="product-card-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="product-card-body">
                <h2 className="product-name">{item.name}</h2>
                <p className="product-description">{item.discription}</p>

                <div className="product-card-footer">
                  <span className="product-price">₹{item.price}</span>
                  <button className="buy-button">Buy Now</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
