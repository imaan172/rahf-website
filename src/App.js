import React from 'react';
import { Route, Routes } from 'react-router';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  );
};

export default App;
