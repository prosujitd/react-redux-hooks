import React from "react";
import { ADD_TO_CART } from "./cartTypes";

function addtoCartRequest(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

// function addtoCartSuccess(product) {
//   return {
//     type: ADD_TO_CART,
//     payload: product,
//   };
// }

// function addtoCartFailure(product) {
//   return {
//     type: ADD_TO_CART,
//     payload: product,
//   };
// }

export const addToCart = (product) => {
    console.log('add to cart > ', product);
  return (dispatch) => {
    dispatch(addtoCartRequest(product));
  };
};


// export const removeFromCart = (product) => {
//   return (dispatch) => {
//     addtoCartRequest(product);
//   };
// };
