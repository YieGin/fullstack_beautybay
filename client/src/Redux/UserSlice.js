import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("Data/data", async () => {
  return axios.get("/api").then((res) => {
    return res.data.users;
  });
});

const UserSlice = createSlice({
  name: "getUsers",
  initialState: {
    title: [],
  },

  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.title = action.payload;
    },
  },
});

export default UserSlice.reducer;
