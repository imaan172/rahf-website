import React, { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const PlaceOrderForm = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    homeAddress: '',
    garmentRefNumber: '',
    sizing: '',
    color: '',
    message: '',
  });

  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack component="form" spacing={4} onSubmit={handleSubmit}>
        <TextField required fullWidth variant="standard" id="fullName" label="Full Name" value={values.fullName} onChange={handleChange} />
        <TextField required fullWidth variant="standard" id="email" label="Email Address" value={values.email} onChange={handleChange} />
        <TextField required fullWidth variant="standard" id="phoneNumber" label="Phone Number" value={values.phoneNumber} onChange={handleChange} />
        <TextField required fullWidth variant="standard" id="homeAddress" label="Home Address" value={values.homeAddress} onChange={handleChange} />
        <TextField
          required
          fullWidth
          variant="standard"
          id="garmentRefNumber"
          label="Garment Reference Number"
          value={values.garmentRefNumber}
          onChange={handleChange}
        />
        <TextField required fullWidth variant="standard" id="sizing" label="Sizing" value={values.sizing} onChange={handleChange} />
        <TextField required fullWidth variant="standard" id="color" label="Colour" value={values.color} onChange={handleChange} />
        <TextField fullWidth multiline rows={5} variant="outlined" id="message" label="Message" value={values.message} onChange={handleChange} />

        <Stack direction="row" justifyContent="flex-end">
          <Button type="submit" color="inherit" variant="outlined" sx={{ borderRadius: '20px', px: 4, textTransform: 'uppercase' }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PlaceOrderForm;
