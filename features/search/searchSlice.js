import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;

export const searchValue = (state) => ({
  search: state.search.value,
});

export const { inputSearch } = actions;

export default reducer;
