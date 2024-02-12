import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  user: "",
  token: localStorage.getItem("token") || "",
  loading: false,
};

export const loginUser = createAsyncThunk("user/login", async (userData) => {

  
  return userData;
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  localStorage.removeItem("token");
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.token = "";
      });
  },
});

export default authSlice.reducer;
