import { LSManager } from "./lsManager";
import { themeList } from "../types";

export class SettingManager {
  static themeKey = "theme";

  static getTheme() {
    const theme = LSManager.getLS(this.themeKey);
    if (themeList.includes(theme)) {
      return theme;
    }
    return "light";
  }

  static setTheme(value) {
    LSManager.setLS(this.themeKey, value);
  }
}
