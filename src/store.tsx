import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "./apps/auth/slicer";
const store = configureStore({
  reducer: {
    auth: UserReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
