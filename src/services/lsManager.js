import cryptojs from "crypto-js";

export class LSManager {
  static lsKey = process.env.REACT_APP_LSM_KEY || "";

  static setLS(key, value) {
    const encValue = cryptojs.AES.encrypt(value, this.lsKey).toString();
    localStorage.setItem(key, encValue);
  }

  static getLS(key) {
    const encValue = localStorage.getItem(key) || "";
    const decValue = cryptojs.AES.decrypt(encValue, this.lsKey);
    var originalText = decValue.toString(cryptojs.enc.Utf8);
    return originalText;
  }
}
