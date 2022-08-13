import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actionCreator";
import Loader from "./loader/Loader";
import ProductCard from "./ProductCard";

// import * as actionCreators from "../redux/actionCreator"; // Method-II using bindActionCreators
// import { bindActionCreators } from "redux"; // Method-II using bindActionCreators

function Product() {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const {fetchProducts} = bindActionCreators(actionCreators, dispatch); // Method-II using bindActionCreators

  useEffect(() => {
    // fetchProducts(); // // Method-II using bindActionCreators
    dispatch(fetchProducts());
  }, []);

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
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
