import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import BadgeIcon from '@mui/icons-material/Badge';
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
const ZperxLogo = 'url(https://images.pexels.com/photos/1028427/pexels-photo-1028427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';

const SideBar = () => {
const defaultTheme = createTheme();
  const [selectedItem, setSelectedItem] = useState('Dashboard');
  const hradmin = sessionStorage.getItem("hradmin");
  const navigate = useNavigate();


  useEffect(() => {
    const storedSelectedItem = window.sessionStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      setSelectedItem(storedSelectedItem);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    window.sessionStorage.setItem('selectedItem', item);
    navigate(`/${item}`);
  };

  const handleLogout = () => {
    sessionStorage.setItem("hradmin", false);
    window.location.href = `/`;

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#1c2331',
            color: '#ffffff',
          },
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
          <Avatar
            alt="Company Logo"
            src={ZperxLogo}
            sx={{ width: 80, height: 80, border: '2px solid yellow' }}
          />
        </Toolbar>
        <List>         
            <>
              <ListItem
                button
                selected={selectedItem === 'Cook with me'}
                onClick={() => handleItemClick('Cook with me')}
                sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
              >
                <ListItemIcon>
                  <BadgeIcon sx={{ color: '#ecf0f1' }} />
                </ListItemIcon>
                <ListItemText primary="Cook with me" />
              </ListItem>
              <ListItem
                button
                selected={selectedItem === 'Customer'}
                onClick={() => handleItemClick('Customer')}
                sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}
              >
                <ListItemIcon>
                  <BadgeIcon sx={{ color: '#ecf0f1' }} />
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItem>
            </>                   
        </List>
        <List sx={{ marginTop: 'auto' }}>
          <ListItem button onClick={handleLogout} sx={{ '&:hover': { backgroundColor: '#2c3e50' } }}>
            <LogoutIcon>
              <InventoryIcon sx={{ color: '#ecf0f1' }} />
            </LogoutIcon>
            <ListItemText primary="Logout" sx={{ paddingLeft: '50px' }} />
          </ListItem>
        </List>
      </Drawer>
      </ThemeProvider>
  );
};

export default SideBar;
