import React from "react";
import { Typography, Paper, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import mls from "../static/mls.jpg";
import pdf from "../static/mlsReport.pdf";
import { paletteBlackRice } from "../../../colorPalettle";

/* The Mingar Component */
export default function MlsPlayer() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: { xs: "5vw", md: "45px" },
        backgroundImage: `url(${mls})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: { xs: "70vw", md: "630px" },
        height: { xs: "70vw", md: "630px" },
        bgcolor: `${paletteBlackRice[4]}`,
      }}
    >
      <Typography
        sx={{
          marginTop: { xs: "5vw", md: "45px" },
          fontSize: { xs: "5vw", md: "45px" },
        }}
      >
        MLS Player Annual Earning Analysis
      </Typography>
      <Typography sx={{ fontSize: { xs: "20px", md: "20px" } }}>
        Explored the relationship between annual earnings of MLS players and
        their performance, constructing a valuable linear regression model for
        the soccer market. This model helps soccer clubs accurately estimate a
        player's value and offers a roadmap for performance improvement to boost
        earnings.
      </Typography>

      <IconButton aria-label="pdf" onClick={() => window.open(pdf)}>
        <PictureAsPdfIcon style={{ fontSize: 50 }} />
        <Typography sx={{ fontSize: { xs: "20px", md: "20px" } }}>
        Open Report
        </Typography>
      </IconButton>
    </Paper>
  );
}
