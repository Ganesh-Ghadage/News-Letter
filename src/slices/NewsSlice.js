import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newsArr :[]
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers:{
        setNewsArr: (state, action) => {
            state.newsArr = action.payload
            //console.log(action.payload)
        }
    }
})

export const {setNewsArr} = newsSlice.actions

export default newsSlice.reducer