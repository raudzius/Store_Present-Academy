import * as React from 'react';
import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProductsPage from './shared/pages/AllProductsPage';
import NewProduct from './admin/pages/NewProduct';
import Navigation from './shared/components/Navigation';
import ErrorPage from './shared/pages/ErrorPage';
import SignUpPage from './shared/pages/SignUpPage';
import SignInPage from './shared/pages/SignInPage';

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
        element: <SignUpPage />,
      },
      {
        path: 'signin',
        element: <SignInPage />,
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
