import {
 Card, CardContent, Link, ListItem, Typography,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type OrderItemProps = Product;

const OrderItem: React.FC<OrderItemProps> = ({
 id, title, image, description,
}) => (
  <ListItem>
    <Card sx={{ height: 100 }}>
      <Link
        component={RouterLink}
        to={{
          pathname: `/products/${id}`,
        }}
        state={{
          id,
          title,
          image,
          description,
        }}
        color="inherit"
        underline="none"
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  </ListItem>
);

export default OrderItem;
