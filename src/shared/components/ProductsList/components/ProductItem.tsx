import {
 ListItem, Card, CardMedia, CardContent, Typography, Link,
} from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { type Product } from '../../../pages/AllProductsPage';

type ProductItemProps = Product;

const ProductItem: React.FC<ProductItemProps> = ({ id, title, image }) => (
  <ListItem>
    <Card sx={{ maxWidth: 345 }}>
      <Link component={RouterLink} to={`/products/${id}`} color="inherit" underline="none">
        <CardMedia component="img" alt="product" height="200" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
            {id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem atque, dolore earum
            dolorem ipsa tempore voluptatibus quasi reiciendis aut doloribus eos, culpa sint debitis
            quisquam mollitia ratione velit ut. Ad!
          </Typography>
        </CardContent>
      </Link>
    </Card>
  </ListItem>
);

export default ProductItem;
