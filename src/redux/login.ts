import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  loggedIn: boolean;
};

const initialState: initialState = {
  loggedIn: false,
};

export const loginSlice = createSlice({
  name: "loggedIn",
  initialState,

  reducers: {
    logIn: (state: any) => {
      state.loggedIn = true;
    },
    logOut: (state: any) => {
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
