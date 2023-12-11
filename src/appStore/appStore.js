import { configureStore } from "@reduxjs/toolkit"
import rootReucer from "./rootReducer";

const appStore = configureStore({
    reducer:rootReucer
});

export default appStore