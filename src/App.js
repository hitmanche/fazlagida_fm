import React from "react";
import "./App.css";
import ThemeProviderComponent from "@/components/base/themeProvider";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, setTheme } from "./redux/slice/settingSlice";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Copyright from "@/components/partial/copyRight";
import TopArtists from "./components/partial/topArtists";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ArtistDetail from "./components/partial/artistDetail";
import MessageProvider from "./components/base/messageProvider";

function App() {
  const dispatch = useDispatch();
  const rdTheme = useSelector(selectTheme);

  return (
    <BrowserRouter>
      <ThemeProviderComponent>
        <AppBar position="relative">
          <Toolbar>
            <Link to="" style={{ color: "white", textDecoration: "none" }}>
              Fazla Gıda FM
            </Link>
            &nbsp;&nbsp;
            <Button
              variant="contained"
              color="success"
              onClick={() =>
                dispatch(setTheme(rdTheme === "dark" ? "light" : "dark"))
              }
            >
              {(rdTheme === "dark" ? "light" : "dark") + " theme"}
            </Button>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Container>
              <MessageProvider />
              <Routes>
                <Route index element={<TopArtists />} />
                <Route path="artist" element={<ArtistDetail />} />
                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md"></Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Fazla Gıda FM
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Case application prepared for "Fazla Gıda"
          </Typography>
          <Copyright />
        </Box>
      </ThemeProviderComponent>
    </BrowserRouter>
  );
}

export default App;
