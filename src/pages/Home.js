import { Container, IconButton, InputBase, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageDropdown from "../components/LanguageDropdown";
import { error, loading, showData } from "../redux/reducers/Reducer";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getCountryAsync } from "../redux/actions/Action";
import AllCountriesMapmethod from "../components/home/AllCountriesMapmethod";
import IsErrorComp from "../components/IsErrorComp";
import IsLoadingComp from "../components/IsLoadingComp";
import Dropdown from "../components/home/Dropdown";

const CustomBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3rem;
  @media (max-width: 684px) {
    padding-top: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const CustomBoxForlanguageDD = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 684px) {
    padding-top: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 338px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const countries = useSelector(showData);
  const isLoading = useSelector(loading);
  const isError = useSelector(error);
  const [search, setSearch] = useState("");

  // serach the country by this code with the help of search bar
  const filteredCountries = countries.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  // here wew receive the input value to serach the country
  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };
  // this code run only once to get data of all countries
  useEffect(() => {
    if (countries.length <= 0) {
      dispatch(getCountryAsync({ group: "all" }));
    }
  }, [countries]);

  return (
    <React.Fragment>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          px: { xs: "1rem", sm: "2rem" },
        }}
      >
        <CustomBox>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            {/* serach bar code  start*/}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: { xs: "100%", sm: "25rem", md: "31rem" },
                boxShadow: "1px 1px 10px 1px rgba(0,0,0,.13);",
                bgcolor: "background.default",
              }}
            >
              <SearchIcon sx={{ padding: ".5rem 1rem" }} />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={t("Searchforacountry")}
                inputProps={{ "aria-label": "Search for a country" }}
                onChange={handleSearchChange}
              />
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              ></IconButton>
            </Paper>
            {/* serachbar code ends */}
          </Box>
          <Box width="100%">
            <CustomBoxForlanguageDD>
              {/* Select option code starts */}
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "1px 1px 10px 1px rgba(0,0,0,.13);",
                  bgcolor: "background.default",
                }}
              >
                {/* Dropdown component contain the subcontinent select dropdown code */}
                <Dropdown />
              </Paper>
              {/* select option code ends */}
              {/* language changer dropdown when screen is small */}
              <Paper
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "flex-end",
                  boxShadow: "1px 1px 10px 1px rgba(0,0,0,.13);",
                  m: "10px 0px",
                  bgcolor: "background.default",
                }}
              >
                <LanguageDropdown />
              </Paper>
            </CustomBoxForlanguageDD>
          </Box>
        </CustomBox>
        {isError && <IsErrorComp />}
        {isLoading && <IsLoadingComp />}
        {/* Map method of the all countries code  */}
        <AllCountriesMapmethod
          filteredCountries={filteredCountries}
          isLoading={isLoading}
          isError={isError}
        />
      </Container>
    </React.Fragment>
  );
}
export default Home;
