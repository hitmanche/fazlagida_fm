import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./slice/settingSlice";
import lastfmSlice from "./slice/lastfmSlice";

export const store = configureStore({
  reducer: {
    setting: settingSlice,
    lastfm: lastfmSlice,
  },
});
