import React, { useState } from 'react';
import { Link, useRoutes, useLocation } from 'react-router';
// material-ui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
// icons
import InfoIcon from '@mui/icons-material/Info';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;
const navigationItems = {
  'Ready to Wear': ['Watermelon Seeds', 'Timeless Denim'],
  Accessories: ['Belts', 'Bags'],
  'Garment History': ['Ready to Wear', 'Custom Garments', 'Couture', 'Bridal'],
};

const Navbar = (props) => {
  const { window } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentOpenMenu, setCurrentOpenMenu] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleNavButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
    setCurrentOpenMenu(event.target.textContent);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentOpenMenu(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        position={location.pathname === '/' ? 'absolute' : 'static'}
        sx={{ background: 'transparent', boxShadow: 'none', padding: '10px' }}
      >
        <Toolbar>
          {/* LOGO */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <Box component="img" src="/images/RAHF.svg" alt="logo" sx={{ width: { xs: 100, sm: 120 } }} />
            </Link>
          </Box>

          {/* MOBILE BUTTONS */}
          <Stack direction="row">
            <IconButton sx={{ color: location.pathname === '/' ? '#fff' : '#000' }}>
              <InfoIcon />
            </IconButton>

            <IconButton
              sx={{ display: { xs: 'block', sm: 'none' }, margin: 'none', color: location.pathname === '/' ? '#fff' : '#000' }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon color="inherit" />
            </IconButton>
          </Stack>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.keys(navigationItems).map((item) => (
              <Button
                onClick={handleNavButtonClick}
                key={item}
                sx={{ color: location.pathname === '/' ? '#fff' : '#000', fontSize: 18, fontWeight: 'bold' }}
              >
                {item}
              </Button>
            ))}
          </Box>
          {/* MENU ITEMS */}
        </Toolbar>

        <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
          {currentOpenMenu
            ? navigationItems[currentOpenMenu].map((item) => {
                return (
                  <MenuItem key={item} onClick={handleMenuClose}>
                    {item}
                  </MenuItem>
                );
              })
            : null}
        </Menu>
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {/* LOGO */}
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
            <Box component="img" src="/images/RAHF.svg" alt="logo" sx={{ width: 100 }} />
          </Box>

          {/* MENU ITEMS */}
          {Object.keys(navigationItems).map((item) => {
            return (
              <List key={item} sx={{ pb: 0 }}>
                <ListItem>
                  <ListItemText primary={item} />

                  <ListItemIcon>
                    <ExpandMore />
                  </ListItemIcon>
                </ListItem>

                <List sx={{ ml: 5 }} disablePadding>
                  {navigationItems[item].map((subItem) => {
                    return (
                      <ListItem key={subItem}>
                        <ListItemText primary={subItem} />
                      </ListItem>
                    );
                  })}
                </List>
              </List>
            );
          })}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Navbar;
