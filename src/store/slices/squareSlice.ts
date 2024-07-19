// src/slices/squaresSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface ISquare {
  id: number;
  color: string;
}

const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const squaresSlice = createSlice({
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

export const { addSquare, removeSquare } = squaresSlice.actions;
export default squaresSlice.reducer;
