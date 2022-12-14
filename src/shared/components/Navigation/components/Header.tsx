import React from 'react';
import {
 AppBar, Toolbar, IconButton, Button,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => (
  <AppBar position="sticky" component="header">
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <Menu />
      </IconButton>
      <Button component={RouterLink} to="products/all" color="inherit">
        All
      </Button>
      <Button component={RouterLink} to="products/new" color="inherit">
        New
      </Button>
      <Button component={RouterLink} to="cart" color="inherit">
        Cart
      </Button>
      <Button component={RouterLink} to="customer/orders" color="inherit">
        My Orders
      </Button>
      <Button component={RouterLink} to="admin/dashboard" color="inherit">
        Dashboard
      </Button>
      <Button component={RouterLink} to="admin/orders/all" color="inherit">
        All Orders
      </Button>
      <Button component={RouterLink} to="signup" color="inherit">
        Sign Up
      </Button>
      <Button component={RouterLink} to="signin" color="inherit">
        Sign In
      </Button>
    </Toolbar>
  </AppBar>
);

export default Header;
