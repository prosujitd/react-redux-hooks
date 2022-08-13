import axios from "axios";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
} from "./productTypes";

const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

const fetchProductSuccess = (products) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    
    dispatch(fetchProductRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const users = res.data;
        dispatch(fetchProductSuccess(users));
      })
      .catch((error) => {
        const err = error.message;
        dispatch(fetchProductFailure(err));
      });
  };
};
