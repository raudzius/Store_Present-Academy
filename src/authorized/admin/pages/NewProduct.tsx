import { AddOutlined } from '@mui/icons-material';
import * as React from 'react';
import ProductForm from '../components/ProductForm';

const NewProduct: React.FC = () => (
  <ProductForm icon={<AddOutlined />} heading="Add New Product" />
  );

export default NewProduct;
