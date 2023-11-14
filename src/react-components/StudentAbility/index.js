import React from "react";
import "./styles.css";
import { Grid, Paper, Typography, Breadcrumbs} from '@mui/material';
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
import question from "./static/question.pdf";

import IconButton from '@mui/material/IconButton';
import {Chip, Button} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

/* Component for the StudentAbility page */
class StudentAbility extends React.Component {
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
        {/* StudentAbility content. */}
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <MuiLink underline="hover" color="inherit" href="/">
              About Me
            </MuiLink>
            <Typography color="text.primary">
              Projects
            </Typography>
            <Typography color="text.primary">
              Estimation of Students’ Ability Level
            </Typography>
          </Breadcrumbs>

          <h1>Estimation of Students’ Ability Level</h1>
          <p>
            To learn more of the code behind this report, feel free to visit my data analysis repository on Github.
          </p>
          <IconButton 
            className="mingar__learn-more"
            aria-label="learn more" 
            onClick={() => window.open('https://github.com/Rachelz1231/Estimation-of-Students-Ability-Level')}
            >
            <h6>Jump to Github Repo</h6>
            <ArrowForwardIcon style={{ fontSize: 15 }}/>
          </IconButton>
          <br style={{ clear:"both"}} />
          <hr/>
          <Grid container justify="space-evenly" alignItems="stretch" spacing={2} direction="row">
            <Grid item xs={6}>
          <figure className="mingar__pdf__wrapper">
            <Paper className="mingar__pdf">
              <RenderPdf file={question}/>
            </Paper>
              <figcaption>Fig. 1 - Instruction, in Winter 2021
              </figcaption>
          </figure>
          </Grid>
          <Grid item xs={6}>
          <figure className="mingar__pdf__wrapper">
            <Paper className="mingar__pdf">
              <RenderPdf file={report}/>
            </Paper>
              <figcaption>Fig. 2 - Report, in Winter 2021
              </figcaption>
          </figure>
          </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default StudentAbility;
