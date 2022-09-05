import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countOfPlayers: 0,
  names: [],
  isStarted: false,
  pickIndexPlayer: 0,
  cities: ["Москва"],
};

export const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    getCountOfPlayers: (state, action) => {
      state.countOfPlayers = action.payload;
    },
    getNamesOfPlayers: (state, action) => {
      state.names = action.payload;
    },
    clickAddCity: (state, action) => {
      state.cities.push(action.payload);
      state.names[state.pickIndexPlayer].cities.push(action.payload);
      if (state.pickIndexPlayer === state.names.length - 1) {
        state.pickIndexPlayer = 0;
      } else {
        state.pickIndexPlayer += 1;
      }
    },
  },
});

export const { getCountOfPlayers, getNamesOfPlayers, clickAddCity } =
  playersSlice.actions;
export default playersSlice.reducer;
