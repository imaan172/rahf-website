import React from 'react';

import { Button, Stack, Box } from '@mui/material';
import { Link } from 'react-router';

const NavigateTo = () => {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default NavigateTo;
