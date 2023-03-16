import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.value = !state.value;
    },
  },
});

const { actions, reducer } = darkSlice;

export const isDarkMode = (state) => ({
  dark: state.dark.value,
});

export const { switchDarkMode } = actions;

export default reducer;
