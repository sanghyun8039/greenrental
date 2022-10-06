import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "day",
  initialState: {
    leftdays: "",
  },
  reducers: {
    setleftDay: (state, action) => {
      state.leftdays = action.payload.leftdays;
    },
  },
});

export const { setleftDay } = daySlice.actions;

export const selectleftDay = (state) => state.day.leftdays;
export default daySlice.reducer;
