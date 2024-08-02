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
            position: {sm: "absolute"},
            backgroundImage: `url(${huaweiBackground})`,
            backgroundSize: "cover",
            backgroundPositionX: { sm: "194px", md: "384px" },
            backgroundRepeat: "no-repeat",
            width: { xs: "90vw", sm: "600px", md: "960px"},
            height: { xs: "60vw", sm: "400px", md: "640px" },
            left: { xs: "0vw", sm: "-220px", md: "-420px"},
            marginTop: { xs: "10vw", sm: "15vw", md: "5vw"},
            marginX: {xs: "5vw", sm: "0vw"},
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
                position: {xs: "relative", md: "relative"},
                top: { xs: "35vw", sm: "280px", md: "400px", lg: "480px" },
                left: { xs: "60vw", sm: "400px", md: "720px" },
                backgroundImage: `url(${huawei})`,
                backgroundColor: `${grey[200]}`,
                backgroundPosition: "center",
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                width: { xs: "25vw", sm: "200px"},
                height: { xs: "25vw", sm: "200px"},
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
            textAlign: "center",
            padding: "5vw",
            position: {sm: "relative"}
          }}
        >
          <Box
            display={{ xs: "none", sm: "block" }}
            sx={{
              float: { xs: "none", sm: "left" },
              width: { xs: "90vw", sm: "350px", md: "500px" },
              height: { xs: "60vw", sm: "620px", md: "700px" },
              shapeOutside: {sm: `ellipse(58vw 300px at 0% 55%)`, md: `ellipse(55vw 550px at 0% 50%)`},
              // clipPath: {sm: `ellipse(58vw 300px at 0% 60%)`, md: `ellipse(55vw 550px at 0% 50%)`},
              // backgroundColor: "grey",
              // opacity: "50%",
              marginX: "2vw",
            }}
          ></Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "50px",
            }}
          >
            Work Experiences
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "22.5px" },
              // paddingLeft: { xs: "5vw", sm: "60%", xl: "768px" },
              paddingX: "5vw",
              paddingTop: {xs: "5vw", sm: "50px", md: "5vw"},
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
              fontSize: { xs: "20px", md: "22.5px" },
              // paddingRight: {xs: "5vw", md: "0"},
              // paddingLeft: { xs: "5vw", sm: "0", md: "0", lg: "60%", xl: "768px" },
              paddingTop: {xs: "10vw",  md: "2vw", lg: "2vw"},
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
