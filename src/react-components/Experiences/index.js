import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { paletteBlackYellow, paletteBlue } from "../../colorPalettle";
/* The Publications Component */
export default function Experiences() {
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
      <Typography variant="h2">Experiences</Typography>
      <Divider sx={{ backgroundColor: "white", m: 1 }}></Divider>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Research Lead at University of California, Berkeley
        </Typography>
        <Typography variant="subtitle1" color="white">
          <i>
            The Donald O. Pederson Center for Electronic Systems Design | Sept
            2024 – Present | Berkeley, CA, USA
          </i>
        </Typography>
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px", lg: "20px" } }}>
          Supervised by Edward Kim, I am designing a user-oriented system that
          assists clinicians in creating rehabilitation exercise curriculums
          tailored to individual patients. The system allows doctors to consider
          patients' goals within their living areas, easily create exercises by
          interacting with Virtual Surroundings, and place virtual objects to
          define tasks without needing coding skills.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Researcher, Part-time Software Developer at University of Toronto
        </Typography>
        <Typography variant="subtitle1" color="white">
          <i>
            Intelligent Adaptive Interventions Lab | August 2023 – May 2024 |
            Toronto, ON, Canada
          </i>
        </Typography>
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px", lg: "20px" } }}>
          I conducted statistical analysis on real user data, studying user
          engagement and accessibility across various platforms. I also designed
          and deployed multiple software tools utilizing Large Language Models
          (LLMs) to deliver tailored user experiences, showcasing proficiency in
          AI-driven technologies.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Assistant Engineer at Huawei Technologies Canada Ltd.
        </Typography>
        <Typography variant="subtitle1" color="white">
          <i>
            Distributed Data and Storage Lab | May 2022 – Aug 2023 | Markham,
            ON, Canada
          </i>
        </Typography>
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px", lg: "20px" } }}>
          I developed, tested, and debugged key features such as server
          intercommunication and system fault-tolerance within GaussDB, an
          enterprise-class distributed database. Leading a test group, I
          implemented over 50 G-tests, mock tests, concurrency tests, and
          integration tests to enhance product quality. I also presented a
          detailed overview of the software architecture to over 40 engineers.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Undergraduate Research Team Lead at University of Toronto
        </Typography>
        <Typography variant="subtitle1" color="white">
          <i>Lee Language Lab | Jan 2023 – May 2024 | Toronto, ON, Canada</i>
        </Typography>
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px", lg: "20px" } }}>
          I conducted and analyzed more than 100 empirical experiments using
          language models such as mBART, M2M, XLM-R, and NLLB, yielding valuable
          insights. I presented an extensive evaluation of the effectiveness of
          fine-tuning and pre-training techniques in the context of
          domain-specific low-resource natural language translation. I also
          recommended several strategies for utilizing auxiliary parallel data
          in building such systems.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Researcher at University of Toronto
        </Typography>
        <Typography variant="subtitle1" color="white">
          <i>
            Evaluating Models and Algorithms for Social Networks | Sept 2021 –
            Dec 2022 | Toronto, ON, Canada
          </i>
        </Typography>
        <Typography sx={{ fontSize: { xs: "3vw", sm: "20px", lg: "20px" } }}>
          As a student supervised by Professor Peter Marbach, I designed,
          implemented, and assessed the performance of six utility functions,
          which were applied to over 80,000 users and 12.7 million tweets. These
          efforts led to successful experiments that expanded social communities
          using the developed algorithm. I also presented my research findings
          to an audience of over 100 students and professors at the 2022
          Research Opportunities Program Fair.
        </Typography>
      </Box>
    </Box>
  );
}
