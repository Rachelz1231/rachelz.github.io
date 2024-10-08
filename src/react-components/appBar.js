import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

// const contact = [
//   <Button
//     startIcon={<LinkedInIcon />}
//     aria-label="linkedIn"
//     onClick={(event) => {
//       window.open("https://www.linkedin.com/in/rachel-yuchen-zeng/", "_blank");
//     }}
//     sx={{ color: "white" }}
//   >
//     Linkedin
//   </Button>,
//   <Button
//     startIcon={<EmailIcon />}
//     aria-label="email"
//     onClick={() => window.open("mailto:rachel.zeng@berkeley.edu")}
//     sx={{ color: "white" }}
//   >
//     Email
//   </Button>,
//   <Button
//     startIcon={<GitHubIcon />}
//     aria-label="gitHub"
//     onClick={() => window.open("https://github.com/Rachelz1231")}
//     sx={{ color: "white" }}
//   >
//     GitHub
//   </Button>,
//   <Button
//     startIcon={<WhatsAppIcon />}
//     aria-label="whatsapp"
//     onClick={() => window.open("https://wa.me/15108338855")}
//     sx={{ color: "white" }}
//   >
//     +1 510 833 8855
//   </Button>,
// ];
const drawerWidth = 240;
const navItems = [
  "Home",
  "Experiences",
  "Projects",
  "Publications",
  "Management",
  "Education",
  "More",
  "Contact",
];
const navItemsNav = [
  "/",
  "/experiences",
  "/projects",
  "/publications",
  "/management",
  "/education",
  "/more",
  "/contact",
];

function ResponsiveAppBar(props) {
  // const location = useLocation(); // Get current route
  const navigate = useNavigate(); // For navigation
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Rachel Zeng
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(navItemsNav[index])}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar position="fixed" sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                color: "white",
              }}
            >
              <Button onClick={() => navigate("/")} sx={{ color: "white" }}>
                Home
              </Button>
              <Button
                onClick={() => navigate("/experiences")}
                sx={{ color: "white" }}
              >
                Experiences
              </Button>
              <Button
                onClick={() => navigate("/projects")}
                sx={{ color: "white" }}
              >
                Projects
              </Button>
              <Button
                onClick={() => navigate("/publications")}
                sx={{ color: "white" }}
              >
                Publications
              </Button>
              <Button
                onClick={() => navigate("/management")}
                sx={{ color: "white" }}
              >
                Management
              </Button>
              <Button
                onClick={() => navigate("/education")}
                sx={{ color: "white" }}
              >
                Education
              </Button>
              <Button onClick={() => navigate("/more")} sx={{ color: "white" }}>
                More
              </Button>
            </Box>{" "}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
              }}
            >
              <Button
                onClick={() => navigate("/contact")}
                sx={{ color: "white" }}
              >
                Contact
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default ResponsiveAppBar;
