import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

const Deposits = () => (
  <>
    <Title>Recent Deposits</Title>
    <Typography component="p" variant="h4">
      $3,024.00
    </Typography>
    <Typography color="text.secondary" sx={{ flex: 1 }}>
      on 15 March, 2019
    </Typography>
    <div>
      <Button color="primary" href="#" onClick={preventDefault}>
        View balance
      </Button>
    </div>
  </>
);

export default Deposits;
