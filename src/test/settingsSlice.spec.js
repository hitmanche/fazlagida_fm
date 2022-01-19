import settingsSlice, {
  setTheme,
  setAlertMessage,
} from "../redux/slice/settingSlice";

describe("settings reducer", () => {
  const initialState = {
    theme: "light",
    alertMessage: "",
  };
  it("should handle initial state", () => {
    expect(settingsSlice(undefined, { type: "unknown" })).toEqual({
      theme: "light",
      alertMessage: "",
    });
  });

  it("should handle setTheme", () => {
    const actual = settingsSlice(initialState, setTheme("dark"));
    expect(actual.theme).toEqual("dark");
  });

  it("should handle setAlertMessage", () => {
    const actual = settingsSlice(initialState, setAlertMessage("test"));
    console.log(actual)
    expect(actual.alertMessage).toEqual("test");
  });
});
