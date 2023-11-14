import React from "react";
import { Typography, Paper, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import lm from "../static/linearMixed.jpg";
import lmPdf from "../static/lm.pdf";
import { paletteBlackRice } from "../../../colorPalettle";

/* The LinearMixed Component */
export default function LinearMixed() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: { xs: "5vw", md: "45px" },
        backgroundImage: `url(${lm})`,
        backgroundSize: "150%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: { xs: "70vw", md: "630px" },
        height: { xs: "70vw", md: "630px" },
        bgcolor: `${paletteBlackRice[4]}`,
        color: `white`,
      }}
    >
      <Typography
        sx={{
          marginTop: { xs: "5vw", md: "45px" },
          fontSize: { xs: "5vw", md: "45px" },
        }}
      >
        Linear Mixed Model Exploration
      </Typography>
      <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
        Presents statistical analysis and R skills, including variance analysis,
        linear mixed models, confidence intervals, p-values, and
        reproducibility. <br />
        Addresses reproducibility issues in statistical research, discussing
        causes and proposing solutions. <br />
        Reflects on personal achievements, lessons learned, and future
        improvements in the portfolio.
      </Typography>

      <IconButton aria-label="lmPdf" onClick={() => window.open(lmPdf)}>
        <PictureAsPdfIcon style={{ fontSize: 50, color: "white" }} />
        <Typography
          sx={{ fontSize: { xs: "2.5vw", md: "20px", color: "white" } }}
        >
          Open Report
        </Typography>
      </IconButton>
    </Paper>
  );
}
