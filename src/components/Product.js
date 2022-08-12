import React from "react";

import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <>
      <div className="container text-center">
        {" "}
        <h3>Click on Products to Add on Cart</h3>
        <div
          className="row row-cols-2 row-cols-md-4 g-4"
          style={{ margin: "5px 0px" }}
        >
          <ProductCard />
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
};

export default Product;
