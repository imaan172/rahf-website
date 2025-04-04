import React from 'react';
import { Route, Routes } from 'react-router';

//pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage'; 
import ReadyToWear from './pages/ReadyToWear';
import Accessories from './pages/Accessories';
import GarmentArchives from './pages/GarmentArchives';

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/ready-to-wear" element={<ReadyToWear />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/garment-archives" element={<GarmentArchives />} />
    </Routes>
  );
};

export default App;
