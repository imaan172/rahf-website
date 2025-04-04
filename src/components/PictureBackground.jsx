import React from 'react';
import {Box, Typography} from "@mui/material";

const PictureBackground = () => {
    return (
      <Box 
      sx={{
        height: '100vh',
        backgroundImage: 'url(/images/background-image.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', 
        textAlign: 'center',
      }}
      >
        <Typography variant="h1" sx={{ fontWeight: 'bold'}}>
          RAHF
        </Typography>
      </Box>
    );
  };
  
  export default PictureBackground;