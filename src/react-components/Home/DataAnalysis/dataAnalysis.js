import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Slide, Grid, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import DataVisualization from "./dataVisualization";
import Mingar from "./mingar";
import LinearMixed from "./linearMixed";
import Factorial from "./factorial";
import MlsPlayer from "./mlsPlayer";
import CollegeAdmission from "./collegeAdmission";

import { paletteBlackRice } from "../../../colorPalettle";

// import "./style.css";

/* The DataAnalysis Component */
export default function DataAnalysis() {
  const dataRef = useRef(null);
  const containerRef = useRef(null);
  const dataTitleRef = useRef(null);
  const maxPageIndex = 5;
  const [showPageIndex, setShowPageIndex] = useState(0);
  const [showPage, setShowPage] = useState([true, false, false, false]);
  const [isVisible, setIsVisible] = useState(false);
  const [directionIndex1, setDirectionIndex1] = useState("left");
  const [directionIndex2, setDirectionIndex2] = useState("left");
  const [directionIndex3, setDirectionIndex3] = useState("left");
  const [directionIndex4, setDirectionIndex4] = useState("left");
  const [canForward, setCanForward] = useState(true);
  const [canBackward, setCanBackward] = useState(false);

  function forward() {
    console.log(directionIndex1);
    let curPage = showPage;
    curPage[showPageIndex] = false;
    setShowPageIndex(showPageIndex + 1);
    curPage[showPageIndex + 1] = true;
    setShowPage(curPage);
    if (showPageIndex >= 1) {
      setDirectionIndex1("right");
    } else {
      setDirectionIndex1("left");
    }
    if (showPageIndex >= 2) {
      setDirectionIndex2("right");
    } else {
      setDirectionIndex2("left");
    }
    if (showPageIndex >= 3) {
      setDirectionIndex3("right");
    } else {
      setDirectionIndex3("left");
    }
    if (showPageIndex >= 4) {
      setDirectionIndex4("right");
    } else {
      setDirectionIndex4("left");
    }
    // console.log(directionIndex1);
    setCanForward(showPageIndex + 1 < maxPageIndex);
    setCanBackward(showPageIndex + 1 > 0);
  }
  function backward() {
    // console.log(directionIndex1)
    if (showPageIndex > 1) {
      setDirectionIndex1("right");
    } else {
      setDirectionIndex1("left");
    }
    if (showPageIndex > 2) {
      setDirectionIndex2("right");
    } else {
      setDirectionIndex2("left");
    }
    if (showPageIndex > 3) {
      setDirectionIndex3("right");
    } else {
      setDirectionIndex3("left");
    }
    if (showPageIndex > 4) {
      setDirectionIndex4("right");
    } else {
      setDirectionIndex4("left");
    }
    let curPage = showPage;
    curPage[showPageIndex] = false;
    setShowPageIndex(showPageIndex - 1);
    curPage[showPageIndex - 1] = true;
    setShowPage(curPage);
    setCanForward(showPageIndex - 1 < maxPageIndex);
    setCanBackward(showPageIndex - 1 > 0);
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(dataRef.current);
      }
    });

    observer.observe(dataRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="dataAnalysis"
      ref={dataRef}
      sx={{
        color: `${paletteBlackRice[4]}`,
        marginY: {xs: "50vw", sm: "20vw"},
        textAlign: "center",
      }}
    >
      <Box ref={dataTitleRef}>
        <Slide
          in={isVisible}
          direction="up"
          timeout={800}
          container={dataTitleRef.current}
        >
          <Typography
            sx={{
              marginBottom: "5vw",
              fontSize: "54px",
              fontWeight: "bold",
              paddingX: "10vw",
            }}
          >
            Data Analysis
            <Typography sx={{fontSize: { xs: "20px", lg: "30px" },}}>
              Welcome to my collection of statistical data analysis projects. As
              a Computer Science student with a passion for Statistics, I've
              dedicated time to exploring the power of data beyond the realm of
              CS. This section showcases my journey through various statistical
              projects, demonstrating how data can reveal patterns, predict
              trends, and provide deep insights. Each project here is a
              reflection of my commitment to understanding and leveraging
              statistical analysis in diverse contexts.
            </Typography>
          </Typography>
        </Slide>
      </Box>

      <Slide
        in={showPage[0]}
        direction="right"
        container={containerRef.current}
        timeout={900}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <DataVisualization></DataVisualization>
        </Box>
      </Slide>

      <Slide
        in={showPage[1]}
        direction={directionIndex1}
        timeout={900}
        container={containerRef.current}
        mountOnEnter
        unmountOnExit
        // style={{ transitionDelay: `900ms` }}
      >
        <Box>
          <Mingar></Mingar>
        </Box>
      </Slide>

      <Slide
        in={showPage[2]}
        direction={directionIndex2}
        timeout={900}
        // container={containerRef.current}
        mountOnEnter
        unmountOnExit
        // style={{ transitionDelay: `900ms` }}
      >
        <Box>
          <MlsPlayer></MlsPlayer>
        </Box>
      </Slide>

      <Slide
        in={showPage[3]}
        direction={directionIndex3}
        timeout={900}
        // container={containerRef.current}
        mountOnEnter
        unmountOnExit
        // style={{ transitionDelay: `900ms` }}
      >
        <Box>
          <LinearMixed></LinearMixed>
        </Box>
      </Slide>

      <Slide
        in={showPage[4]}
        direction={directionIndex4}
        timeout={900}
        container={containerRef.current}
        mountOnEnter
        unmountOnExit
        // style={{ transitionDelay: `900ms` }}
      >
        <Box>
          <Factorial></Factorial>
        </Box>
      </Slide>

      <Slide
        in={showPage[5]}
        direction="left"
        timeout={900}
        container={containerRef.current}
        mountOnEnter
        unmountOnExit
        // style={{ transitionDelay: `900ms` }}
      >
        <Box>
          <CollegeAdmission></CollegeAdmission>
        </Box>
      </Slide>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          marginTop: "5vw",
          height: "70vw",
          paddingTop: { xs: "20vw", md: "180px" },
        }}
      >
        <Grid item xs={2}>
          {canBackward && (
            <IconButton aria-label="left" onClick={() => backward()}>
              <ArrowBackIosIcon
                style={{ fontSize: 50, color: `${paletteBlackRice[4]}` }}
              />
            </IconButton>
          )}
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          {canForward && (
            <IconButton aria-label="right" onClick={() => forward()}>
              <ArrowForwardIosIcon
                style={{ fontSize: 50, color: `${paletteBlackRice[4]}` }}
              />
            </IconButton>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
