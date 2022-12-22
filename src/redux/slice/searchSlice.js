import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getSearch = createAsyncThunk("getSearch/get", (search) => {
    return search;
});

const initialState = {
    search: [],
    load: true
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
                state.load = false;
                state.search = action.payload;
            })
    }
});

export default searchSlice.reducer;