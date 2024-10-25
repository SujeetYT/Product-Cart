import { configureStore } from "@reduxjs/toolkit";
import GetProductsReducer from "./slices/GetProducts";
import CartSliceReducer from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    getProducts: GetProductsReducer,
    cart: CartSliceReducer
  }
})

export type AppDispatch = typeof store.dispatch;