import React from "react";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./productTypes";

const initialState = {
  isLoading: false,
  products: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: "",
        isLoading: false,
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        products: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default productReducer;
