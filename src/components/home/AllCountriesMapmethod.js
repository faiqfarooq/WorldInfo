import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CustomCard from "./CustomCard";

function AllCountriesMapmethod(props) {
  const { filteredCountries, isLoading, isError } = props;
  return (
    <React.Fragment>
      {/*  mapping all the countries  of the main or home page*/}
      <Grid pt="1rem" container wrap="wrap" columnSpacing="5%">
        {!isLoading &&
          !isError &&
          filteredCountries.map((data, index) => (
            <Grid
              key={index}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              container
              justifyContent="center"
            >
              <Link
                to={`country/${data.alpha3Code}`}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                {/* sending data to the card component  */}
                <CustomCard
                  name={data.name}
                  population={data.population}
                  region={data.region}
                  capital={data.capital}
                  flag={data.flag}
                />
              </Link>
            </Grid>
          ))}
      </Grid>
    </React.Fragment>
  );
}

export default AllCountriesMapmethod;
