import React from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

function addtoCartRequest(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
}

function removeFromCartRequest(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
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
  return (dispatch) => {
    dispatch(addtoCartRequest(product));
  };
};


export const removeFromCart = (id) => {
  return (dispatch) => {
    dispatch(removeFromCartRequest(id));
  };
};
