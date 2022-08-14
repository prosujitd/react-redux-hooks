import React from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
  isLoading: false,
  error: "",
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
