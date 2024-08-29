import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    headlines :[]
}

export const headlineSlice = createSlice({
    name: "headline",
    initialState,
    reducers:{
        setHeadlines: (state, action) => {
            state.headlines = action.payload
            //console.log(action.payload)
        }
    }
})

export const {setHeadlines} = headlineSlice.actions

export default headlineSlice.reducer