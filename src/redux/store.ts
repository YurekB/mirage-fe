import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login";

const store = configureStore({
  reducer: { loggedIn: loginSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
