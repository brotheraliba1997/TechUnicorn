import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducer/CartReducer";
import { Productreducer } from "./reducer/productreducer";


const reducer = combineReducers({
  products: Productreducer,
  carts:CartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);
