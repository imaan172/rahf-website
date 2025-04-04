import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const garments = {
  Bespoke: [
    { name: 'Satin Gown', image: '/images/bes1.jpeg' },
    { name: 'Lace up Dress', image: '/images/bes2.jpeg' },
    { name: 'Halter Neck Gown', image: '/images/bes4.jpeg' },
    { name: 'No Sleece Gown', image: '/images/bes3.jpeg' },
    { name: '"Dirty" Dress', image: '/images/bes5.jpeg' },
    { name: 'Mediterranean inspired Dress', image: '/images/bes6.jpeg' },
  ],
  Custom: [
    { name: 'Custom Made 21st Dress', image: '/images/cus1.jpeg' },
  ],
  Bridal: [
    { name: 'Morning Gown', image: '/images/bri1.jpeg' },
    { name: 'Evening Gown', image: '/images/bri2.jpeg' },
  ],
};

const GarmentsPage = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isMedium = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px
  const isLarge = useMediaQuery(theme.breakpoints.up('md')); // >900px

  // Set number of columns dynamically
  const columns = isSmall ? 1 : isMedium ? 2 : 3;

  return (
    <Box sx={{ backgroundColor: '#E0E0E0', minHeight: '100vh', pb: 6 }}>
      <Navbar />
  
      {/* Page Heading */}
      <Box sx={{ textAlign: 'center', mt: 4, mb: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          RAHF - Garments
        </Typography>
      </Box>
  
      {/* Sections */}
      {Object.keys(garments).map((section, idx) => (
        <React.Fragment key={section}>
          {/* Section Header */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 4, md: 6 },
            pl: { xs: 2, md: 4 },
          }}>
            {/* Section Number */}
            <Typography
              variant="h1"
              sx={{
                color: 'rgba(0, 0, 0, 0.1)',
                fontSize: { xs: '6rem', md: '10rem' },
                fontWeight: 'bold',
                mr: 2,
              }}
            >
              {`0${idx + 1}`}
            </Typography>

            {/* Section Title */}
            <Typography
              variant="h3"
              fontWeight="500"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                zIndex: 1,
              }}
            >
              {section}
            </Typography>
          </Box>

          {/* Responsive Garment Images Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: isLarge ? 3 : 2,
              px: isSmall ? 2 : 4,
              maxWidth: '1200px',
              margin: '0 auto',
              mt: 25,
            }}
          >
            {garments[section].map((garment, index) => (
              <Box key={index} sx={{ textAlign: 'center', px: isLarge ? 1 : 2 }}>
                <Box
                  sx={{
                    width: '250px',
                    maxWidth: '250px',
                    height: '450px',
                    backgroundImage: `url(${garment.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    margin: '0 auto',
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    margin: '10px auto 0',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {garment.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </React.Fragment>
      ))}
  
      <Footer />
    </Box>
  );
};

export default GarmentsPage;




