import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import createReducer from "./features/carts/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    carts: createReducer,
  },
});
export default store;
