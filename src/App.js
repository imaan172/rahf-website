import React from 'react';
import { Route, Routes } from 'react-router';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default App;
