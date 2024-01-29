import { createSlice } from "@reduxjs/toolkit";

export interface cityState {
  city: number;
}

const initialState: cityState = {
  city: 3,
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
