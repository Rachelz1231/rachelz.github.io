import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, IconButton } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import socialNetworks from "../static/socialNetworks.jpg";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlueOrange,
} from "../../../colorPalettle";

// import "./style.css";

/* The SocialNetworks Component */
export default function SocialNetworks() {
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

  return (
    <Box
      className="socialNetworks"
      ref={socialRef}
      sx={{
        width: "100%",
        marginTop: "10vw",
        color: "white",
        position: "relative",
        // backgroundImage: `url(${socialNetworks})`,
      }}
    >
      <Box
        className="socialPhoto"
        sx={{
          position: "absolute",
          backgroundImage: `url(${socialNetworks})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.3,
          width: "110%",
          height: { xs: "80vw", md: "720px" },
          boxShadow: {
            xs: `0 0 20vw 20vw ${paletteBlackYellow[0]} inset`,
            md: `0 0 180px 180px ${paletteBlackYellow[0]} inset`,
          },
        }}
      ></Box>
      <Box
        className="socialInfo"
        ref={socialInfoRef}
        sx={{ position: "relative", paddingX: "10vw", paddingTop: "10vw" }}
      >
        <Zoom in={isVisible} style={{ transitionDuration: "900ms" }}>
          <Box sx={{ textAlign: "center", marginBottom: "20vw" }}>
            <Typography
              sx={{
                fontSize: { xs: "6vw", md: "54px" },
              }}
            >
              Social Networks
            </Typography>
            <Typography
              ref={socialRef}
              sx={{
                fontSize: { xs: "3vw", md: "36px" },
                width: { xs: "100%" },
                paddingX: "5vw",
                paddingBottom: "2vw",
              }}
            >
              Evaluating Models and Algorithms for Social Networks using Twitter
              Data
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2.5vw", md: "20px" },
                height: { xs: "auto"},
                paddingX: "5vw",
                paddingBottom: "3vw",
              }}
            >
              Nowadays, social networking applications are part of our daily
              life. There are terabytes of information generated daily, which
              provides an unique opportunity to learn more about how people
              interact and exchange information within social networks.
              <br />I have been researching with Prof. Marbach for one and a
              half years on Social Networks. So far, I have collected and
              analyzed the information of over 80k users and 12.7 million tweets
              using Twitter API. I implemented six utility functions to analyze
              user connections. I also presented my findings to more than 100
              students and pro- fessors at the ROP Fair, in 2022.
            </Typography>
            <IconButton
              onClick={() => window.open("/research/social-networks")}
            >
              {/* <PictureAsPdfIcon style={{ fontSize: 50, color: "white" }} /> */}
              <Typography sx={{color: "white", fontSize: { xs: "2.5vw", md: "20px" } }}>
                Click Here to Learn More
              </Typography>
            </IconButton>
          </Box>
        </Zoom>
      </Box>
    </Box>
  );
}
