import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Typography,
  Zoom,
  Slide,
  Paper,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import dv from "../static/dv.jpeg";
import dvPdf from "../static/dv.pdf";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
} from "../../../colorPalettle";

// import "./style.css";

/* The DataVisualization Component */
export default function DataVisualization() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: "5vw",
        backgroundImage: `url(${dv})`,
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
          marginTop: { xs: "10vw", md: "90px" },
          fontSize: { xs: "5vw", md: "45px" },
        }}
      >
        Data Visualization
      </Typography>
      <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
        Demonstrates statistical analysis and R skills, including data
        visualization and hypothesis testing.
        <br /> Discusses skills for a data scientist job, emphasizing soft and
        analytical skills. <br />
        Reflects on portfolio performance, highlighting achievements and areas
        for improvement.
      </Typography>
        
      <IconButton aria-label="dvPdf" onClick={() => window.open(dvPdf)}>
        <PictureAsPdfIcon style={{ fontSize: 50 }} />
        <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
          View Portfolio PDF
        </Typography>
      </IconButton>
    </Paper>
  );
}
