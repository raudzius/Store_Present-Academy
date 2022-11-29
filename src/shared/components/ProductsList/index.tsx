import {
 Box, List, ListItem, Typography,
} from '@mui/material';
import React from 'react';
import { type Product } from '../../pages/AllProducts';
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
    <List>
      {products.map(({ id, image, title }) => (
        <ListItem>
          <ProductItem key={id} id={id} title={title} image={image} />
        </ListItem>
      ))}
    </List>
  );
};
export default ProductsList;
