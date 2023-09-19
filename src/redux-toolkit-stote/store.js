import { configureStore } from "@reduxjs/toolkit";
import productRed from "./slices/ProductSlice";
import cartRed from './slices/CartSlice';

import thunk from "redux-thunk";

export const store = configureStore({
    reducer: { products: productRed, cart: cartRed, },
    middleware: [thunk],
})