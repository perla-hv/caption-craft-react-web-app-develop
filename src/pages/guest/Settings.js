import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DisplayMessage from '../components/DisplayMessage';

function Settings() {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <Grid container direction="column" spacing={8}>
        <Grid item>
          <Header activeTab="Messages"/>
        </Grid>
        <Grid item>
          <DisplayMessage message = "Settings"/>
        </Grid>
        <Grid item style={{ marginBottom: '-24px' }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}
export default Settings;
