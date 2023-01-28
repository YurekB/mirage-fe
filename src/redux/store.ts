import { configureStore } from "@reduxjs/toolkit";
import loggedInUserSlice from "./loggedInUser";
import loginSlice from "./login";

const store = configureStore({
  reducer: { loggedIn: loginSlice, loggedInUser: loggedInUserSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
