import { ADD_CART, CART_ADD_QUANTITY, CART_REMOVE_ITEM, CART_REMOVE_QUANTITY } from "../../constants"


export const addCartAction = (obj) => async (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: obj,
  });
};
export const addQuantityAction = (obj) => async (dispatch) => {
    console.log('data',obj)
  dispatch({
    type: CART_ADD_QUANTITY,
    payload: obj,
  });
};
export const removeQuantityAction = (obj) => async (dispatch) => {
  dispatch({
    type: CART_REMOVE_QUANTITY,
    payload: obj,
  });
};
export const removeCartAction = (obj) => async (dispatch) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: obj,
  });
};
