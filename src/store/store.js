import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "../features/playersSlice";
import startSlice from "../features/startSlice";

export const store = configureStore({
  reducer: {
    players: playersSlice,
    start: startSlice,
  },
});
