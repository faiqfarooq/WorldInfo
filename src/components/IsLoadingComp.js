import { Box, CircularProgress } from "@mui/material";
import React from "react";

function IsLoadingComp() {
  return (
    <React.Fragment>
      {/* this is loading sinnner component */}
      <Box
        height="75vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress sx={{color:"text.primary"}} />
      </Box>
    </React.Fragment>
  );
}

export default IsLoadingComp;
