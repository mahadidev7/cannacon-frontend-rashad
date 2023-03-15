import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLogin } from "./usersApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  user: {},
  users: [],
};

export const loginUser = createAsyncThunk("users/loginUser", async (data) => {
  const user = await getLogin(data);
  return user;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isError = false;
        state.error = null;
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.user = {};
      });
  },
});

export default usersSlice.reducer;
