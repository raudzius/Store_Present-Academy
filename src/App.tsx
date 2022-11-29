import * as React from 'react';
import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProducts from './shared/pages/AllProducts';
import NewProduct from './admin/pages/NewProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AllProducts />,
  },
  {
    path: 'signup',
    element: <div>Signup</div>,
  },
  {
    path: 'signin',
    element: <div>Signup</div>,
  },
  {
    path: 'products/new',
    element: <NewProduct />,
  },
]);

const App: React.FC = () => (
  <Box>
    <RouterProvider router={router} />
  </Box>
);

export default App;
