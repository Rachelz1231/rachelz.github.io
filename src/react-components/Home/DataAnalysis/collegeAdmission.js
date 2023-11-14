import React from "react";
import { Typography, Paper, IconButton, Box } from "@mui/material";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import YouTubeIcon from '@mui/icons-material/YouTube';
import bgImage from "../static/college.jpg";
import pdf from "../static/302.pdf";
import { paletteBlackRice } from "../../../colorPalettle";

/* The CollegeAdmission Component */
export default function CollegeAdmission() {
  return (
    <Paper
      sx={{
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        borderRadius: "20%",
        padding: { xs: "5vw", md: "45px" },
        backgroundImage: `url(${bgImage})`,
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
          marginBottom: { xs: "5vw", md: "45px" },
        }}
      >
        College Admissions Analysis
      </Typography>
      <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
        Admission rates of colleges and universities in the United States can
        vary significantly due to a variety of reasons. For a video project in
        our undergraduate course, STA302H1: Methods of Data Analysis I, Zewen Ma
        and I examined factors that could potentially impact these admission
        rates.
      </Typography>

      <IconButton aria-label="pdf" onClick={() => window.open(pdf)}>
        <SlideshowIcon style={{ fontSize: 50 }} />
        <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
          Open Slides
        </Typography>
      </IconButton>
      <Box>
      <IconButton aria-label="youtube" onClick={() => window.open("https://youtu.be/nluSvbEiRao", "_blank")}>
        <YouTubeIcon style={{ fontSize: 50 }} />
        <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
          Open Video
        </Typography>
      </IconButton>
      </Box>
    </Paper>
  );
}
