import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Navigation: React.FC = () => (
  <Box>
    <Header />
    <Outlet />
    <Footer />
  </Box>
);

export default Navigation;
