import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  SvgIcon,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { ColorModeContext } from "../App";
import { ReactComponent as sunIcon } from "../assets/Images/mood change/sun-svgrepo-com.svg";
import { ReactComponent as moonIcon } from "../assets/Images/mood change/moon-svgrepo-com.svg";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t } = useTranslation();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Container disableGutters maxWidth="xl">
      <AppBar position="static" sx={{ bgcolor: "background.default" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            boxShadow: "1px 6px 15px 0 rgba(0,0,0,.15)",
            px: { xs: "1rem", sm: "2rem" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              color="text.primary"
              sx={{
                fontSize: { md: "1.5rem", sm: "1.3rem", xs: "0.9rem" },
                fontWeight: 800,
              }}
            >
              {t("Whereintheworld")}
            </Typography>
          </Link>

          <Box display="flex" alignItems="center">
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <LanguageDropdown />
            </Box>
            {/* this button is changing the mode, onClick we are traggering the color mode via useContext   */}
            <Button
              sx={{ ml: 1, border: { xs: "none", sm: "1px solid #eeeaee" } }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {/* Changing the mode icon and name from dark to light and sun icon to moon by this code */}
              {theme.palette.mode === "dark" ? (
                <>
                  <SvgIcon
                    component={sunIcon}
                    color="text.primary"
                    inheritViewBox
                    fontSize="small"
                    sx={{ mr: ".3rem" }}
                  />
                  <Typography
                    color="text.primary"
                    sx={{
                      textTransform: "none",
                      fontSize: { sm: "1rem", xs: ".8rem" },
                    }}
                  >
                    {" "}
                    {t("LightMode")}
                  </Typography>{" "}
                </>
              ) : (
                <>
                  <SvgIcon
                    component={moonIcon}
                    color="text.primary"
                    inheritViewBox
                    sx={{
                      mr: ".3rem",
                      height: { sm: "1.3rem", xs: "1rem" },
                      width: { sm: "1.3rem", xs: "1rem" },
                    }}
                  />
                  <Typography
                    color="text.primary"
                    sx={{
                      textTransform: "none",
                      fontSize: { sm: "1rem", xs: ".8rem" },
                    }}
                  >
                    {t("DarkMode")}
                  </Typography>{" "}
                </>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
