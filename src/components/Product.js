import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, fetchProductRequest } from "../redux/actionCreator";
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
  
          {
            state.products.length>0
            ?<ProductCard products={state.products}/>
            : <Loader/>
          }
     
          

          {/* <div className={mystyle.card}>
            <div className="card">
              <img
                src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
                style={{ height: "170px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Product title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>

          <div className={mystyle.card}>
            <div className="card">
              <img
                src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
                style={{ height: "170px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </>
  );
}

export default Product;
