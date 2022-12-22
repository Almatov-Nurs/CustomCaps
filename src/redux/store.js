import {configureStore} from "@reduxjs/toolkit";
import ProductsSlice from "./slice/ProductsSlice";
import ProductSlice from "./slice/ProductSlice";
import SearchSlice from "./slice/searchSlice";

export const store = configureStore({
    reducer: {
        caps: ProductsSlice,
        cap: ProductSlice,
        search: SearchSlice
    }
});