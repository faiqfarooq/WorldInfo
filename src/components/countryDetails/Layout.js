import { Box, Grid, Typography } from "@mui/material";
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          {/* we are using the i18next library to change the language thats why it look differnt */}
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.NativeName")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {nativeName}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center" >
          <Typography variant="body1" mr="0.3rem" sx={{ml:{xs:"0",sm:'0',md:'6rem'}}}>
            {t("CountryDetails.TopLevelDomain")}:{" "}
          </Typography>
          {topLevelDomain.map((data, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {data}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Population")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* sending the population number to the funvtion to add commons between them */}
            {addCommonsTothePopulation(population)}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem" sx={{ml:{xs:"0",sm:'0',md:'6rem'}}}>
            {t("CountryDetails.Currencies")}:{" "}
          </Typography>
          {Currencies.map((data, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {data.name}
            </Typography>
          ))}
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Region")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {region}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem" sx={{ml:{xs:"0",sm:'0',md:'6rem'}}}>
            {t("CountryDetails.Languages")}:{" "}
          </Typography>
          {languages.map((data, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {data.name},
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.SubRegion")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subregion}
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Capital")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {capital}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
