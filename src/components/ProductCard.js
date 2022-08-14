import React, { useEffect, useState } from "react";
import mystyle from "./product.module.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actionCreator";
import { useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { products } = props;
  const location = useLocation();
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const productState = useSelector((state) => state.product);

  const unselected = (item) => {
    return !cartState.products.includes(item);
  };



  return (
    <>
      {location.pathname === "/cart"
        ? products.length > 0 &&
          products.map((p) => {
            return (
              <div key={p.id} className={mystyle.card}>
                <p>cart ko</p>
                <h6>{p.category}</h6>
                <div className="card">
                  <img
                    src={p.image}
                    style={{ height: "170px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <h5 className="card-title">${p.price}</h5>
                    {location.pathname === "/cart" ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => dispatch(removeFromCart(p.id))}
                        >
                          Remove From Cart
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        : products.length > 0 &&
          products.filter(p => !cartState.products.includes(p)).map((p) => {
            return (
              <div key={p.id} className={mystyle.card}>
                <h6>{p.category}</h6>
                <div className="card">
                  <img
                    src={p.image}
                    style={{ height: "170px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <h5 className="card-title">${p.price}</h5>
                    {location.pathname === "/cart" ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => dispatch(removeFromCart(p.id))}
                        >
                          Remove From Cart
                        </button>
                      </>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => dispatch(addToCart(p))}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};

export default ProductCard;
