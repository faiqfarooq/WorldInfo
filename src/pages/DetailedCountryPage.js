import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  singleCountryborders,
  singleCountryDetails,
  countriesBorder,
  loading,
} from "../redux/reducers/Reducer";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useTranslation } from "react-i18next";
import { getBorderAsync, getSingleCountryAsync } from "../redux/actions/Action";
import Layout from "../components/countryDetails/Layout";
import IsLoadingComp from "../components/IsLoadingComp";
import { error } from "../redux/reducers/Reducer";
import IsErrorComp from "../components/IsErrorComp";

function DetailedCountryPage() {
  const { t } = useTranslation();
  const singleCountry = useSelector(singleCountryDetails);
  const countryBorder = useSelector(countriesBorder);
  const borders = useSelector(singleCountryborders);
  const isLoading = useSelector(loading);
  const isError = useState(error);
  const dispatch = useDispatch();
  const params = useParams();
  const { details } = params;
  const { flag, name } = singleCountry;
  // we are sending the param valu of single country
  useEffect(() => {
    dispatch(getSingleCountryAsync({ details }));
  }, [dispatch, details]);
  //   sending the border countries code name to get the full names of countries in the "countryBorder" variable
  useEffect(() => {
    const testFunc = () => {
      dispatch(getBorderAsync({ borders }));
    };
    if (borders.length > 0) {
      testFunc();
    }
  }, [borders]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ px: { xs: "1rem", sm: "2rem", md: "3rem" }, py: "3rem" }}
      >
        {/* Back button code starts */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              boxShadow: "1px 1px 10px 1px rgba(0,0,0,.13)",
              color: "text.primary",
              textTransform: "none",
            }}
          >
            <KeyboardBackspaceIcon sx={{ mr: "1rem" }} />
            {t("Back")}
          </Button>
        </Link>
        {/* Back button code ends */}
        {isLoading && <IsLoadingComp />}
        {isError && <IsErrorComp />}
        {/* Single country details page code starts */}
        {!isLoading && !isError && (
          <Box
            display="flex"
            pt="5rem"
            pb="2rem"
            sx={{ flexDirection: { md: "row", xs: "column" } }}
          >
            {/* Image box contain the image */}
            <Box
              sx={{
                flex: "0 0 45%",
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                  md: "center",
                },
                alignItems: "center",
              }}
            >
              <Box>
                <Box
                  component="img"
                  alt={name}
                  loading="lazy"
                  src={`${flag}`}
                  sx={{
                    height: { xs: "100%", sm: "25rem", md: "28rem" },
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
            {/* Box contain the details of single country  */}
            <Box sx={{ flex: "0 0 55%", pl: { md: "5rem", xs: "0" } }}>
              <Typography variant="h3" sx={{ py: "2.5rem" }}>
                {name}
              </Typography>
              {/* code of the all details of single country (name,currencies etc.) is in the Layout component */}
              <Layout />
              {/* Box contain the border countries code */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  pt: "5rem",
                }}
              >
                <Typography variant="body1">
                  {t("CountryDetails.BorderCountries")}:
                </Typography>
                <Box display="flex" flexWrap="wrap">
                  {/* Mapping all the border countries names */}
                  {borders.length > 0 ? (
                    countryBorder.map((data, index) => (
                      <Link
                        to={`/country/${data.alpha3Code}`}
                        key={index}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          sx={{
                            boxShadow: "1px 1px 10px 1px rgba(0,0,0,.13)",
                            margin: ".5rem 0.2rem",
                            color: "text.primary",
                            padding: "0.2rem 1.4rem",
                            textTransform: "none",
                          }}
                          variant="body2"
                        >
                          {data.name}
                        </Button>
                      </Link>
                    ))
                  ) : (
                    <span style={{ color: "red" }}>
                      {name} has no border state.
                    </span>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </React.Fragment>
  );
}

export default DetailedCountryPage;
