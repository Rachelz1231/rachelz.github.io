import React, { useRef, useEffect, useState } from "react";

import Spark from "./spark";
import DomainAdaptation from "./domainAdaptation";
import SocialNetworks from "./socialNetworks";
import { Box, Typography, Zoom, Slide, Paper } from "@mui/material";
import { paletteBlue } from "../../../colorPalettle";

/* The ResearchExperiences Component */
export default function ResearchExperiences() {
  const researchExperiencesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(researchExperiencesRef.current);
      }
    });

    observer.observe(researchExperiencesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="researchExperiences"
      sx={{
        width: "100%",
        marginTop: "20vw",
      }}
    >
      <Box
        ref={researchExperiencesRef}
        sx={{
          marginBottom: "5vw",
        }}
      >
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={researchExperiencesRef.current}
        >
          <Typography
            sx={{
              width: "100%",
              textAlign: "center",
              fontSize: { xs: "6vw", md: "54px" },
              color: `${paletteBlue[3]}`,
              fontWeight: 'bold'
            }}
          >
            My Research
          </Typography>
        </Slide>
      </Box>
      <Spark></Spark>
      <DomainAdaptation></DomainAdaptation>
      <SocialNetworks></SocialNetworks>
    </Box>
  );
}
