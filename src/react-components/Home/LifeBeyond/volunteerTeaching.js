import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, IconButton, Paper, Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import classroom from "./static/classroom.png";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
  paletteBlue,
} from "../../../colorPalettle";

import { useNavigate } from "react-router-dom";

// import "./style.css";

/* The VolunteerTeaching Component */
export default function VolunteerTeaching() {
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
      className="vt"
      ref={socialRef}
      sx={{
        width: "100%",
        height: {xs: "50vw", md: "30vw"},
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
                height: {xs: "50vw", md: "30vw"},
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
                  width: {xs: "50vw", md: "30vw"},
                  height: {xs: "50vw", md: "30vw"},
                }}
              ></Paper>
            </Box>
            <Box
              sx={{
                height: "30vw",
                position: "relative",
                paddingY: { xs: "2vw", md: "5vw" },
                paddingLeft:  { xs: "50vw", md: "30vw"},
                paddingRight: { xs: "2vw", lg: "10vw"},
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "20px", lg: "30px" },
                  paddingX: "5vw",
                  paddingBottom: { md: "3vw" },
                  zIndex: 2,
                }}
              >
                My upbringing in a developing country opened my eyes to the
                disparities in educational opportunities worldwide. This
                realization drove me to join the "Educating Chinese Children
                Hope Offered" club and later became the vice president.
              </Typography>
              <IconButton
                onClick={() => navigate("/extracurricular/volunteer-teaching")}
              >
                {/* <PictureAsPdfIcon style={{ fontSize: 50, color: "white" }} /> */}
                <Button variant="outlined" sx={{ fontSize: "20px" }}>
                  Click Here to Learn More
                </Button>
              </IconButton>
            </Box>
          </Box>
        </Slide>
      </Box>
    </Box>
  );
}
