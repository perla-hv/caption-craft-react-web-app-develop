import React from 'react';
import Header from '../components/Header';
import { Grid, Typography, Button } from '@mui/material';
import Footer from '../components/Footer';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function UserHelp() {
  return (
    <div style={{ marginBottom: '64px', marginTop: '64px' }}>
      <Header activeTab="Help" />

      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Help
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" align="center">
            For help, contact us:
            <br />
            <Button
              startIcon={<PhoneIcon />}
              color="primary"
              onClick={() => window.open('tel:+18678992746')}
            >
              +1 867 899 2746
            </Button>
            <br />
            or
            <br />
            <Button
              startIcon={<EmailIcon />}
              color="primary"
              onClick={() => window.open('mailto:support@captioncraft.com')}
            >
              support@captioncraft.com
            </Button>
            <br />
            <span style={{ display: 'block', marginTop: '8px' }}></span>
          </Typography>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default UserHelp;
