import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, Suspense, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import NorthIcon from '@mui/icons-material/North';
import ScrollToTop from "react-scroll-to-top";
import DetailedCountryPage from "./pages/DetailedCountryPage";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 684,
            md: 986,
            lg: 1290,
            xl: 1536,
          },
        },
        typography: {
          h3: {
            fontSize: "1.4rem",
            fontWeight: 700,
          },
          body1: {
            fontSize: "1rem",
            fontWeight: 600,
          },
          body2: {
            fontSize: ".95rem",
            fontWeight: 500,
          },
          fontFamily:'Nunito Sans'
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#fafafa ",
                },
              }
            : {
                background: {
                  default: "#202c37 ",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="loading">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/country/:details"
                element={<DetailedCountryPage />}
              />
              <Route path="/*" element={<Nopage />} />
            </Routes>
            <ScrollToTop smooth top={100} component={<NorthIcon />} />
            <Footer />
          </BrowserRouter>
        </Suspense>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
