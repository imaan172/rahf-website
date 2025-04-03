import React from 'react';
import { Link } from 'react-router';
//material-ui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// icons
import XIcon from '@mui/icons-material/X';
import InboxIcon from '@mui/icons-material/Inbox';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 4, display: 'flex', justifyContent: 'space-between', background: 'transparent' }}>
      <IconButton sx={{ border: '2px solid black', color: '#000000', p: 0, height: 'fit-content', mt: 'auto' }}>
        <KeyboardArrowUpIcon color="inherit" />
      </IconButton>

      <Box sx={{ flexGrow: 1 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Box component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Stack direction="row" spacing={1}>
              <Box>
                <InboxIcon />
              </Box>

              <Box>
                <Stack>
                  <Typography>Client Service</Typography>
                  <Typography variant="overline" sx={{ textTransform: 'capitalize' }}>
                    Contact Us
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
            <Stack direction="row" spacing={1}>
              <Box>
                <AccountCircleIcon />
              </Box>

              <Box>
                <Stack>
                  <Typography>About Us</Typography>
                  <Typography variant="overline" sx={{ textTransform: 'capitalize' }}>
                    RAHF's Story
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-end' }}>
        <IconButton sx={{ p: 0 }}>
          <InstagramIcon />
        </IconButton>

        <IconButton sx={{ p: 0 }}>
          <XIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;
