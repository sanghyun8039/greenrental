import { createSlice } from "@reduxjs/toolkit";

const daySlice = createSlice({
  name: "days",
  initialState: {
    leftdays: null,
  },
  reducers: {
    setleftDay: (state, action) => {
      state.leftdays = action.payload.leftdays;
    },
  },
});

export const { setleftDay } = daySlice.actions;

export const selectleftDay = (state) => state.days.leftdays;
export default daySlice.reducer;
