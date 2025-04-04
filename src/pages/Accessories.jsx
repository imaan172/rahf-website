import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AccessoriesPage = () => {
  const [tabValue, setTabValue] = useState('Belts'); 

  const accessories = {
    Belts: [
      { name: 'Black RAHF Belt', description: 'R150', image: '/images/belt1.jpeg' },
      { name: 'Red RAHF Belt', description: 'R150', image: '/images/belt2.jpeg' },
    ],
    Bags: [
      { name: 'Embroided Bee Bag ', description: 'R350', image: '/images/bag1.jpeg' },
      { name: 'Embroided Flower Bag 1.0', description: 'R400', image: '/images/bag2.jpeg' },
      { name: 'Embroided Flower Bag 2.0', description: 'R350', image: '/images/bag3.jpeg' },
      { name: 'Denim Leather Strapped Handbag', description: 'R450', image: '/images/bag4.jpeg' },
      { name: 'Denim Handbag', description: 'R350', image: '/images/bag5.jpeg' },
  
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    window.location.hash = `#${newValue}`; 
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1); 
    if (hash && ['belts', 'bags'].includes(hash)) {
      setTabValue(hash);
    }
  }, []); 

  return (
    <Box sx={{ backgroundColor: '#E0E0E0', minHeight: '100vh' }}>
      <Navbar />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" fontWeight="bold">RAHF - Accessories</Typography>
      </Box>

      <Box sx={{ mt: 6, px: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="simple tabs example"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: 'auto', 
            }}
          >
            <Tab label="Belts" value="belts" />
            <Tab label="Bags" value="bags" />
          </Tabs>
        </Box>
      </Box>

      {tabValue === 'belts' && (
  <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
    {accessories.Belts.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} l={2} key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',  
            alignItems: 'center', 
            width: '100%', 
            marginBottom: '1.5rem', 
          }}
        >
          {/* Image container */}
          <Box
            sx={{
              width: '250px',  
              height: '300px', 
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              borderRadius: '8px', 
              marginBottom: '1rem', 
            }}
          />

          {/* Text container */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0.5rem',
              width: '100%', 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
)}

{tabValue === 'bags' && (
  <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
    {accessories.Bags.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} l={2} key={index}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',  
            alignItems: 'center', 
            width: '100%', 
            marginBottom: '1.5rem', 
          }}
        >
          {/* Image container */}
          <Box
            sx={{
              width: '250px',  
              height: '300px', 
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              borderRadius: '8px', 
              marginBottom: '1rem', 
            }}
          />

          {/* Text container */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', 
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: '0.5rem',
              width: '100%', 
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Grid>
    ))}
  </Grid>
)}


      <Footer />
    </Box>
  );
};

export default AccessoriesPage;