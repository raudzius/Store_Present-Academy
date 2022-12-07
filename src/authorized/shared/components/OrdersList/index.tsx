import { Box, List, Typography } from '@mui/material';
import React from 'react';
import OrderItem from './components/OrderItem';

type OrdersListProps = {
  orders: Product[];
};

const OrdersList: React.FC<OrdersListProps> = ({ orders }) => {
  if (orders.length === 0) {
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
      {orders.map(({
 id, image, title, description,
}) => (
  <OrderItem key={id} id={id} title={title} image={image} description={description} />
      ))}
    </List>
  );
};

export default OrdersList;
