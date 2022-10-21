import {
  ADD_CART,
  CART_ADD_QUANTITY,
  CART_REMOVE_ITEM,
  CART_REMOVE_QUANTITY,
} from "../../constants";

export const CartReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_CART: {
      let productFind = state.cart.find((x) => x.id == action.payload.id);
      if (productFind) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id == productFind.id
              ? {
                  ...x,
                  quantity: productFind.quantity + action.payload.quantity,
                  totalPrice:
                    productFind.totalPrice + action.payload.totalPrice,
                }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }
    case CART_ADD_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id == action.payload.id
            ? {
                ...x,
                quantity: x.quantity + 1,
                totalPrice: x.totalPrice + parseFloat(x.price),
              }
            : x
        ),
      };
    }
    case CART_REMOVE_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id == action.payload.id
            ? {
                ...x,
                quantity: x.quantity - 1,
                totalPrice: x.totalPrice - action.payload.price,
              }
            : x
        ),
      };
    }
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((x) =>
          x.id != action.payload.id
        ),
      };
    }

    default: {
      return state;
    }
  }
};
