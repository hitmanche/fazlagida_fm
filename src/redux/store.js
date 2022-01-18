import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import settingSlice from "./slice/settingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    setting: settingSlice,
  },
});
