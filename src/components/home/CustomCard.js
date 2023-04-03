import {
  CardContent,
  CardMedia,
  Typography,
  Box,
  Card,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import { addCommonsTothePopulation } from "../../utils/utilities";

function CustomCard(props) {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* This is the card whicjhj will be shown on the home page */}
      <Card
        sx={{
          minWidth: { xs: "17rem", sm: "19rem" },
          maxWidth: { xs: "17rem", sm: "19rem" },
          minHeight: "25rem",
          my: "2rem",
          px: "auto",
          borderRadius: "5px",
          boxShadow: "1px 6px 15px 0 rgba(0,0,0,.15)",
          bgcolor: "background.default",
        }}
      >
        {/* card image code  */}
        <CardMedia sx={{ height: "12rem", width: "100%" }}>
          <img
            src={`${props.flag}`}
            alt={`${props.name} flag`}
            style={{
              height: "100%",
              width: "100%",
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundSize: "cover",
              backgrouundRepeat: "no-repeat",
            }}
          />
        </CardMedia>
        <Divider />
        <CardContent
          height="100%"
          width="100%"
          sx={{ pl: "1.5rem", pt: "2rem" }}
        >
          <Typography pb="0.6rem" variant="h3" component="div">
            {props.name}
          </Typography>
          <Box display="flex" pt="0.3rem" alignItems="center">
            <Typography variant="body1" mr="0.3rem">
              {t("CustomCard.Population")}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* this function helps to add commas in the population */}
              {addCommonsTothePopulation(props.population)}
            </Typography>
          </Box>
          <Box py=".2rem" display="flex" alignItems="center">
            <Typography variant="body1" mr="0.3rem">
              {t("CustomCard.Region")}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.region}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1" mr="0.3rem">
              {t("CustomCard.Capital")}:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.capital}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default CustomCard;
