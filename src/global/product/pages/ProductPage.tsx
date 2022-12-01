import {
 Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const {
 id, title, image, description,
} = useLocation().state;

  return (
    <Card sx={{ height: 600 }}>
      <CardMedia component="img" alt="product" height="400" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
          {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductPage;
