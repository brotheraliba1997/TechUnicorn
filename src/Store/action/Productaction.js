import React from 'react'
import axios from 'axios'
import { GET_PRODUCT, GET_PRODUCT_ID } from '../../constants'

export const getProductByAction=()=>async(dispatch)=>{
    await axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        dispatch({
            type:GET_PRODUCT,
            payload:res.data
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

export const getProductByIdAction = (obj) => async (dispatch) => {
  await axios.get(`https://fakestoreapi.com/products/${obj}`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCT_ID,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
