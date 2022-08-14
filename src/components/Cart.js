import React from "react";
import ProductCard from "./ProductCard";
import Loader from "./loader/Loader";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  return (
    <>
      <div className="container text-center">
        <div
          className="row row-cols-2 row-cols-md-4 g-4"
          style={{ margin: "5px 0px" }}
        >
          {/* 

          <button onClick={()=>dispatch(fetchProducts())}>using dispatch function</button>
          <button onClick={fetchProducts}>using bindActionCreators</button> */}

          {state.products.length > 0 ? (
            <ProductCard products={state.products} />
          ) : (
            <p style={{ margin: "auto", padding: "50px" }}>
              Your Cart is Empty
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
