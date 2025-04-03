import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

const MUIThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;

const theme = createTheme({
  typography: {
    // fontFamily: ['Barlow', 'Bellefair', 'serif', 'sans-serif'].join(','), //Roboto is default font
    button: {
      textTransform: 'none',
    },
  },
});
