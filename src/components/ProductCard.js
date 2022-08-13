import React from "react";
import mystyle from "./product.module.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actionCreator";

const ProductCard = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <>
      {products.length > 0 &&
        products.map((p) => {
          return (
            <div key={p.id} className={mystyle.card}>
              <h6>{p.category}</h6>
              <div className="card">
                <img
                  src="https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I"
                  style={{ height: "170px" }}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <h5 className="card-title">${p.price}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(p.title))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard;
