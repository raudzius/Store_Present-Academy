import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewProduct from './authorized/admin/pages/NewProduct';
import Navigation from './shared/components/Navigation';
import ShoppingCartPage from './authorized/customer/pages/ShoppingCartPage';
import CustomerOrdersPage from './authorized/customer/pages/CustomerOrdersPage';
import Dashboard from './authorized/admin/pages/DashboardPage';
import AllOrders from './authorized/admin/pages/AllOrders';
import ErrorPage from './global/error/pages/ErrorPage';
import AllProductsPage from './global/product/pages/AllProductsPage';
import ProductPage from './global/product/pages/ProductPage';
import SignUpPage from './global/authorization/pages/SignUpPage';
import SignInPage from './global/authorization/pages/SignInPage';

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
        path: 'products/:productId',
        element: <ProductPage />,
      },
      {
        path: 'cart',
        element: <ShoppingCartPage />,
      },
      {
        path: 'customer/orders',
        element: <CustomerOrdersPage />,
      },
      {
        path: 'products/new',
        element: <NewProduct />,
      },
      {
        path: 'admin/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'admin/orders/all',
        element: <AllOrders />,
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
