import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import settingSlice from "../redux/slice/settingSlice";
import lastfmSlice from "../redux/slice/lastfmSlice";

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        setting: settingSlice,
        lastfm: lastfmSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
