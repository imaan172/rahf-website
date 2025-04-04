import React from 'react';
import { Box } from '@mui/material';
import PictureBackground from '../components/PictureBackground';
import Navbar from '../components/Navbar';
import NewRelease from '../components/NewReleases';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <PictureBackground />
      <NewRelease />
      <Footer />
    </Box>
  );
};

export default HomePage;
