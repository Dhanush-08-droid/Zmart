import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from "./src/reducer/counterSlice";
import cartReducer from "./src/reducer/cartSlice";

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer
    },
})