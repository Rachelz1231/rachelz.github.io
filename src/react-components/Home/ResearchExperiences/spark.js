import React, { useRef, useEffect, useState } from "react";
import spark2 from "../static/spark2.png";
import iai from "../static/iai.jpg";
import { Box, Typography, Zoom, Slide, Paper, Button } from "@mui/material";

/* The Spark Component */
export default function Spark() {
  const sparkRef = useRef(null);
  const sparkInfoRef = useRef(null);
  const sparkInfoParagraph2Ref = useRef(null);
  const sparkInfoParagraph3Ref = useRef(null);
  const [raised, setRaised] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  //   const [multiRef, sparkRef] = useMultiRefs();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sparkRef.current);
      }
    });

    observer.observe(sparkRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="Spark"
      ref={sparkRef}
      sx={{
        width: "100%",
        marginTop: "10vw",
        marginBottom: "25vw",
        color: "black",
      }}
    >
      <Box ref={sparkInfoRef}>
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={sparkInfoRef.current}
        >
          <Box>
            <Paper
              onClick={() => window.open("https://www.josephjaywilliams.com")}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  scale: "1.04",
                },
                position: "relative",
                zIndex: "99",
                float: "left",
                borderRadius: "50%",
                backgroundImage: `url(${iai})`,
                backgroundPosition: "center",
                backgroundColor: `white`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "90px",
                height: "90px",
                marginLeft: "5vw",
                zIndex: "999",
              }}
            ></Paper>
            <Box
              sx={{
                position: "relative",
                left: "2vw",
              }}
            >
              <Typography sx={{ fontSize: "24px" }}>
                Intelligent Adaptive Interventions Lab
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "6vw", md: "54px" },
                }}
              >
                SPARK
              </Typography>
            </Box>
          </Box>
        </Slide>
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={sparkInfoRef.current}
        >
          <Typography
            ref={sparkRef}
            sx={{
              fontSize: "36px",
              position: "relative",
              display: "inline-block",
              width: { xs: "100%" },
              paddingX: "5vw",
              paddingBottom: "2vw",
              color: "black",
            }}
          >
            Understanding the Role of Large Language Models in Personalizing and
            Scaffolding Strategies to Combat Academic Procrastination
            <Typography
              sx={{
                fontSize: "24px",
                fontStyle: "italic",
              }}
            >
              CHI 2024 Best Paper Honorable Mention
              <Button
                variant="contained"
                onClick={() =>
                  window.open("https://doi.org/10.1145/3613904.3642081")
                }
                sx={{
                  position: "relative",
                  float: "none",
                  fontSize: "20px",
                  padding: "0 0 0 0",
                  marginLeft: "1vw",
                }}
              >
                Link
              </Button>
            </Typography>
          </Typography>
        </Slide>
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={sparkInfoRef.current}
        >
          <Typography
            ref={sparkRef}
            display={{ lg: "none" }}
            sx={{
              fontSize: "20px",
              height: { xs: "auto", lg: "720px" },
              paddingX: "5vw",
              paddingBottom: "3vw",
            }}
          >
            Traditional interventions for academic procrastination often fail to
            capture the nuanced, individual-specific factors that underlie them.
            Large language models (LLMs) hold immense potential for addressing
            this gap by permitting open-ended inputs, including the ability to
            customize interventions to individuals’ unique needs. However, user
            expectations and potential limitations of LLMs in this context
            remain underexplored. To address this, we conducted interviews and
            focus group discussions with 15 university students and 6 experts,
            during which a technology probe for generating personalized advice
            for managing procrastination was presented.
          </Typography>
        </Slide>
      </Box>
      <Box ref={sparkInfoParagraph2Ref}>
        {" "}
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={sparkInfoParagraph2Ref.current}
        >
          <Typography
            display={{ lg: "none" }}
            sx={{
              fontSize: "20px",
              height: { xs: "auto", lg: "720px" },
              paddingX: "5vw",
              paddingBottom: "3vw",
            }}
          >
            We developed a web-based technology probe called the Self-generated
            Personalized Articulations and Reflections Kit (SPARK). SPARK
            utilizes OpenAI’s GPT-4 model to offer context-specific advice for
            managing procrastination. The tool was iteratively designed by our
            research team composed of faculty members and graduate students in
            human-computer interaction, natural language processing, cognitive
            science, and psychology.
          </Typography>
        </Slide>
      </Box>

      <Slide in={isVisible} direction="left" timeout={800}>
        <Box
          ref={sparkRef}
          sx={{
            position: "absolute",
            paddingLeft: "51vw",
            zIndex: "0",
          }}
        >
          <Box
            sx={{
              float: { xs: "none", lg: "left" },
              height: { xs: "auto", lg: "720px" },
              width: { xs: "auto", lg: "60%" },
              shapeOutside: `ellipse(360px 360px at 0% 51%)`,
              //   clipPath: `ellipse(360px 360px at 0% 51%)`,
              //   backgroundColor: "grey",
            }}
          ></Box>
          <Typography
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
            sx={{
              fontSize: { xs: "2.5vw", lg: "1.5vw" },
              height: { xs: "auto", lg: "720px" },
              paddingTop: "5vw",
              paddingX: "5vw",
              paddingBottom: "3vw",
              shapeOutside: `ellipse(360px 360px at 50% 51%)`,
            }}
          >
            We developed a web-based technology probe called the Self-generated
            Personalized Articulations and Reflections Kit (SPARK). SPARK
            utilizes OpenAI’s GPT-4 model to offer context-specific advice for
            managing procrastination. The tool was iteratively designed by our
            research team composed of faculty members and graduate students in
            human-computer interaction, natural language processing, cognitive
            science, and psychology.
          </Typography>
        </Box>
      </Slide>
      <Slide in={isVisible} direction="right" timeout={800}>
        <Box sx={{ position: "absolute", paddingRight: "51vw", zIndex: "0" }}>
          <Box
            sx={{
              float: { xs: "none", lg: "right" },
              height: { xs: "auto", lg: "720px" },
              width: { xs: "auto", lg: "60%" },
              shapeOutside: `ellipse(360px 360px at 100% 50%)`,
              // clipPath: `ellipse(360px 360px at 100% 50%)`,
              // backgroundColor: "grey",
            }}
          ></Box>
          <Typography
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
            sx={{
              fontSize: { xs: "2.5vw", md: "1.4vw" },
              height: { xs: "auto", lg: "720px" },
              paddingX: "5vw",
              paddingTop: "2vw",
              paddingBottom: "3vw",
            }}
          >
            Traditional interventions for academic procrastination often fail to
            capture the nuanced, individual-specific factors that underlie them.
            Large language models (LLMs) hold immense potential for addressing
            this gap by permitting open-ended inputs, including the ability to
            customize interventions to individuals’ unique needs. However, user
            expectations and potential limitations of LLMs in this context
            remain underexplored. To address this, we conducted interviews and
            focus group discussions with 15 university students and 6 experts,
            during which a technology probe for generating personalized advice
            for managing procrastination was presented.
          </Typography>
        </Box>
      </Slide>

      <Zoom in={isVisible} style={{ transitionDuration: "900ms" }}>
        <Box sx={{ width: "100%" }}>
          {!raised && (
            <Paper
              className="SparkPhoto"
              ref={sparkRef}
              title="Enter SPARK Web App"
              onClick={() => window.open("https://spark-278f0.web.app/")}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  scale: "1.02",
                },
                position: "relative",
                transition: "transform 0.15s ease-in-out",
                borderRadius: { xs: "10%", lg: "50%" },
                shapeOutside: "circle(50%)",
                backgroundImage: `url(${spark2})`,
                backgroundPosition: "center",
                backgroundColor: `white`,
                backgroundRepeat: "no-repeat",
                backgroundSize: { xs: "110%", md: "100%" },
                width: { xs: "80vw", md: "720px" },
                height: { xs: "80vw", md: "720px" },
                // left: "25%",
                margin: "auto",
                // zIndex: "999",
              }}
            ></Paper>
          )}
        </Box>
      </Zoom>
      <Box ref={sparkInfoParagraph3Ref} sx={{ paddingBottom: "5vw" }}>
        <Slide
          in={isVisible}
          ref={sparkRef}
          direction="up"
          timeout={800}
          container={sparkInfoParagraph3Ref.current}
        >
          <Typography
            sx={{
              float: { xs: "none", lg: "right" },
              fontSize: { xs: "2.5vw", md: "20px", lg: "1.4vw" },
              width: { xs: "100%" },
              paddingX: "5vw",
              paddingTop: "3vw",
              textAlign: "center",
            }}
          >
            {/* Our results highlight the necessity for LLMs to provide structured,
            deadline-oriented steps and enhanced user support mechanisms.
            Additionally, our results surface the need for an adaptive approach
            to questioning based on factors like busyness. These findings offer
            crucial design implications for the development of LLM-based tools
            for managing procrastination while cautioning the use of LLMs for
            therapeutic guidance. */}
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
}
