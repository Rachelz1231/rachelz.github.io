import React from "react";
import "./styles.css";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

/* The Header Component */
class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="header">
        <h1 className='website-title'>{title}</h1>
        <span className='website-subtitle'>{subtitle}</span>

        <nav className="header-icons">
          <IconButton 
              aria-label="linkedIn" 
              onClick={() => window.open('https://www.linkedin.com/in/rachelz1231/')}
              >
            <LinkedInIcon style={{ fontSize: 45 }}/>
          </IconButton>
          <IconButton 
              aria-label="gitHub" 
              onClick={() => window.open('https://github.com/Rachelz1231')}
              >
            <GitHubIcon style={{ fontSize: 37 }}/>
          </IconButton>
        </nav>
      </div>
    );
  }
}

export default Header;