import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <Box component="footer">
      <Box
        sx={{
          bgcolor: '#232328',
          color: 'white',
          pt: 3, // Adjust top padding to a lower value
          pb: 3, // Adjust bottom padding as well
          fontFamily: "DMSans, Helvetica, sans-serif",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="space-between">
            {/* First About Us Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography>About Comcast</Typography>
              <Typography>Comcast Business</Typography>
              <Typography>Careers</Typography>
              <Typography>Press Room</Typography>
              <Typography>Corporate Site</Typography>
              <Typography>Advertise with Us</Typography>
              <Typography>Sitemap</Typography>
            </Grid>

            {/* Second About Us Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography>About Comcast</Typography>
              <Typography>Comcast Business</Typography>
              <Typography>Careers</Typography>
              <Typography>Press Room</Typography>
              <Typography>Corporate Site</Typography>
              <Typography>Advertise with Us</Typography>
              <Typography>Sitemap</Typography>
            </Grid>

            

            {/* Social Media Icons */}
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <TwitterIcon sx={{ mx: 1 }} />
              <FacebookIcon sx={{ mx: 1 }} />
              <YouTubeIcon sx={{ mx: 1 }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: 'black',
          color: 'white',
          py: 2, // Adjust top and bottom padding to be less if necessary
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '2.0rem',
              fontFamily: 'Arial, sans-serif',
              letterSpacing: '0.05em',
              lineHeight: '1.2',
              my: 0, // Remove vertical margins
            }}
          >
            Caption Craft
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
