import {
 ListItem, Card, CardMedia, CardContent, Typography, Link,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

type ProductItemProps = Product;

const ProductItem: React.FC<ProductItemProps> = ({
 id, title, image, description,
}) => (
  <ListItem sx={{ width: 345 }}>
    <Card sx={{ height: 400 }}>
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
        <CardMedia component="img" alt="product" height="200" image={image} />
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

export default ProductItem;
