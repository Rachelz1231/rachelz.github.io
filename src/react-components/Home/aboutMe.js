import React from "react";
import { useRef } from "react";
import profilePhoto from "./static/profile-photo.jpg";
import { yellow, grey } from "@mui/material/colors";
import { Box, Typography, Zoom, Paper } from "@mui/material";
import { paletteBlackRice, paletteBlackYellow } from "../../colorPalettle";
/* The AboutMe Component */
export default function AboutMe() {
  const aboutMeInfoBox = useRef(null);
  return (
    <Box
      className="aboutMe"
      sx={{ width: "100%", height: { xs: "840px", lg: "840px" } }}
    >
      <Zoom in={true} style={{ transitionDuration: "900ms" }}>
        <Paper
          className="aboutMeInfoBox"
          ref={aboutMeInfoBox}
          sx={{
            borderRadius: "50%",
            position: "relative",
            top: { xs: "0", md: "-50vw", lg: "-600px" },
            left: { xs: "0", md: "20vw" },
            backgroundColor: "transparent",
            boxShadow: { xs: "0", sm: "0" },
            backgroundImage: {
              xs: "none",
              md: `radial-gradient(circle, ${paletteBlackYellow[3]}, ${paletteBlackYellow[4]})`,
            },
            textAlign: "center",
            width: { xs: "100vw", lg: "1200px" },
            height: { xs: "100vw", lg: "1200px" },
            zIndex: "0",
            paddingTop: { xs: "46vw", md: "51vw", lg: "660px" },
            paddingLeft: { xs: "5vw", md: "20vw", lg: "15vw" },
            paddingRight: { xs: "5vw", md: "23vw", lg: "20vw" },
          }}
        >
          <Zoom
            in={true}
            style={{ transitionDuration: "700ms", transitionDelay: "200ms" }}
          >
            <Typography
              sx={{
                fontSize: "36px",
                color: { xs: "white", md: "black" },
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
                fontSize: "63px",
                color: { xs: "white", md: "black" },
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
                fontSize: "22.5px",
                color: { xs: "white", md: "black" },
              }}
            >
              I am a highly motivated software engineer with a solid academic
              foundation and extensive research experience. I graduated from the
              University of Toronto with a Bachelor's degree in Computer Science
              and Statistics with a GPA of 3.97/4.0, and I am currently pursuing
              a Master of Engineering in Electrical Engineering and Computer
              Science at UC Berkeley.
            </Typography>
          </Zoom>
        </Paper>
      </Zoom>
      <Zoom
        in={true}
        style={{ transitionDuration: "900ms", transitionDelay: "300ms" }}
      >
        <Box
          sx={{
            position: { xs: "relative", md: "absolute" },
            display: "flex",
            justifyContent: "center",
            top: { xs: "-90vw", md: "270px" },
            left: { xs: "0", md: "8vw", lg: "13vw" },
            width: { xs: "100vw", md: "360px" },
            height: { xs: "30vw", lg: "360px" },
          }}
        >
          <Paper
            className="aboutMePhoto"
            sx={{
              borderRadius: "50%",
              border: 5,
              borderColor: `${grey[400]}`,
              backgroundImage: `url(${profilePhoto})`,
              backgroundColor: "black",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: { xs: "30vw", lg: "360px" },
              height: { xs: "30vw", lg: "360px" },
            }}
          ></Paper>
        </Box>
      </Zoom>
    </Box>
  );
}
