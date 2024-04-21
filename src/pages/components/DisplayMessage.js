import React from 'react';
import { Typography } from '@mui/material';

function DisplayMessage({ message }) {
  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <Typography variant="h3" component="h3">
        Need to Login or Signup to use {message}!!! feature
      </Typography>
    </div>
  );
}
export default DisplayMessage;
