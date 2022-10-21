import React from "react";
import axios from "axios";
import { GET_PRODUCT, GET_PRODUCT_ID } from "../../constants";

export const Productreducer = (
  state = { productList: [], individualProduct:{}},
  action
) => {
  switch (action.type) {
    case GET_PRODUCT: {
      return {
        ...state,
        productList: action.payload,
      };
    }
    case GET_PRODUCT_ID: {
      return {
        ...state,
        individualProduct: action.payload,
      };
    }
    default:
      return state;
  }
};
