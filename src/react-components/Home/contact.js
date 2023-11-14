import React from "react";
import { useRef } from "react";
import profilePhoto from "./static/profile-photo.png";
import { yellow, grey } from "@mui/material/colors";
import { Box, Typography, Zoom, IconButton, Paper, Grid } from "@mui/material";
import {
  paletteBlackRice,
  paletteBlackYellow,
  paletteBlue,
} from "../../colorPalettle";
import { red, blue, green } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import ForumIcon from "@mui/icons-material/Forum";
import EmailIcon from "@mui/icons-material/Email";
/* The Contact Component */
export default function Contact() {
  const aboutMeInfoBox = useRef(null);
  return (
    <Box className="contact"
    sx={{
      width: "100%",
      color: `${paletteBlackRice[4]}`,
      marginTop: { xs: "20vw", md: "0" },
      textAlign: "center",
    }}>
      <Typography
        sx={{
          // margin: "1vw",
          marginBottom: "5vw",
          fontSize: { xs: "6vw", md: "54px" },
          fontWeight: "bold",
        }}
      >
        Contact
      </Typography>
      <Grid
        className="contact"
        container
        spacing={1}
        direction="row"
        sx={{
          width: "100%",
          // justifyContent: {xs:"left", sm: "center"},
          opacity: 0.8,
        }}
      >
        <Grid item xs={12} sm={6} md={4} padding={0}>
          <Paper
            className="contact"
            onClick={() =>
              window.open("https://www.linkedin.com/in/rachelz1231/")
            }
            sx={{
              "&:hover": {
                cursor: "pointer",
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              LinkedIn
            </Typography>
            <IconButton
              aria-label="linkedIn"
              onClick={() =>
                window.open("https://www.linkedin.com/in/rachelz1231/")
              }
            >
              <LinkedInIcon
                sx={{
                  fontSize: { xs: 50, md: 90 },
                  margin: 0,
                  color: `${paletteBlue[2]}`,
                }}
              />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Rachel Z
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="contact"
            onClick={() => window.open("https://github.com/Rachelz1231")}
            sx={{
              "&:hover": {
                cursor: "pointer",
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Github
            </Typography>
            <IconButton
              aria-label="gitHub"
              onClick={() => window.open("https://github.com/Rachelz1231")}
            >
              <GitHubIcon
                sx={{ fontSize: { xs: 50, md: 90 }, color: `${grey[700]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Rachelz1231
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} padding={0}>
          <Paper
            className="contact"
            onClick={() => window.open("https://wa.me/12892591261")}
            sx={{
              "&:hover": {
                cursor: "pointer",
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              WhatsApp
            </Typography>
            <IconButton
              aria-label="whatsapp"
              onClick={() => window.open("https://wa.me/12892591261")}
            >
              <WhatsAppIcon
                sx={{ fontSize: { xs: 50, md: 90 }, color: `${green[400]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              +1 289 259 1261
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="contact"
            onClick={() => window.open("mailto:rachelz1231@gmail.com")}
            sx={{
              "&:hover": {
                cursor: "pointer",
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Gmail
            </Typography>
            <IconButton
              aria-label="gmail"
              onClick={() => window.open("mailto:rachelz1231@gmail.com")}
            >
              <GoogleIcon
                sx={{ fontSize: { xs: 50, md: 90 }, color: `${red[400]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                // display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              rachelz1231@gmail.com
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="contact"
            onClick={() => window.open("mailto:yuchen.zeng@mail.utoronto.ca")}
            sx={{
              "&:hover": {
                cursor: "pointer",
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Institution Email
            </Typography>
            <IconButton
              aria-label="school-email"
              onClick={() => window.open("mailto:yuchen.zeng@mail.utoronto.ca")}
            >
              <EmailIcon sx={{ fontSize: { xs: 50, md: 90 } }} />
            </IconButton>
            <Typography
              sx={{
                // display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              yuchen.zeng@mail.utoronto.ca
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            className="contact"
            sx={{
              "&:hover": {
                scale: "1.04",
              },
            }}
          >
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Discord
            </Typography>
            <IconButton aria-label="discord">
              <ForumIcon
                sx={{ fontSize: { xs: 50, md: 90 }, color: `${blue[400]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Maomao#2668
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
