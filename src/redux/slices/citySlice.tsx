import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface cityState {
  city: string;
}

const initialState: cityState = {
  city: "3",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>): void => {
      state.city = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
