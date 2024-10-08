import React from "react";
import { Typography, Paper, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import watch from "../static/watch.jpg";
import { paletteBlackRice } from "../../../colorPalettle";

/* The Mingar Component */
export default function Mingar() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: { xs: "5vw", md: "45px" },
        backgroundImage: `url(${watch})`,
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
        Product Performance Analysis
      </Typography>
      <Typography sx={{ fontSize: { xs: "3vw", sm: "20px" } }}>
        Our goal is to investigate on MINGAR’s Fitness Tracker's new product
        line customers, and potential wearable device deficiency for MINGAR
        company.
        <br />
        What demographics of the new affordable lines’ customers different from
        MINGAR’s traditional buyers? <br />
      </Typography>

      <IconButton aria-label="mingarPdf" onClick={() => window.open(`${process.env.PUBLIC_URL}/mingar.pdf`, "_blank")}>
        <PictureAsPdfIcon style={{ fontSize: {xs: 30, sm: 50} }} />
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px" } }}>
          Open Report
        </Typography>
      </IconButton>
    </Paper>
  );
}
