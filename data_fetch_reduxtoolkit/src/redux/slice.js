"use client";

import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  data: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      dispatch(getData(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default dataSlice.reducer;
