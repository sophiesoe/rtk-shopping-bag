import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpened: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpened = true;
    },
    closeModal: (state, action) => {
      state.isOpened = false;
    },
  },
});

export const actions = modalSlice.actions;
export default modalSlice.reducer;
