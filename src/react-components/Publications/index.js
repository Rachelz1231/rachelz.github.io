import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { paletteBlackYellow, paletteBlue } from "../../colorPalettle";
/* The Publications Component */
export default function Publications() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        zIndex: "-999",
        overflow: "hidden",
        backgroundImage: `linear-gradient(${paletteBlackYellow[0]},
            ${paletteBlue[4]})`,
        minHeight: "100vh",
        color: { xs: "white" },
        px: "5vw",
        pt: "150px",
      }}
    >
      <Typography variant="h2">Publications</Typography>
      <Divider sx={{ backgroundColor: "white", m: 1 }}></Divider>
      <Box
        sx={{
          textAlign: "left",
          zIndex: "0",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "18px" },
            p: "10px",
          }}
        >
          Bhattacharjee, A., <b>Zeng, Y.</b>, Xu, S. Y., et al. (2024).{" "}
          <a
            href="https://dl.acm.org/doi/10.1145/3613904.3642081"
            target="_blank"
            rel="noopener noreferrer"
          >
            Understanding the Role of Large Language Models in Personalizing and
            Scaffolding Strategies to Combat Academic Procrastination.
          </a>{" "}
          <i>
            In Proceedings of the 2024 CHI Conference on Human Factors in
            Computing Systems.
          </i>{" "}
          <b>Best Paper Honorable Mention.</b>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "20px", md: "18px" },
            p: "10px",
          }}
        >
          Rao, P., Xu, S., Bhattacharjee, A., <b>Zeng, Y.</b>, et al. (2024).{" "}
          <a
            href="https://ceur-ws.org/Vol-3728/paper4.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Integrating Digital Calendars with Large Language Models for Stress
            Management Interventions.
          </a>{" "}
          <i>ALBECS-2024:</i>{" "}
          <i>Workshop on Algorithmic Behavior Change Support.</i>
        </Typography>
      </Box>
    </Box>
  );
}
