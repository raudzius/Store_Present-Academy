import { Box, List, Typography } from '@mui/material';
import React from 'react';
import ShoppingCartItem from './components/ShoppingCartItem';

type ShoppingCartListProps = {
  items: Product[];
};

const ShoppingCartList: React.FC<ShoppingCartListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography>No items found.</Typography>
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
      {items.map(({
 id, image, title, description,
}) => (
  <ShoppingCartItem key={id} id={id} title={title} image={image} description={description} />
      ))}
    </List>
  );
};

export default ShoppingCartList;
