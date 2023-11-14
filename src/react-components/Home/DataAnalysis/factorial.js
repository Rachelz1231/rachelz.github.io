import React from "react";
import { Typography, Paper, IconButton, Box } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SlideshowIcon from "@mui/icons-material/Slideshow";

import YouTubeIcon from '@mui/icons-material/YouTube';
import facPresentation from "../static/facP.pdf";
import facPhoto from "../static/facPhoto.png";
import factPdf from "../static/facReport.pdf";
import { paletteBlackRice } from "../../../colorPalettle";

/* The Factorial Component */
export default function Factorial() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: { xs: "5vw", md: "45px" },
        backgroundImage: `url(${facPhoto})`,
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
          fontSize: { xs: "4vw", md: "45px" },
        }}
      >
        Factorial Experiment of CPU usage
      </Typography>
      <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
        As data analysis students who rely on computers daily, we understand
        their significance in our lives. However, we often encounter situations
        where our computers slow down or freeze due to high CPU usage. The CPU,
        or Central Processing Unit, is the essential component responsible for
        handling tasks in a computer (Britannica, 2018). Monitoring CPU usage
        can help prevent system crashes. To address this issue, our study aims
        to identify the specific tasks that cause high CPU usage when running on
        a computer.
      </Typography>

      <IconButton aria-label="factPdf" onClick={() => window.open(factPdf)}>
        <PictureAsPdfIcon
          sx={{ fontSize: { xs: 40, sm: 50 }, color: "white" }}
        />
        <Typography
          sx={{ fontSize: { xs: "2.5vw", md: "20px", color: "white" } }}
        >
          Open Report
        </Typography>
      </IconButton>
      <IconButton
        aria-label="factPdf"
        onClick={() => window.open(facPresentation)}
      >
        <SlideshowIcon sx={{ fontSize: { xs: 40, sm: 50 }, color: "white" }} />
        <Typography
          sx={{ fontSize: { xs: "2.5vw", md: "20px", color: "white" } }}
        >
          Open Slides
        </Typography>
      </IconButton>
      <Box>
      <IconButton aria-label="youtube" onClick={() => window.open("https://youtu.be/9hcm2CUqQpA", "_blank")}>
        <YouTubeIcon style={{ fontSize: 50, color: "white"  }} />
        <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px", color: "white" } }}>
          Open Video
        </Typography>
      </IconButton>
      </Box>
    </Paper>
  );
}
