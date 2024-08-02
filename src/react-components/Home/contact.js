import React from "react";
import { useRef } from "react";
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
    <Box
      className="contact"
      sx={{
        color: `${paletteBlackRice[5]}`,
        marginY: { xs: "20vw" },
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          // margin: "1vw",
          marginBottom: "5vw",
          fontSize: "54px",
          fontWeight: "bold",
          paddingX: "10vw",
        }}
      >
        Get In Touch
        <Typography sx={{ fontSize: { xs: "20px", lg: "30px" } }}>
          Feel free to reach out for discussions, inquiries, or collaborative
          ideas related to my work. I welcome the opportunity to explore
          collaborative possibilities and learn from each other's insights and
          experiences. Your questions and ideas are always appreciated, and I
          look forward to the potential of working together.
        </Typography>
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
        <Grid item xs={12} sm={6} padding={0}>
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
                fontSize: "20px",
                display: { xs: "inline-block", sm: "block" },
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
                  fontSize: { xs:30, sm:50,  md: 90 },
                  margin: 0,
                  color: `${paletteBlue[2]}`,
                }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: "20px",
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Rachel Z
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
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
                fontSize: "20px",
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
                sx={{ fontSize: { xs:30, sm:50,  md: 90 }, color: `${grey[700]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: "20px",
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Rachelz1231
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} padding={0}>
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
                fontSize: "20px",
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
                sx={{ fontSize: { xs:30, sm:50, md: 90 }, color: `${green[400]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: "20px",
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              +1 289 259 1261
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
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
                fontSize: "20px",
                display: { xs: "inline-block", sm: "block" },
                //width: { xs: "20vw", sm: "auto" },
              }}
            >
              Email
            </Typography>
            <IconButton
              aria-label="gmail"
              onClick={() => window.open("mailto:rachelz1231@gmail.com")}
            >
              <GoogleIcon
                sx={{ fontSize: { xs:30, sm:50, md: 90 }, color: `${red[400]}` }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: "20px",
              }}
            >
              rachel.yuchen.zeng@gmail.com
            </Typography>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={6}> */}
          {/* <Paper
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
                fontSize: "20px",
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
              sx={
                {
                  fontSize: "20px",
                }
              }
            >
              yuchen.zeng@mail.utoronto.ca
            </Typography>
          </Paper> */}
        {/* </Grid>
        <Grid item xs={12} sm={6} md={6}>
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
                fontSize: "20px",
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
                fontSize: "20px",
              }}
            >
              Maomao#2668
            </Typography>
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
  );
}
