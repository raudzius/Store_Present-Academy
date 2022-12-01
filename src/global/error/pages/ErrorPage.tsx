import { useRouteError } from 'react-router-dom';
import {
 Alert, AlertTitle, Box, Typography,
} from '@mui/material';
import React from 'react';

type ErrorResponse = {
  data: null;
  status: 404;
  statusText: 'Not Found';
};

const ErrorPage = () => {
  const error: ErrorResponse = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <Box sx={{
 width: '30%', minHeight: '100vh', mx: 'auto', mt: '40vh',
}}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <Typography component="h2" variant="h5">
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography>{error.statusText}</Typography>
      </Alert>
    </Box>
  );
};

export default ErrorPage;
