import React from "react";
import { useRef } from "react";
import profilePhoto from "./static/profile-photo.png";
import { yellow, grey } from "@mui/material/colors";
import { Box, Typography, Zoom, Paper } from "@mui/material";
import { paletteBlackRice, paletteBlackYellow } from "../../colorPalettle";
/* The AboutMe Component */
export default function AboutMe() {
  const aboutMeInfoBox = useRef(null);
  return (
    <Box
      className="aboutMe"
      sx={{ width: "100%", height: { xs: "70vw", lg: "840px" } }}
    >
      <Zoom in={true} style={{ transitionDuration: "900ms" }}>
        <Paper
          className="aboutMeInfoBox"
          ref={aboutMeInfoBox}
          sx={{
            borderRadius: "50%",
            position: "relative",
            top: { xs: "-50vw", lg: "-600px" },
            left: "20vw",
            backgroundImage: `radial-gradient(circle, ${paletteBlackYellow[3]}, ${paletteBlackYellow[4]})`,
            textAlign: "center",
            width: { xs: "100vw", lg: "1200px" },
            height: { xs: "100vw", lg: "1200px" },
            zIndex: "0",
            paddingTop: { xs: "55vw", lg: "660px" },
            paddingLeft: { xs: "20vw", lg: "15vw" },
            paddingRight: { xs: "23vw", lg: "20vw" },
          }}
        >
          <Zoom
            in={true}
            style={{ transitionDuration: "700ms", transitionDelay: "200ms" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "3vw", lg: "36px" },
              }}
            >
              Hello! It's me,
            </Typography>
          </Zoom>
          <Zoom
            in={true}
            style={{ transitionDuration: "700ms", transitionDelay: "200ms" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "7vw", md: "63px" },
              }}
            >
              Rachel Zeng.
            </Typography>
          </Zoom>

          <Zoom
            in={true}
            style={{ transitionDuration: "700ms", transitionDelay: "200ms" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5vw", md: "22.5px" },
              }}
            >
              Welcome to my website! I am a fourth-year student pursuing a
              Computer Science Specialist and Statistics Major in University of
              Toronto. I am interested in Artificial Intelligence, Web And
              Internet Technologies, and Computer Systems.
            </Typography>
          </Zoom>
        </Paper>
      </Zoom>
      <Zoom
        in={true}
        style={{ transitionDuration: "900ms", transitionDelay: "300ms" }}
      >
        <Paper
          className="aboutMePhoto"
          sx={{
            borderRadius: "50%",
            border: 5,
            borderColor: `${grey[400]}`,
            position: "absolute",
            top: { xs: "30vw", md: "270px" },
            left: "13vw",
            backgroundImage: `url(${profilePhoto})`,
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: { xs: "30vw", lg: "360px" },
            height: { xs: "30vw", lg: "360px" },
          }}
        ></Paper>
      </Zoom>
    </Box>
  );
}
