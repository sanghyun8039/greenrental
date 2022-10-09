import { configureStore } from "@reduxjs/toolkit";
import rentalReducer from "./features/rentalSlice";
import dayReducer from "./features/daySlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    rental: rentalReducer,
    days: dayReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
