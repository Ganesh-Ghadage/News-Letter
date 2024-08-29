import { combineSlices } from "@reduxjs/toolkit";
import { newsSlice } from "./NewsSlice";
import { querySlice } from "./QuerySlice";
import { headlineSlice } from "./HeadlineSlice";

export const rootReducer = combineSlices(newsSlice, querySlice, headlineSlice)