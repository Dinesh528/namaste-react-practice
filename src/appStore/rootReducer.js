import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice/cartSlice";

const rootReucer = combineReducers({
    cart:cartReducer,

})

export default rootReucer;