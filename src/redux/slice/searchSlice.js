import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getSearch = createAsyncThunk("getSearch/get", (search) => {
    return search;
});

const initialState = {
    search: [],
    load: false
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, (state) => {
                state.load = true;
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.search = action.payload;
                state.load = false;
            })
    }
});

export default searchSlice.reducer;