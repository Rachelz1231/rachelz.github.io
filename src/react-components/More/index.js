import React from "react";
import {
  Box,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
} from "@mui/material";

import bike from "./static/bike.jpg";
import hiking2 from "./static/hiking2.jpg";
import hiking from "./static/hiking.jpg";
import { paletteBlackYellow, paletteBlue } from "../../colorPalettle";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: bike,
    title: "Biking",
    rows: 1,
    cols: 1,
  },
  {
    img: hiking,
    title: "Hiking",
    rows: 2,
    cols: 1,
  },
  {
    img: hiking2,
    title: "Hiking2",
    rows: 1,
    cols: 1,
  },
];

/* The More Component */
export default function More() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: "-999",
        overflow: "hidden",
        backgroundImage: `linear-gradient(${paletteBlackYellow[0]},
            ${paletteBlue[4]})`,
        color: { xs: "white" },
        px: "5vw",
        py: "150px",
      }}
    >
      <Typography variant="h2">What else?</Typography>
      <Typography sx={{ fontSize: { xs: "20px", sm: "20px", md: "18px" } }}>
        Welcome to the fun side of my life – the adventures and passions that
        color my world outside the walls of academia and the office!
      </Typography>
      <Divider sx={{ backgroundColor: "white", m:1 }}></Divider>
      <Box
        sx={{
          textAlign: "left",
          zIndex: "0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "20px" },
            paddingX: "5vw",
            paddingBottom: "3vw",
            zIndex: 2,
          }}
        >
          I got into sports two years ago, and I have been active ever since. I
          find running and hiking to be great ways to relax and release stress.
          In May 2023, I finished my first 10k run event in Toronto, and I am
          planning for a half marathon soon!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "20px" },
            paddingX: "5vw",
            paddingBottom: "3vw",
            zIndex: 2,
          }}
        >
          I also snowboard, but there isn't any REAL mountain in Toronto...I
          can't wait for my first winter living in Cali.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "20px" },
            paddingX: "5vw",
            paddingBottom: "3vw",
            zIndex: 2,
          }}
        >
          Besides sports, I LOVE traveling and road trips! They fuels my passion
          for exploring nature's wonders, learning about different cultures, and
          embracing new adventures. It's amazing how each journey opens my eyes
          to new ways of life. I once drove alone on a round trip through
          Toronto - Ithaca - Newyork - Providence - Bosten - Montreal. I drove
          about 1000 miles in Iceland within 5 days.
        </Typography>
        <ImageList
          sx={{ width: "100%", height: "auto", overflow: "hidden" }}
          variant="quilted"
          cols={2}
          rowHeight={225}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{
                "& img": {
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
