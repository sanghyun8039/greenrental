import { createSlice } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
  name: "rental",
  initialState: {
    selectedRental: null,
  },
  reducers: {
    selectRental: (state, action) => {
      state.selectedRental = action.payload;
    },
  },
});

export const { selectRental } = rentalSlice.actions;

export const selectResultRental = (state) => state.rental.selectedRental;
export default rentalSlice.reducer;
