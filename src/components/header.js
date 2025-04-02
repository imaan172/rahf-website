import React, { useState } from "react";
import { AppBar, Toolbar, TextField, IconButton, Tabs, Tab, Menu, MenuItem, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const Header = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  
  const handleTabClick = (event, tabName) => {
    setAnchorEl(event.currentTarget);
    setActiveTab(tabName);
  };

  
  const handleClose = () => {
    setAnchorEl(null);
    setActiveTab(null);
  };

  return (
    <AppBar position="absolute" sx={{ background: "transparent", boxShadow: "none", padding: "10px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{ backgroundColor: "white", borderRadius: "5px", marginRight: "10px" }}
          />
          <IconButton color="inherit">
            <InfoIcon />
          </IconButton>
        </Box>

        
        <Tabs value={false} textColor="inherit" indicatorColor="secondary">
          <Tab label="Ready to Wear" onClick={(e) => handleTabClick(e, "readyToWear")} />
          <Tab label="Accessories" onClick={(e) => handleTabClick(e, "accessories")} />
          <Tab label="Garment History" onClick={(e) => handleTabClick(e, "garmentHistory")} />
        </Tabs>

  
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          {activeTab === "readyToWear" && (
            <>
              <MenuItem onClick={handleClose}>Watermelon Seeds</MenuItem>
              <MenuItem onClick={handleClose}>Timeless Denim</MenuItem>
            </>
          )}
          {activeTab === "accessories" && (
            <>
              <MenuItem onClick={handleClose}>Belts</MenuItem>
              <MenuItem onClick={handleClose}>Bags</MenuItem>
            </>
          )}
          {activeTab === "garmentHistory" && (
            <>
              <MenuItem onClick={handleClose}>Ready to Wear</MenuItem>
              <MenuItem onClick={handleClose}>Custom Garments</MenuItem>
              <MenuItem onClick={handleClose}>Couture</MenuItem>
              <MenuItem onClick={handleClose}>Bridal</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
