import React from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import report1 from "./static/report.pdf";
import report2 from "./static/report2.pdf";
// Importing image
import poster from "./static/poster.PNG";
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
/* Component for the SocialNetworks page */
class SocialNetworks extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          className="SocialNetworks"
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
              Evaluating Models and Algorithms for Social Networks using Twitter
              Data
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "5vw" }}>
            <Typography variant="h6">
              In today's world, social networking applications have become an
              integral part of our daily lives. These platforms generate
              terabytes of data daily, offering a unique opportunity to gain
              insights into how people interact and exchange information within
              social networks. During my third year as an ROP (Research
              Opportunity Program) student, I had the privilege of conducting
              research on social networks alongside Professor Peter Marbach.
              Together, we discovered numerous fascinating characteristics
              within social networks formed on Twitter. This project deeply
              interested me, and I was eager to continue my studies.
              Consequently, I pursued further research on this subject during
              the summer of 2022 as part of a research project course.
            </Typography>
          </Box>
          <Typography variant="h4">
            Finding during the 2021-2022 School Year(ROP)
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "3vw" }}>
            In social networks, communities often form around shared interests.
            Within these communities, some users exhibit higher connectivity
            than others, and we refer to them as 'core users.' To identify these
            core users within online communities on Twitter, we developed the
            Network Algorithm Contained Experiment System (SNACES). When given a
            random Twitter user as input, SNACES initially identifies the user's
            local neighborhoods among their Twitter friends. It then creates
            multiple clusters of users and selects one for analysis. Within this
            chosen cluster, SNACES ranks the users to identify the most
            connected individual in that neighborhood. This process repeats
            until the algorithm identifies the same user within the cluster from
            the user's local neighborhood.
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: "3vw" }}>
            In our analysis of user interactions and characteristics on Twitter,
            we aim to achieve two primary goals:
            <Typography variant="h6">
              (1) Community Core: We start with a randomly chosen user and aim
              to identify the core users of the community to which that user
              belongs. These core users are central figures within their
              respective communities.
            </Typography>
            <Typography variant="h6">
              (2) Community Expansion: Building on the identification of core
              users, we expand our focus to discover other users and map out the
              entire community. This allows us to understand the broader
              structure of the community.
            </Typography>
          </Typography>
          <Typography variant="h6">
            To assess a user's activity within their neighborhood, we have
            defined two key metrics:
            <Typography variant="h6">
              (1) Production: This metric measures a user's contribution to the
              community by counting the number of retweets their original tweets
              receive from other users within the community.
            </Typography>
            <Typography variant="h6">
              (2) Consumption: We measure a user's engagement with the community
              by counting the number of retweets they make of original tweets
              from other users within the community.
            </Typography>
          </Typography>
          <Box sx={{ padding: "2vw", textAlign: "center" }}>
            <Paper
              style={{
                color: "grey",
                backgroundImage: `url(${poster})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: "80vw",
                height: "70vw",
                margin: "auto",
              }}
            ></Paper>
            <Box>
            <IconButton aria-label="poster" onClick={() => window.open(poster)}>
              <DynamicFeedIcon style={{ fontSize: 50 }} />
              <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
                Open Poster in a New Window
              </Typography>
            </IconButton>
            </Box>
            <Box>
            <IconButton aria-label="report" onClick={() => window.open(report1)}>
              <PictureAsPdfIcon style={{ fontSize: 50 }} />
              <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
                Report: Construction of Twitter Community Expansion Algorithm (May 2022)
              </Typography>
            </IconButton>
            </Box>
            <Box>
            <IconButton aria-label="report" onClick={() => window.open(report2)}>
              <PictureAsPdfIcon style={{ fontSize: 50 }} />
              <Typography sx={{ fontSize: { xs: "2.5vw", md: "20px" } }}>
                Report: Community Expansion Algorithms for Social Networks Using Twitter Data (Dec 2022)
              </Typography>
            </IconButton>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default SocialNetworks;
