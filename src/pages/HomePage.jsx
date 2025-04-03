import React from 'react';
import { Box } from '@mui/material';
import PictureBackground from '../components/PictureBackground';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <PictureBackground />
      <Footer />
    </Box>
  );
};

export default HomePage;
