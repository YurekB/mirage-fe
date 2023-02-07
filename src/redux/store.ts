import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loggedInUserSlice from "./loggedInUser";
import loginSlice from "./login";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  loggedIn: loginSlice,
  loggedInUser: loggedInUserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
