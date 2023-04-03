import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useTranslation } from "react-i18next";
import { getCountryAsync } from "../../redux/actions/Action";
import { useDispatch } from "react-redux";

function Dropdown() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [group, setGroup] = useState("");
  // here we select the subcontinent to get there details
  const handleSubcontinet = (event) => {
    setGroup(event.target.value);
  };
  // this code will get the data related to the region selection dropdown
  useEffect(() => {
    if (group !== "") dispatch(getCountryAsync({ group }));
  }, [dispatch, group]);
  return (
    <React.Fragment>
      <FormControl sx={{ minWidth: { sx: "8rem", sm: "12rem" } }}>
        <Select
          value={group}
          onChange={handleSubcontinet}
          displayEmpty
          size="small"
          IconComponent={KeyboardArrowDownIcon}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            "& .MuiSelect-select": {
              Width: { sx: "8rem", sm: "10rem" },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="" disabled>
            {" "}
            {t("Filterbyregions")}
          </MenuItem>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="region/africa">Africa</MenuItem>
          <MenuItem value="region/americas">America</MenuItem>
          <MenuItem value="region/asia">Asia</MenuItem>
          <MenuItem value="region/europe">Europe</MenuItem>
          <MenuItem value="region/oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
export default Dropdown;