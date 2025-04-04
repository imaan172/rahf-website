import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlaceOrderForm from '../components/Forms/PlaceOrderForm';
import QueryForm from '../components/Forms/QueryForm';

const ContactPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: '#EDEAEA', minHeight: '100vh' }}>
      <Navbar />

      <Container sx={{ my: 3 }}>
        <Typography component="h2" variant="overline" sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }}>
          Contact
        </Typography>
      </Container>

      <Container sx={{ mt: 3, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/*  */}
        <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mb: 3 }}>
          <Tab label="Place an Order" />
          <Tab label="Query?" />
        </Tabs>

        <Box sx={{ width: { xs: '100%', sm: '50vw' } }}>{tabValue === 0 ? <PlaceOrderForm /> : <QueryForm />}</Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default ContactPage;
