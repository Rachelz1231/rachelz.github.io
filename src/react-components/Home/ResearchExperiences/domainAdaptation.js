import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Zoom, Slide, Paper } from "@mui/material";

import domain from "../static/domainAdapt.png";
import { paletteBlackRice, paletteBlueOrange } from "../../../colorPalettle";

/* The DomainAdaption Component */
export default function DomainAdaptation() {
  const domainRef = useRef(null);
  const domainInfoRef = useRef(null);
  const domainTitleRef = useRef(null);
  const [raised, setRaised] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //   const [multiRef, domainRef] = useMultiRefs();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domainRef.current);
      }
    });

    observer.observe(domainRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="DomainAdaption"
      ref={domainRef}
      sx={{
        width: { xs: "100%", lg: "70%" },
        marginTop: "5vw",
        marginX: "auto"
      }}
    >
      <Paper
        sx={{
          position: "relative",
          borderRadius: "50%",
          backgroundColor: `${paletteBlueOrange[2]}`,
          color: `${paletteBlueOrange[4]}`,
          // left: { xs: `calc(-300px + 25vw)`, md: "0"},"
          marginTop: {lg: "10vw"},
          marginX:{ xs: "-25vw", md: "auto"},
          width: { xs: "150vw", md: "1170px"},
          height: { xs: "150vw", md: "1170px"},
          paddingTop: { xs: "7vw", md: "10vw", lg: "120px" },
          paddingX: { xs: "30vw", md: `calc(225px - 5vw)`},
          // boxShadow:`0 0 8px 8px white inset`,
          boxShadow: `inset 0 -10 30 -30`,
        }}
      >
        <Box ref={domainTitleRef}>
          <Slide
            in={isVisible}
            direction="up"
            timeout={800}
            container={domainTitleRef.current}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography>Lee Lab</Typography>
              <Typography
                sx={{
                  fontSize: { xs: "6vw", md: "54px" },
                }}
              >
                Domain Adaptation
              </Typography>
              <Typography
                ref={domainRef}
                sx={{
                  fontSize: { xs: "3vw", md: "36px" },
                  position: "relative",
                  width: { xs: "100%" },
                  paddingX: "5vw",
                  paddingBottom: "2vw",
                }}
              >
                Exploiting Domain-Specific Parallel Data on Multilingual
                Language Models for Low-resource Language Translation
              </Typography>
            </Box>
          </Slide>
        </Box>

        <Zoom in={isVisible} style={{ transitionDuration: "900ms" }}>
          <Box
            sx={{
              width: "100%",
              paddingBottom: { xs: "3vw", md: "0" },
              paddingX: "5vw",
            }}
          >
              <Paper
                className="DomainPhoto"
                sx={{
                  position: "relative",
                  float: { xs: "none", md: "left" },
                  transition: "transform 0.15s ease-in-out",
                  borderRadius: "10%",
                  backgroundImage: `url(${domain})`,
                  backgroundPosition: "center",
                  backgroundColor: `white`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: { xs: "100%", md: "100%" },
                  width: { xs: "60vw", sm: "360px" },
                  height: { xs: "60vw", sm: "360px" },
                  margin: { xs: "auto", md: "2vw 2vw 0 0" },
                }}
              ></Paper>
          </Box>
        </Zoom>
        <Box ref={domainInfoRef}>
          <Slide
            in={isVisible}
            direction="up"
            timeout={800}
            container={domainInfoRef.current}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5vw", md: "20px" },
                height: { xs: "auto", lg: "720px" },
                paddingX: "5vw",
                paddingBottom: "3vw",
              }}
            >
              Neural Machine Translation (NMT) models built on multilingual
              sequence-to-sequence Large Language Models (msLLMs) fail to
              deliver expected results when the amount of parallel data for a
              language as well as the language's representation in the model are
              limited. This restricts domain-specific NMT systems for
              low-resource languages (LRLs). As a solution, parallel data from
              auxiliary domains can be exploited either to fine-tune msLLM
              (Intermediate task fine-tuning - ITFT) or to further pre-train it
              with new objective functions. This paper presents an evaluation of
              the effectiveness of these two techniques in the context of
              domain-specific LRL-NMT. We also explored the impact of domain
              divergence on NMT model performance. Based on our results, we made
              several observations on the best plan of utilizing auxiliary
              parallel data in building domain-specific NMT models for LRLs.
            </Typography>
          </Slide>
        </Box>
      </Paper>
    </Box>
  );
}
