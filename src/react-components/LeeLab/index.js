import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
// Importing image
import slides from "./static/slides.pdf";
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
/* Component for the  page */
class LeeLab extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          className="LeeLab"
          sx={{ marginX: "5vw", paddingBottom: "5vw" }}
        >
          <Box sx={{ marginBottom: "5vw" }}>
            <IconButton
              aria-label="report"
              onClick={() => window.open("/about")}
            >
              <MeetingRoomIcon style={{ fontSize: 50 }} />
              <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
                Back to Home Page
              </Typography>
            </IconButton>
            <Typography sx={{ float: "right", padding: "1vw" }}>
              Rachel's Personal Website
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "5vw", textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Lee Lab
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "5vw" }}>
            <Typography variant="h6">
              
            </Typography>
          </Box>
          <Typography variant="h4">
            
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "3vw" }}>
          </Typography>
            <Box>
                <IconButton aria-label="slides" onClick={() => window.open(slides)}>
                <DynamicFeedIcon style={{ fontSize: 50 }} />
                <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
                    Open Slides
                </Typography>
                </IconButton>
            </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default LeeLab;
