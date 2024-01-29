import { configureStore } from "@reduxjs/toolkit";
import zoneSlice from "./slices/zoneSlice";
import citySlice from "./slices/citySlice";
import timeSlice from "./slices/timeSlice";

export const store = configureStore({
  reducer: {
    zoneSlice,
    citySlice,
    timeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
