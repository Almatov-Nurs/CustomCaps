import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    products: [],
    load: false
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const {data} = await axios.get("http://164.92.190.147:8002/api/v1/caps/");
    let products = [];
    for (let i = 1; i <= Math.ceil(data.count / 3); i++) {
        const response = await axios.get(`http://164.92.190.147:8002/api/v1/caps/?page=${i}`);
        response.data.results.forEach(e => products.push(e));
    }
    return products;
});

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state)=>{
                state.load = true;
            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.products = action.payload;
                state.load = false;
            });
    }
});

export default ProductsSlice.reducer;
export const ProductsSelect = state => state.caps.products;
export const LoadSelect = state => state.caps.load;