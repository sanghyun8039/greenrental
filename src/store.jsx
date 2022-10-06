import { configureStore } from "@reduxjs/toolkit";
import rentalReducer from "./features/rentalSlice";
import dayReducer from "./features/daySlice";
export const store = configureStore({
  reducer: {
    rental: rentalReducer,
    days: dayReducer,
  },
});

export default store;
