import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import moment from "moment-timezone";
import "moment/locale/ru";

export interface timeState {
  time: moment.Moment;
}

const initialState: timeState = {
  time: moment(),
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<moment.Moment>): void => {
      state.time = action.payload;
    },
  },
});

export const { setTime } = timeSlice.actions;

export default timeSlice.reducer;
