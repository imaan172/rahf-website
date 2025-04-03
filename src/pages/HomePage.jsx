import React from 'react';
import { Box } from '@mui/material';
import PictureBackground from '../components/PictureBackground';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <PictureBackground />
    </Box>
  );
};

export default HomePage;
