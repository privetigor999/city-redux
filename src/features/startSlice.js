import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isStarted: false,
};

export const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    isStartedGame: (state, action) => {
      state.isStarted = action.payload;
    },
  },
});

export const { isStartedGame } = startSlice.actions;
export default startSlice.reducer;
