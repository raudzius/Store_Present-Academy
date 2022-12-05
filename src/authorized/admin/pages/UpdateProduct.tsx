import { EditOutlined } from '@mui/icons-material';
import React from 'react';
import ProductForm from '../components/ProductForm';

const UpdateProduct = () => <ProductForm icon={<EditOutlined />} heading="Update Product" />;

export default UpdateProduct;
