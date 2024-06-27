// src/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    // Logic for logout action
    console.log("User logged out");
  };

  const linkStyle = {
    color: 'inherit',
    textDecoration: 'none',
  };

  const activeStyle = {
    color: 'orange',
  };

  const getLinkStyle = ({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle);

  return (
    <AppBar position="fixed">
      <Toolbar style={{ justifyContent: 'space-between', backgroundColor:'#282828' }}>
        <Typography variant="h6" component={NavLink} to="/" style={{ ...linkStyle, flexGrow: 1, fontWeight:'bolder' }}>
          Zenra <span style={{color:'orange'}}>Culinary</span>
        </Typography>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {/* <MenuItem component={NavLink} to="/home" style={linkStyle}>
            Home
          </MenuItem>
          <MenuItem component={NavLink} to="/about" style={linkStyle}>
            About
          </MenuItem> */}
          <MenuItem component={NavLink} to="/cookHelper" style={getLinkStyle}>
            Cook Helper
          </MenuItem>
          <Button variant="contained" color="warning" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
