import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Navigation: React.FC = () => (
  <Container maxWidth={false} disableGutters>
    <Header />
    <Container component="main" sx={{ minHeight: 'calc(100vh - 136px)' }}>
      <Outlet />
    </Container>
    <Footer />
  </Container>
);

export default Navigation;
