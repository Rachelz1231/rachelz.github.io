import React, { useRef, useEffect, useState } from "react";

import huawei from "./static/huawei.png";
import huaweiBackground from "./static/huaweiBackground.jpg";
import { grey } from "@mui/material/colors";
import { Box, Typography, Zoom, Slide, Paper } from "@mui/material";
import { paletteBlackRice, paletteBlackYellow } from "../../colorPalettle";

/* The WorkExperiences Component */
export default function WorkExperiences() {
  const workExperiencesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(workExperiencesRef.current);
      }
    });

    observer.observe(workExperiencesRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="workExperiences"
      ref={workExperiencesRef}
      sx={{
        marginY: "20vw",
        color: `${paletteBlackRice[4]}`,
      }}
    >

<Slide in={isVisible} direction="right" timeout={800}>
        <Box
          className="huaweiPhoto"
          sx={{
            border: 5,
            borderColor: `${paletteBlackRice[2]}`,
            boxShadow: 3,
            borderRadius: "50%",
            position: "absolute",
            left: { xs: "-35vw", lg: "-420px" },
            backgroundImage: `url(${huaweiBackground})`,
            backgroundSize: "cover",
            backgroundPositionX: { xs: "32vw", lg: "384px" },
            backgroundRepeat: "no-repeat",
            width: { xs: "90vw", lg: "1080px" },
            height: { xs: "60vw", lg: "720px" },
            marginTop: "5vw",
            zIndex: "0",
          }}
        >
          <Zoom
            in={isVisible}
            style={{ transitionDuration: "900ms", transitionDelay: "200ms" }}
          >
            <Box
              className="huaweiIcon"
              sx={{
                borderRadius: "50%",
                border: 5,
                boxShadow: 3,
                borderColor: `${paletteBlackRice[3]}`,
                position: "relative",
                top: { xs: "35vw", lg: "420px" },
                left: { xs: "60vw", lg: "720px" },
                backgroundImage: `url(${huawei})`,
                backgroundColor: `${grey[200]}`,
                backgroundPosition: "center",
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                width: { xs: "25vw", lg: "300px" },
                height: { xs: "25vw", lg: "300px" },
                zIndex: "1",
              }}
            ></Box>
          </Zoom>
        </Box>
      </Slide>
      <Zoom in={isVisible} style={{ transitionDuration: "900ms" }}>
        <Box
          className="huaweiInfo"
          sx={{
            // float: "left",
            textAlign: "center",
            // width: "50vw",
            padding: "5vw",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "6vw", md: "54px" },
              paddingLeft: { xs: "60%", xl: "768px" },
            }}
          >
            Work Experiences
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.5vw", md: "22.5px" },
              paddingLeft: { xs: "60%", xl: "768px" },
              paddingTop: "5vw",
              zIndex: "1",
            }}
          >
            I worked at Huawei Technologies Canada Ltd. from May 2022 to August
            2023. During that time, I actively contributed to product
            development, collaborating with colleagues to create new features
            and enhance GaussDB's functionality. Additionally, I presented
            algorithm designs to a group of over 40 colleagues.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2.5vw", md: "22.5px" },
              paddingLeft: { xs: "5vw", lg: "60%", xl: "768px" },
              paddingRight: "5vw",
              paddingTop: {xs: "10vw", md: "15vw", lg: "2vw"},
              zIndex: "1",
            }}
          >
            Being part of a small, rapidly expanding development team, I had the
            privilege of fully engaging in the development of various components
            and features. This unique opportunity allowed for continuous
            learning throughout the 16-month period. As a result, I gained an
            expert and comprehensive understanding of distributed systems and
            database technology, enriching my skills and knowledge in these
            critical areas of computer science.
          </Typography>
        </Box>
      </Zoom>
    </Box>
  );
}
