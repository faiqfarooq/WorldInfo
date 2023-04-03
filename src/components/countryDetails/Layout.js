import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import {
  singleCountryCurrencies,
  singleCountryDetails,
  singleCountryTopLevelDomain,
  singleCountrylanguages,
} from "../../redux/reducers/Reducer";
import { useTranslation } from "react-i18next";
import { addCommonsTothePopulation } from "../../utils/utilities";

function Layout() {
  const { t } = useTranslation();
  const singleCountry = useSelector(singleCountryDetails);
  const languages = useSelector(singleCountrylanguages);
  const Currencies = useSelector(singleCountryCurrencies);
  const topLevelDomain = useSelector(singleCountryTopLevelDomain);
  const { nativeName, population, region, subregion, capital } = singleCountry;

  return (
    <React.Fragment>
      {/* this component contils the code of country detail page details like native name,population etc */}
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          pl: { xs: "0", sm: "0", md: "4.5rem" },
          pt: { xs: "1rem", sm: "2rem" },
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: "0 0 62%" }}>
          <Box display="flex" flexWrap="wrap">
            {/* we are using the i18next library to change the language thats why it look differnt */}
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.NativeName")}:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {nativeName}
            </Typography>
          </Box>
          <Box display="flex" py="0.2rem" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.Population")}:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* sending the population number to the funvtion to add commons between them */}
              {addCommonsTothePopulation(population)}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.Region")}:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {region}
            </Typography>
          </Box>
          <Box display="flex" py="0.2rem" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.SubRegion")}:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {subregion}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.Capital")}:{" "}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {capital}
            </Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          sx={{ flex: "0 0 38%", pt: { xs: "1.8rem", sm: "0" } }}
        >
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.TopLevelDomain")}:{" "}
            </Typography>
            {topLevelDomain.map((data, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {data}
              </Typography>
            ))}
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap" py="0.2rem">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.Currencies")}:{" "}
            </Typography>
            {Currencies.map((data, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {data.name}
              </Typography>
            ))}
          </Box>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Typography variant="body1" mr="0.3rem">
              {t("CountryDetails.Languages")}:{" "}
            </Typography>
            {languages.map((data, index) => (
              <Typography key={index} variant="body2" color="text.secondary">
                {data.name},
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
export default Layout;
