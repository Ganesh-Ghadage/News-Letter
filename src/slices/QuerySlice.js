import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: "india"
}

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        }
    }
})

export const {setQuery} = querySlice.actions

export default querySlice.reducer