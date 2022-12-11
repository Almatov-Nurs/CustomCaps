import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    products: []
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=40");
    const products = [];
    for (let i = 0; i < data.results.length; i++) {
        const response = await axios.get(data.results[i].url);
        products.push({
            name: data.results[i].name,
            image: response.data.sprites.other.dream_world.front_default,
            collab: "French Fries Series",
            price: 4500,
        });
    }
    return products;
});

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.products = action.payload;
            });
    }
});

export default ProductsSlice.reducer;
export const ProductsSelect = state => state.caps.products;