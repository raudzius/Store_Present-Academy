import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllProductsPage from './shared/pages/AllProductsPage';
import NewProduct from './admin/pages/NewProduct';
import Navigation from './shared/components/Navigation';
import ErrorPage from './shared/pages/ErrorPage';
import SignUpPage from './shared/pages/SignUpPage';
import SignInPage from './shared/pages/SignInPage';
import ShoppingCartPage from './customer/pages/ShoppingCartPage';

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
        path: 'cart',
        element: <ShoppingCartPage />,
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

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
