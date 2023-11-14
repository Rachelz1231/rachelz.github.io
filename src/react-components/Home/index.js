import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

// Importing components
import Header from "./../Header";
import NavBar from "./../NavBar";
import Footer from "./../Footer";
import AboutMe from "./aboutMe";
import WorkExperiences from "./workExperiences";
import ResearchExperiences from "./ResearchExperiences/researchExperiences";
import DataAnalysis from "./DataAnalysis/dataAnalysis";
import Contact from "./contact";

// Importing images
import eccho from "./static/eccho.png";
import IconButton from "@mui/material/IconButton";
import { Box, Chip, Button, Typography, Zoom, Slide } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CssBaseline from "@mui/material/CssBaseline";
import { orange, yellow, indigo, red, grey, blue } from "@mui/material/colors";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlue,
} from "../../colorPalettle";

// Importing ThemeProvider
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "linear-gradient(to right, #00395d, #8f8f8c)",
    },
  },
  typography: {
    // fontFamily: `'Libre Bodoni', serif`,
    fontFamily: `"Gill Sans", sans-serif`,
  },
});

/* Component for the Home page */
export default function Home({ appState }) {
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
    // <div className="home__bg-image center">
    //   <Link className="home__button-link center" to={"./../Queue"}>
    //          {  Using the global state variable from App.js }
    //     <Button className="home__button">Go to the {this.props.appState.term} Queue </Button>
    //   </Link>
    // </div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div className="App"> */}
      {/* Header component with text props. */}
      {/* <Header
          title={appState.title}
        /> */}
      {/* Navbar */}
      {/* <NavBar isHome={true} aboutMeInfo={aboutMeInfo} projects={projects} dataAnalysis={dataAnalysis}
        /> */}
      {/* Home content. */}
      <Box
        sx={{
          zIndex: "-999",
          overflow: "hidden",
          backgroundImage: `linear-gradient(${paletteBlackYellow[0]},
            ${paletteBlackYellow[0]},
            ${paletteBlue[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackYellow[0]}, 
            ${paletteBlackYellow[1]}, 
            ${paletteBlackYellow[0]}, 
            ${paletteBlue[0]})`,
        }}
      >
        <AboutMe></AboutMe>
        <WorkExperiences></WorkExperiences>
        <ResearchExperiences></ResearchExperiences>
        <DataAnalysis></DataAnalysis>
        <Contact></Contact>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
