import { configureStore } from "@reduxjs/toolkit";
import squaresReducer from "./slices/squareSlice";

export const store = configureStore({
  reducer: {
    squares: squaresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
