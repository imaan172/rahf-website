import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InfoPage = () => {
  return (
    <Box sx={{ backgroundColor: '#EDEAEA', minHeight: '100vh' }}>
      <Navbar />

      <Container sx={{ my: 6 }}>
        <Typography component="h2" variant="overline" sx={{ textAlign: 'center', fontSize: { xs: 18, sm: 20, md: 24 } }}>
          Information
        </Typography>

        <Box component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
          <Typography component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            How To Place An Order
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Once you have chosen your forever garment, copy the reference number, it’ll come in handy later ;&#41;
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Make your way to the drop down menu
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Select &#34;Place an Order&#34;
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Fill in your details and remember the reference number we spoke about, paste that in the reference number slot
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Once you have completed the form, click submit
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Yay you, you have placed a RAHF order :&#41;
          </Typography>
        </Box>

        {/* RAHF Sizing SECTION */}
        <Box component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
          <Typography component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
            RAHF Sizing
          </Typography>

          <Box component="article" sx={{ mb: 4 }}>
            <Typography component="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
              How does RAHF Sizing work ?
            </Typography>

            <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
              RAHF sizing is based on a databased sizing.
            </Typography>

            <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
              This means our sizes are judged based on the average (everyday) modern figure measurements.
            </Typography>

            <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
              Our sizes are similar to standard, but not limited to customised / bespoke sizing.
            </Typography>
          </Box>

          <Box component="article">
            <Typography component="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
              How does bespoke sizing work ?
            </Typography>

            <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
              Bespoke measurements is taken for clients by the designer. This means you will have a pattern specifically made for you.
            </Typography>

            <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
              If you become a loyal customer, these measurements will be added to our client information and will have update appointments every 6
              months - so all you do is purchase your garment and we pull out your size.
            </Typography>
          </Box>
        </Box>

        {/* Sizing Reference SECTION */}
        <Box component="section" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Sizing Reference
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Small | Size 8 | 68cm Waist | Size 27
          </Typography>

          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Medium | Size 10 | 72cm Waist | Size 28
          </Typography>
          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Large | Size 12 | 76cm Waist | Size 30
          </Typography>
          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            X-Large | Size 14 | 80cm Waist | Size 32
          </Typography>
          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            2X-Large | Size 16 | 84cm Waist | Size 33
          </Typography>
          <Typography component="p" variant="subtitle1" sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            3X-Large | Size 18 | 88cm Waist | Size 35
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography sx={{ maxWidth: { xs: '90vw', sm: '50vw', textAlign: 'center' } }}>
            Please note: our waist measurements refers to natural waist (usually located around the belly button area) and is sized according - with a
            2-3cm increase in sizes.
          </Typography>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default InfoPage;
