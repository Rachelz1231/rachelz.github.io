import React from "react";
import "./styles.css";
import { Paper, Typography, Breadcrumbs} from '@mui/material';
import MuiLink from '@mui/material/Link';
import { Document, Page } from 'react-pdf';
import { NavLink } from 'react-router-dom';
// Importing components
import Header from "./../Header";
import NavBar from "./../NavBar";
import Footer from "./../Footer";
import {RenderPdf} from "./../RenderPdf";
// Importing pdf
import report from "./static/report.pdf";

import IconButton from '@mui/material/IconButton';
import {Chip, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* Component for the LinearMixed page */
class LinearMixed extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Header component with text props. */}
        <Header
          title={`${this.props.appState.title}`}
          subtitle={`${this.props.appState.subtitle}`}
        />
        {/* NavBar component with text props. */}
        <NavBar/>
        {/* LinearMixed content. */}
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink underline="hover" color="inherit" href="/">
              About Me
            </MuiLink>
            <Typography color="text.primary">
              Data Analysis
            </Typography>
            <Typography color="text.primary">
              Linear Mixed Model Exploration
            </Typography>
          </Breadcrumbs>

          <h1>Linear Mixed Model Exploration</h1>
          <p>
            To download pdf or rmd file of this report, feel free to visit my data analysis repository on Github.
          </p>
          <IconButton 
            className="mingar__learn-more"
            aria-label="learn more" 
            onClick={() => window.open('https://github.com/Rachelz1231/STA130-An-Introduction-to-Statistical-Reasoning-and-Data-Science')}
            >
            <h6>Jump to Github Repo</h6>
            <ArrowForwardIcon style={{ fontSize: 15 }}/>
          </IconButton>
          <br style={{ clear:"both"}} />
          <hr/>
          <figure className="mingar__pdf__wrapper">
            <Paper className="mingar__pdf">
              <RenderPdf file={report}/>
            </Paper>
              <figcaption>Fig. 1 - Mini-portfolio, in Winter 2022
              </figcaption>
          </figure>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default LinearMixed;
