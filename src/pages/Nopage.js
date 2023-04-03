import { Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Nopage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              marginTop: "8rem",
              width: "50rem",
              height: "25rem",
            },
          }}
        >
          <Paper elevation={20}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Cairo",
                fontSize: "12rem",
                textAlign: "center",
                marginTop: "5rem",
              }}
            >
              404
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontFamily: "Cairo", textAlign: "center" }}
            >
              No Page Found. redirect to the <Link to="/">Home</Link>
            </Typography>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Nopage;
