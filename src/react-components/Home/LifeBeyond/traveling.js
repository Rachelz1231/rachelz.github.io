import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, IconButton, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classroom from "./static/travel.png";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
  paletteBlue,
} from "../../../colorPalettle";

import { useNavigate } from "react-router-dom";

// import "./style.css";

/* The Traveling Component */
export default function Traveling() {
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
          direction="right"
          timeout={800}
          container={socialInfoRef.current}
        >
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                height: "30vw",
                backgroundImage: `linear-gradient(0.30turn,  ${paletteBlue[4]}, 
                    ${paletteBlue[0]})`,
                position: "absolute",
                ackgroundPosition: "center",
                width: "100%",
              }}
            >
              <Paper
                className="aboutMePhoto"
                sx={{
                  borderRadius: "0% 50% 50% 0%",
                  position: "absolute",
                  backgroundImage: `url(${classroom})`,
                  backgroundColor: "black",
                  backgroundPosition: "center",
                  backgroundSize: "150%",
                  width: { xs: "30vw" },
                  height: { xs: "30vw" },
                }}
              ></Paper>
            </Box>
            <Box
              sx={{
                height: "30vw",
                position: "relative",
                paddingY: { xs: "2vw", md: "5vw" },
                paddingLeft: "30vw",
                paddingRight: "10vw",
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
                Traveling fuels my passion for exploring nature's wonders,
                learning about different cultures, and embracing new adventures.
                It's amazing how each journey opens my eyes to new ways of life.
                I even drove myself on a round trip through the Northeast U.S. –
                a fantastic adventure where every mile brought a new discovery.
              </Typography>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}
