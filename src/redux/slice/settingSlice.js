import { createSlice } from "@reduxjs/toolkit";
import { SettingManager } from "../../services/settingManager";

const initialState = {
  theme: SettingManager.getTheme(),
  alertMessage: "",
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      SettingManager.setTheme(action.payload);
      state.theme = action.payload;
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
  },
});

export const { setTheme, setAlertMessage } = settingSlice.actions;

export const selectTheme = (state) => state.setting.theme;
export const selectAlertMessage = (state) => state.setting.alertMessage;

export default settingSlice.reducer;
