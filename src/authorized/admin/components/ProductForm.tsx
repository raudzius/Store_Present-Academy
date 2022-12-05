import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

type ProductFormProps = {
  icon: React.ReactNode;
  heading: string;
};

const ProductForm: React.FC<ProductFormProps> = ({ icon, heading }) => {
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleReset = () => {
    setTitle('');
    setImage('');
    setPrice('');
    setDescription('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      title,
      image,
      price,
      description,
    });
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>{icon}</Avatar>
        <Typography component="h1" variant="h5">
          {heading}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                variant="filled"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel htmlFor="image" required>
                Image
              </InputLabel>
              <Input
                id="image"
                type="file"
                required
                fullWidth
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="price"
                label="Price"
                type="number"
                inputProps={{ min: 0.01, step: 0.01 }}
                id="price"
                variant="filled"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="description"
                label="Description"
                type="number"
                id="description"
                variant="filled"
                multiline
                rows={7}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={handleReset} fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductForm;
