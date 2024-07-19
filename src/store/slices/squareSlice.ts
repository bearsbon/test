import { createSlice } from "@reduxjs/toolkit";
import { getRandomColor } from "../../shared/utils/helpers";
import { ISquare } from "../../shared/types/types";

const squareSlice = createSlice({
  name: "squares",
  initialState: [] as ISquare[],
  reducers: {
    addSquare: (state) => {
      state.unshift({ id: Date.now(), color: getRandomColor() });
    },
    removeSquare: (state) => {
      state.pop();
    },
  },
});

export const { addSquare, removeSquare } = squareSlice.actions;
export default squareSlice.reducer;
