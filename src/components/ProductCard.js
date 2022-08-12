import React from "react";

import mystyle from "./product.module.css";

const ProductCard = () => {
  return (
    <div className={mystyle.card}>
      <div className="card">
        <img
          src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
          style={{ height: "170px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Product title</h5>
          <h6 className="card-title">Price</h6>
          <p className="card-text">
            Product descriptions goes here
          </p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
