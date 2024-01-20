import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

// Importing components
import Footer from "./../Footer";
import AboutMe from "./aboutMe";
import WorkExperiences from "./workExperiences";
import ResearchExperiences from "./ResearchExperiences/researchExperiences";
import DataAnalysis from "./DataAnalysis/dataAnalysis";
import LifeBeyond from "./LifeBeyond/lifeBeyond";
import Contact from "./contact";

// Importing images
import { Box } from "@mui/material";

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
            ${paletteBlue[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackRice[4]},
            ${paletteBlackYellow[0]}, 
            ${paletteBlackYellow[0]}, 
            ${paletteBlackYellow[1]}, ${paletteBlackYellow[1]}, 
            ${paletteBlue[0]},${paletteBlue[0]},
            ${paletteBlackYellow[0]})`,
        }}
      >
        <AboutMe></AboutMe>
        <ResearchExperiences></ResearchExperiences>
        <WorkExperiences></WorkExperiences>
        <DataAnalysis></DataAnalysis>
        <LifeBeyond></LifeBeyond>
        <Contact></Contact>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
export default Home;