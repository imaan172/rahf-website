import React from 'react';
//material-ui
import { styled, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <Box sx={{ backgroundColor: '#EDEAEA', minHeight: '100vh' }}>
      <Navbar />

      <Container>
        <StyledWrapper spacing={{ xs: 6, sm: 12 }} sx={{ my: { xs: 5, sm: 8, md: 12 } }}>
          {/* 1ST SECTION */}
          <Grid container spacing={{ xs: 0, sm: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: 'center', px: { xs: 2, sm: 3, md: 4 } }}>
              <Typography variant="overline" component="h6" sx={{ fontSize: 16 }}>
                THE STORY OF RAHF
              </Typography>
              <Typography>
                RAHF is a proudly colored and local South African owned, sustainable fashion brand. The brand aims to create wearable art through
                street wear, designer, bespoke tailored and it’s craftsmanship, while telling stories through all its forms -from fabrics to seams,
                everything being a part of a journey and becoming one with the garments and pieces we create. With each garments being made from
                scratch per order – allowing each garment to be made specially for the client, with love, passion, time and talent from the fingers of
                our team to the seams of those who dream.
              </Typography>
            </Grid>

            <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'grid' }, justifyContent: 'center', alignItems: 'center' }}>
              <StyledImageOne>
                <Box
                  component="img"
                  src="/images/about-us-image-1.svg"
                  alt="image of a garment decorated with two bees and some flowers"
                  width={200}
                  sx={{ zIndex: 2, position: 'relative' }}
                />
              </StyledImageOne>
            </Grid>
          </Grid>

          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />

          {/* 2ND SECTION */}
          <Grid container spacing={{ xs: 0, sm: 4 }}>
            <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'grid', justifyContent: 'center', alignItems: 'center' } }}>
              <StyledImageTwo>
                <Box
                  component="img"
                  src="/images/about-us-image-2.svg"
                  alt="image of a garment decorated with two bees and some flowers"
                  width={250}
                  sx={{ zIndex: 2, position: 'relative' }}
                />
              </StyledImageTwo>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: 'center', px: { xs: 2, sm: 3, md: 4 } }}>
              <Typography variant="overline" component="h6" sx={{ fontSize: 16 }}>
                Moegamad Rahfeeq Abrahams
              </Typography>
              <Typography>
                The founder and creative director of RAHF was born in 2001, growing up in Cape Town Mitchell’s plain - Since a young age having a
                passion for storytelling, the idea of telling stories through the art of garment construction was sparked in 2020 during his first
                year of fashion school before dropping out. It was with this passion that he founded and created RAHF, with its aim to always tell
                stories through his garments – making them wearable but fashionable art. “ I will always have some unfinished detailing to my work,
                because my story is not yet finished. The day that I die is when my garments will have proper hems, finished seams and completed work.
                Until then, I am always changing, RAHF is always changing – and due to that I am unfinished; like my garments”
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ display: { xs: 'block', sm: 'none' } }} />

          {/* 3RD SECTION */}
          <Grid container spacing={{ xs: 0, sm: 4 }}>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ textAlign: 'center', px: { xs: 2, sm: 3, md: 4 } }}>
              <Typography variant="overline" component="h6" sx={{ fontSize: 16 }}>
                Goals:
              </Typography>
              <Typography>
                RAHF aims to be known for their craftsmanship and storytelling. The purpose of RAHF is to design for the everyday and worn in every
                way. The RAHF team aims to create garments that are not only fashionable nor only staple but rather garments that are RAHF - garments
                that one can gift down and increase within value, craftsmanship, storytelling, art and overall be seen over the years and remain
                iconic. It is more than just a garment it is a showstopper, a story, a must-have, a lifestyle, it is RAHF.
              </Typography>
            </Grid>

            <Grid size={{ sm: 6 }} sx={{ display: { xs: 'none', sm: 'grid', justifyContent: 'center', alignItems: 'center' } }}>
              <StyledImageThree>
                <Box
                  component="img"
                  src="/images/about-us-image-3.svg"
                  alt="image of a garment decorated with two bees and some flowers"
                  width={250}
                  sx={{ zIndex: 2, position: 'relative' }}
                />
              </StyledImageThree>
            </Grid>
          </Grid>
        </StyledWrapper>
      </Container>

      <Footer />
    </Box>
  );
};

export default AboutPage;

const StyledWrapper = styled(Stack)(({ theme }) => {
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return {
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: "''",
      height: '100%',
      width: matches ? '2px' : 0,
      zIndex: 2,
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
  };
});

const StyledImageOne = styled(Box)({
  position: 'relative',
  '&::before': {
    position: 'absolute',
    content: "''",
    height: '120%',
    width: '100%',
    zIndex: 1,
    left: '25%',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#EDE3DC',
  },
});

const StyledImageTwo = styled(Box)({
  position: 'relative',
  '&::before': {
    position: 'absolute',
    content: "''",
    height: '50%',
    width: '100%',
    zIndex: 1,
    left: '-50%',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#EDE3DC',
  },
});

const StyledImageThree = styled(StyledImageTwo)({
  '&::before': {
    left: 'unset',
    right: '-50%',
  },
});
