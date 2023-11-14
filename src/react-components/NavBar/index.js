import React from 'react';
import {useRef} from 'react';
import "./styles.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { NavLink, useLocation } from 'react-router-dom';

/* The Navbar Component */
export default function NavBar({ isHome, aboutMe, projects,dataAnalysis }) {
  let location = useLocation();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const [anchorEl4, setAnchorEl4] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const open4 = Boolean(anchorEl4);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, ref) => {
    if (event.currentTarget.id == "nav-button1") {
      setAnchorEl1(event.currentTarget);
    } else if (event.currentTarget.id == "nav-button2") {
      setAnchorEl2(event.currentTarget);
    } else if (event.currentTarget.id == "nav-button3") {
      setAnchorEl3(event.currentTarget);
    } else if (event.currentTarget.id == "nav-button4") {
      setAnchorEl4(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setAnchorEl4(null);
  };
  const onClickToScroll = (event, ref) => {
    if (isHome && ref != null) {
      // Scroll to the ref
      ref.current?.scrollIntoView({behavior: 'smooth'});
    }
    handleClose();
  };

  const theme = useTheme();

  return (
    <nav id="nav-bar">
      <span>
        <Button variant="nav-bar__button" onClick={event => onClickToScroll(event, aboutMe)}>
          <NavLink to="/about" style={{ textDecoration: 'none', color: 'unset' }}>
            <b>About Me</b>
          </NavLink>
        </Button>
      </span>

      <span>
        <Button
          id="nav-button1"
          variant="nav-bar__button"
          aria-controls={open1 ? 'nav-menu1' : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? 'true' : undefined}
          onClick={handleClick}
        >
          Projects
        </Button>
        <Menu
          anchorEl={anchorEl1}
          open={open1}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'nav-button1',
            sx: { width: anchorEl1 && anchorEl1.offsetWidth }
          }}
        >
          <NavLink
            to={{
              pathname: "/about",
              state: {name: isHome ? null : "Projects"}
            }}
            style={{ textDecoration: 'none', color: 'unset' }}
          >
            <MenuItem onClick={event => onClickToScroll(event, projects)}>Overview</MenuItem>
          </NavLink>
          <hr/>
          <NavLink to="/projects/student-ability" style={{ textDecoration: 'none', color: 'unset' }}>
          <MenuItem>
              Estimation of Students’ Ability Level
          </MenuItem>
          </NavLink>
          <hr/>
          <NavLink to="/projects/moba-tracker" style={{ textDecoration: 'none', color: 'unset' }}>
          <MenuItem>Moba Tracker Web App</MenuItem>
          </NavLink>
          <hr/>
          <NavLink to="/projects/personal-website" style={{ textDecoration: 'none', color: 'unset' }}>
          <MenuItem>My Personal Website</MenuItem>
          </NavLink>
        </Menu>
      </span>

      <span>
        <Button
          id="nav-button3"
          variant="nav-bar__button"
          aria-controls={open3 ? 'nav-menu3' : undefined}
          aria-haspopup="true"
          aria-expanded={open3 ? 'true' : undefined}
          onClick={handleClick}
        >
          Research
        </Button>
        <Menu
          anchorEl={anchorEl3}
          open={open3}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'nav-button3',
            sx: { width: anchorEl3 && anchorEl3.offsetWidth }
          }}
        >
          <MenuItem>
            <NavLink to="/research/social-networks" style={{ textDecoration: 'none', color: 'unset' }}>
              Social Networks
            </NavLink>
          </MenuItem>
        </Menu>
      </span>

      <span>
        <Button
          id="nav-button2"
          variant="nav-bar__button"
          aria-controls={open2 ? 'nav-menu2' : undefined}
          aria-haspopup="true"
          aria-expanded={open2 ? 'true' : undefined}
          onClick={handleClick}
        >
          Data Analysis
        </Button>
        <Menu
          id="nav-menu1"
          anchorEl={anchorEl2}
          open={open2}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'nav-button2',
            sx: { width: anchorEl2 && anchorEl2.offsetWidth }
          }}
        >
          <NavLink
            to={{
              pathname: "/about",
              state: {name: isHome ? null : "Data Analysis"}
            }}
            style={{ textDecoration: 'none', color: 'unset' }}
          >
            <MenuItem onClick={event => onClickToScroll(event, dataAnalysis)}>Overview</MenuItem>
          </NavLink>
          <hr/>
          <NavLink to="/data-analysis/mingar" style={{ textDecoration: 'none', color: 'unset' }}>
            <MenuItem>
              Analysis on MINGAR’s Fitness Tracker(GLMM)
            </MenuItem>
          </NavLink>
          <hr/>
          <MenuItem>
            <NavLink to="/data-analysis/CPU-usage" style={{ textDecoration: 'none', color: 'unset' }}>
              Factorial Experiment
            </NavLink>
          </MenuItem>
          <hr/>
          <MenuItem>
            <NavLink to="/data-analysis/linear-mixed" style={{ textDecoration: 'none', color: 'unset' }}>
              Linear Mixed Model Exploration
            </NavLink>
          </MenuItem>
          <hr/>
          <MenuItem>
            <NavLink to="/data-analysis/data-visualization" style={{ textDecoration: 'none', color: 'unset' }}>
              Data Wrangling and Visualization
            </NavLink>
          </MenuItem>
          </Menu>
      </span>
      
      <span>
      <Button
          id="nav-button4"
          variant="nav-bar__button"
          aria-controls={open4 ? 'nav-menu4' : undefined}
          aria-haspopup="true"
          aria-expanded={open4 ? 'true' : undefined}
          onClick={handleClick}
        >
          Extracurricular
        </Button>
        <Menu
          anchorEl={anchorEl4}
          open={open4}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'nav-button4',
            sx: { width: anchorEl4 && anchorEl4.offsetWidth }
          }}
        >
          <MenuItem>
            <NavLink to="/extracurricular/volunteer-teaching" style={{ textDecoration: 'none', color: 'unset' }}>
              Volunteer Teaching
            </NavLink>
          </MenuItem>
          <hr/>
          <MenuItem>
            <NavLink to="/extracurricular/house-representative" style={{ textDecoration: 'none', color: 'unset' }}>
              House Representative Experience
            </NavLink>
          </MenuItem>
        </Menu>
      </span>
      <span>
        <Button variant="nav-bar__button">
          <NavLink to="/contact" style={{ textDecoration: 'none', color: 'unset' }}>
            CONTACT
          </NavLink>
        </Button>
      </span>
    </nav>
  );
};