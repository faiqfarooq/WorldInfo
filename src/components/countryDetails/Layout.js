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
      <Box display="flex" sx={{flexDirection:{xs:"column",sm:'row'},pl:{xs:'0',sm:'0',md:'4.5rem'},pt:{xs:"1rem",sm:"2rem"}}}>
        <Box sx={{flex:'0 0 65%'}} >
        <Box display="flex">
           {/* we are using the i18next library to change the language thats why it look differnt */}
           <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.NativeName")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {nativeName}
          </Typography>
        </Box>
        <Box display="flex" py="0.2rem">
        <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Population")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* sending the population number to the funvtion to add commons between them */}
            {addCommonsTothePopulation(population)}
          </Typography>
          </Box>
          <Box display="flex">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Region")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {region}
          </Typography>
          </Box>
          <Box display="flex" py="0.2rem">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.SubRegion")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subregion}
          </Typography>
          </Box>
          <Box display="flex">
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.Capital")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {capital}
          </Typography>
          </Box>
        </Box>
        <Box sx={{flex:'0 0 35%', pt:{xs:"1.8rem",sm:'0'}}}  >
        <Box display="flex" alignItems="center">
        <Typography variant="body1" mr="0.3rem" >
            {t("CountryDetails.TopLevelDomain")}:{" "}
          </Typography>
          {topLevelDomain.map((data, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {data}
            </Typography>
          ))}
        </Box>
       
          <Box display="flex" alignItems="center"  py="0.2rem">
          <Typography variant="body1" mr="0.3rem" >
            {t("CountryDetails.Currencies")}:{" "}
          </Typography>
          {Currencies.map((data, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              {data.name}
            </Typography>
          ))}
          </Box>
          
          <Box display="flex" alignItems="center">
          <Typography variant="body1" mr="0.3rem" >
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
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
        
          <Typography variant="body1" mr="0.3rem">
            {t("CountryDetails.NativeName")}:{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {nativeName}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center" >
          <Typography variant="body1" mr="0.3rem" >
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
            {addCommonsTothePopulation(population)}
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} container direction="row" alignItems="center">
          <Typography variant="body1" mr="0.3rem" >
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
          <Typography variant="body1" mr="0.3rem" >
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
      </Grid> */}
    </React.Fragment>
  );
}

export default Layout;
