import { Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

function IsErrorComp() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* This componet will show the error messgae in case of api error or backend error */}
      <Box
        height="75vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h1>{t("NotExists")}</h1>
      </Box>
    </React.Fragment>
  );
}

export default IsErrorComp;
