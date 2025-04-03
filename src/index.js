import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MUIThemeProvider from './components/MUIThemeProvider';
import { BrowserRouter } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MUIThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MUIThemeProvider>
  </React.StrictMode>
);
