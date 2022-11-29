import * as React from 'react';
import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProductsPage from './shared/pages/AllProductsPage';
import NewProduct from './admin/pages/NewProduct';
import Navigation from './shared/components/Navigation';
import ErrorPage from './shared/pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products/all',
        element: <AllProductsPage />,
      },
      {
        path: 'products/new',
        element: <NewProduct />,
      },
      {
        path: 'signup',
        element: <div>Signup</div>,
      },
      {
        path: 'signin',
        element: <div>Signin</div>,
      },
    ],
  },
]);

const App: React.FC = () => (
  <Box>
    <RouterProvider router={router} />
  </Box>
);

export default App;
