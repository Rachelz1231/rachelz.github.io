import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, IconButton, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classroom from "./static/running.PNG";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
  paletteBlue,
} from "../../../colorPalettle";

import { useNavigate } from "react-router-dom";

// import "./style.css";

/* The Marathon Component */
export default function Marathon() {
  const socialRef = useRef(null);
  const socialInfoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  //   const [multiRef, socialRef] = useMultiRefs();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(socialRef.current);
      }
    });

    observer.observe(socialRef.current);
    return () => observer.disconnect();
  }, []);
  const navigate = useNavigate();
  return (
    <Box
      className="socialNetworks"
      ref={socialRef}
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        className="socialInfo"
        ref={socialInfoRef}
        sx={{ position: "relative" }}
      >
        <Slide
          in={isVisible}
          direction="left"
          timeout={800}
          container={socialInfoRef.current}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                height: "30vw",
                backgroundImage: `linear-gradient(0.60turn,  ${paletteBlue[4]}, 
                    ${paletteBlue[0]})`,
                position: "absolute",
                ackgroundPosition: "center",
                width: "100%",
              }}
            >
              <Paper
                className="aboutMePhoto"
                sx={{
                  borderRadius: "50% 0% 0% 50%",
                  float: "right",
                  backgroundImage: `url(${classroom})`,
                  backgroundColor: "black",
                  backgroundPosition: "top",
                  backgroundSize: "100%",
                  width: { xs: "30vw" },
                  height: { xs: "30vw" },
                }}
              ></Paper>
            </Box>
            <Box
              sx={{
                height: "30vw",
                position: "relative",
                paddingY: { xs: "3vw", md: "5vw" },
                paddingRight: "30vw",
                paddingLeft: "10vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "2.5vw", md: "20px", lg: "30px" },
                  paddingX: "5vw",
                  paddingBottom: "3vw",
                  zIndex: 2,
                }}
              >
                In May 2023, signing up for a 10k run on my friends'
                encouragement turned out to be the best decision ever! Running
                feels like each step makes me lighter, and I'm just zipping
                through the course. It's a great way to relax and release
                stress. Maybe I'll try a half marathon next time!
              </Typography>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}
