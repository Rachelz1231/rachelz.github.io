import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, IconButton, Paper } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classroom from "./static/classroom.png";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
  paletteBlue,
} from "../../../colorPalettle";
import VolunteerTeaching from "./volunteerTeaching";
import Traveling from "./traveling";
import Marathon from "./marathon";
import { useNavigate } from "react-router-dom";

// import "./style.css";

/* The LifeBeyond Component */
export default function LifeBeyond() {
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
        // color: "white",
        position: "relative",
        marginY: "20vw",
        // backgroundImage: `url(${socialNetworks})`,
      }}
    >
      <Box
        className="socialInfo"
        ref={socialInfoRef}
        sx={{ position: "relative", paddingTop: "10vw" }}
      >
        <Zoom in={isVisible} style={{ transitionDuration: "900ms" }}>
          <Box sx={{ textAlign: "center", marginBottom: "20vw" }}>
            <Typography
              sx={{
                fontSize: { xs: "6vw", md: "54px" },
              }}
            >
              Life Beyond Academia and the Workplace
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2.5vw", md: "20px", lg: "30px" },
                height: { xs: "auto" },
                paddingX: "5vw",
                paddingBottom: "3vw",
                paddingX: "10vw",
              }}
            >
              Welcome to the fun side of my life – the adventures and passions
              that color my world outside the walls of academia and the office!
              This is where I share the vibrant parts of my life that make me,
              well, me!
            </Typography>
            <VolunteerTeaching></VolunteerTeaching>
            <Marathon></Marathon>
            <Traveling></Traveling>
          </Box>
        </Zoom>
      </Box>
    </Box>
  );
}
