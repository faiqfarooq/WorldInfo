import { Box, MenuItem, Select, SvgIcon } from "@mui/material";
import React, { useState } from "react";
import i18next from "i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactComponent as Britishicon } from "../assets/Images/Language_select/united-kingdom-flag-icon.svg";
import { ReactComponent as SpainIcon } from "../assets/Images/Language_select/spain-flag-icon.svg";
import { ReactComponent as KoreanIcon } from "../assets/Images/Language_select/south_korea.svg";

function LanguageDropdown() {
  const [language, setLanguage] = useState("en");
  const handleChange = (e) => {
    // changeLanguage will change the language which one we select from the dropdown
    i18next.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };
  return (
    <React.Fragment>
      {/* this is language translation dropdown component */}
      <Select
        value={language}
        onChange={handleChange}
        displayEmpty
        IconComponent={KeyboardArrowDownIcon}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: { xs: "none", sm: "1px solid #eeeaee" },
          },
          "& .MuiOutlinedInput-input": {
            padding: { xs: "0.7rem 0.4rem", sm: ".5rem  .4rem" },
            width: "5.5rem",
          },
        }}
      >
        <MenuItem value={"en"}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <SvgIcon
              component={Britishicon}
              sx={{ height: "1.2rem", mr: "0.3rem" }}
              inheritViewBox
            />
            English
          </Box>
        </MenuItem>
        <MenuItem value={"es"}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <SvgIcon
              component={SpainIcon}
              sx={{ height: "1.2rem", mr: "0.3rem" }}
              inheritViewBox
            />
            Spanish
          </Box>
        </MenuItem>
        <MenuItem value={"ko"}>
          <Box display="flex" justifyContent="flex-start" alignItems="center">
            <SvgIcon
              component={KoreanIcon}
              sx={{ height: "1.2rem", mr: "0.3rem" }}
              inheritViewBox
            />
            Korean
          </Box>
        </MenuItem>
      </Select>
    </React.Fragment>
  );
}

export default LanguageDropdown;
