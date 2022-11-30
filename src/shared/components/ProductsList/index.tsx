import { Box, List, Typography } from '@mui/material';
import React from 'react';
import { type Product } from '../../pages/AllProductsPage';
import ProductItem from './components/ProductItem';

type ProductsListProps = {
  products: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography>No products found.</Typography>
      </Box>
    );
  }

  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {products.map(({ id, image, title }) => (
        <ProductItem key={id} id={id} title={title} image={image} />
      ))}
    </List>
  );
};
export default ProductsList;
