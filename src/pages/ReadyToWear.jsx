import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ReadyToWearPage = () => {
  const [tabValue, setTabValue] = useState('jouMaSe'); 

  const garments = {
    jouMaSe: [
      { name: 'Corset Vest & Mini Pleated Skirt', description: 'R900', image: '/images/jms1.jpeg' },
      { name: 'Vest Dress', description: 'R450', image: '/images/jms2.jpeg' },
      { name: 'Borrow-ay Shirt', description: 'R500,20c', image: '/images/jms3.jpeg' },
      { name: 'Moroccan Linen Dress', description: 'R850', image: '/images/jms4.jpeg' },
      { name: 'Moroccan Dress', description: 'R850 - R1300', image: '/images/jms5.jpeg' },
    ],
    watermelonSeeds: [
      { name: 'Hip flaired skirt', description: 'R350', image: '/images/ws1.jpeg' },
      { name: 'Printed Baggy Tee', description: 'R250', image: '/images/ws2.jpeg' },
      { name: 'Shawl Wrapped Top', description: 'R300', image: '/images/ws3.jpeg' },
      { name: 'Kuffiyah inspired Shirt Jacket', description: 'R750', image: '/images/ws4.jpeg' },
      { name: 'Woven Kuffiyah Scarf Skirt', description: 'R350', image: '/images/ws5.jpeg' },
    ],
    timelessDenims: [
      { name: 'Denim Coat', description: 'R1300', image: '/images/td1.jpeg' },
      { name: 'Denim x Cotton Tracksuit', description: 'R450', image: '/images/td2.jpeg' },
      { name: 'Denim 2 Piece', description: 'R950', image: '/images/td3.jpeg' },
      { name: 'Denim Flaired Skirt', description: 'R550', image: '/images/td4.jpeg' },
      
    ],
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    window.location.hash = `#${newValue}`; 
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1); 
    if (hash && ['jouMaSe', 'watermelonSeeds', 'timelessDenims'].includes(hash)) {
      setTabValue(hash);
    }
  }, []); 

  return (
    <Box sx={{ backgroundColor: '#E0E0E0', minHeight: '100vh' }}>
      <Navbar />

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h4" fontWeight="bold">RAHF - Ready To Wear</Typography>
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
            <Tab label="Jou Ma Se" value="jouMaSe" />
            <Tab label="Watermelon Seeds" value="watermelonSeeds" />
            <Tab label="Timeless Denims" value="timelessDenims" />
          </Tabs>
        </Box>
      </Box>

      {tabValue === 'jouMaSe' && (
  <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
    {garments.jouMaSe.map((item, index) => (
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

{tabValue === 'watermelonSeeds' && (
  <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
    {garments.watermelonSeeds.map((item, index) => (
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

{tabValue === 'timelessDenims' && (
  <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
    {garments.timelessDenims.map((item, index) => (
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
              height: '340px', 
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

export default ReadyToWearPage;




