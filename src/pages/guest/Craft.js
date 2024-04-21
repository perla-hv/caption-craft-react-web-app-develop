import React from 'react';
import Header from '../components/Header';
import Poster from '../components/Poster';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import Generate from '../components/Generate';

function Home() {
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <Grid container direction="column" spacing={8}>
        <Grid item>
          <Header activeTab="Craft"/>
        </Grid>
        <Grid item>
          <Poster />
        </Grid>
        <Grid item>
          <Generate/>
        </Grid>
        <Grid item style={{ marginBottom: '-24px' }}> 
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
