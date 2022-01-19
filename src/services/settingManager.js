import { LSManager } from "./lsManager";
import { themeList } from "../types";

export class SettingManager {
  static themeKey = "theme";
  static topArtists = "topArtists";
  static artistList = "artistList";

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

  static getTopArtists() {
    try {
      const topArtists = JSON.parse(LSManager.getLS(this.topArtists));
      return topArtists;
    } catch {
      return [];
    }
  }

  static setTopArtists(data) {
    LSManager.setLS(
      this.topArtists,
      JSON.stringify([...this.getTopArtists(), ...data])
    );
  }

  static getArtistList() {
    try {
      const artistList = JSON.parse(LSManager.getLS(this.artistList));
      return artistList;
    } catch {
      return {};
    }
  }

  static setArtistList(data) {
    const artistList = this.getArtistList();
    const artistName = Object.keys(data)[0];
    artistList[artistName] = data[artistName];
    LSManager.setLS(this.artistList, JSON.stringify(artistList));
  }
}
