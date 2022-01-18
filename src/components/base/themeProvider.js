import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/settingSlice";

export default function ThemeProviderComponent(props) {
  const rdTheme = useSelector(selectTheme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: rdTheme,
        },
      }),
    [rdTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props?.children}
    </ThemeProvider>
  );
}
