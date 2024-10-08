import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

// Importing components
import Footer from "./../Footer";
import AboutMe from "./home";
import WorkExperiences from "./workExperiences";
import ResearchExperiences from "./ResearchExperiences/researchExperiences";
import DataAnalysis from "./DataAnalysis/dataAnalysis";
import Contact from "./contact";
import ResponsiveAppBar from "../appBar";

// Importing images
import { Box } from "@mui/material";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlue,
} from "../../colorPalettle";
/* Component for the Home page */
const Home = () => {
  const aboutMeInfo = useRef(null);
  const projects = useRef(null);
  const dataAnalysis = useRef(null);

  let location = useLocation();
  useEffect(() => {
    if (location.state != null) {
      if (location.state.name == "Data Analysis") {
        dataAnalysis.current?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      } else if (location.state.name == "Projects") {
        projects.current?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.pathname]);
  return (
    <Box
      sx={{
        zIndex: "-999",
        overflow: "hidden",
        backgroundImage: `linear-gradient(${paletteBlackYellow[0]},
            ${paletteBlue[4]},
            ${paletteBlue[4]},
            ${paletteBlue[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackYellow[0]}, 
            ${paletteBlackYellow[1]}, ${paletteBlackYellow[1]}, 
            ${paletteBlue[0]},${paletteBlue[0]})`,
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>
      <AboutMe></AboutMe>
      <WorkExperiences></WorkExperiences>
      <ResearchExperiences></ResearchExperiences>
      <DataAnalysis></DataAnalysis>
      <Contact></Contact>
      <Footer />
    </Box>
  );
};
export default Home;
