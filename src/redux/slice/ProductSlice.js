import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk('product/get', (product)=>{
    return product;
});

const initialState = {
    product: {},
    load: true
};

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.load = true;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.load = false;
            });
    }
});

export default ProductSlice.reducer;