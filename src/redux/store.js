import {configureStore} from "@reduxjs/toolkit";
import ProductsSlice from "./slice/ProductsSlice";

export const store = configureStore({
    reducer: {
        caps: ProductsSlice,
    }
});