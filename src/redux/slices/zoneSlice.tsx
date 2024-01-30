import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sizeMap: number = 1280 / 25;

export interface zoneState {
  offsetZone: number;
  zone: number;
}

const initialState: zoneState = {
  offsetZone: 0,
  zone: sizeMap * 12,
};

export const zoneSlice = createSlice({
  name: "zone",
  initialState,
  reducers: {
    setOffsetZone: (state, action: PayloadAction<number>): void => {
      state.offsetZone = action.payload;
    },
    setZone: (state, action: PayloadAction<number>): void => {
      state.zone = action.payload;
    },
  },
});

export const { setOffsetZone, setZone } = zoneSlice.actions;

export default zoneSlice.reducer;
