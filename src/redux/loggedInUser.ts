import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateObj = {
  loggedInUser: string;
};

const initialState: initialStateObj = {
  loggedInUser: "",
};

export const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState,

  reducers: {
    changeLoggedInUser: (state: any, action: PayloadAction<string>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { changeLoggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
