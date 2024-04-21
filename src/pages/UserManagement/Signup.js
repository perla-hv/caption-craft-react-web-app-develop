import React, { useState } from 'react'
import * as client from "./client";
import Icon from '../components/Icon';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

 function Signup() {
  const navigate = useNavigate();
  const [signupError, setsignupError] = useState("");
  const [info, setInfo] = useState({ username: "", password: "" , firstName : "", lastName : ""});

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const message = await client.Signup(info);
      if (message) {
        navigate('/Login');
      } else {
        setsignupError(message); // Set error message
      }
    
    } catch (error) {
      setsignupError('Signup failed', error);
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Icon/>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          {signupError && (
            <Box sx={{ 
              color: 'red', // white text
              my: 2, // margin top and bottom
              textAlign: 'center'
            }}>
              <Typography variant="subtitle1">{signupError}</Typography>
            </Box>
          )}

          <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              value={info.username}
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setInfo({...info, username: e.target.value})}
            />
            <TextField
              margin="normal"
              value={info.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setInfo({...info, password: e.target.value})}
            />
          <TextField
              margin="normal"
              value={info.firstName}
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={(e) => setInfo({...info, firstName: e.target.value})}
            />
            <TextField
              margin="normal"
              value={info.lastName}
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={(e) => setInfo({...info, lastName: e.target.value})}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'black', // Normal state background color
                '&:hover': { // Hover state
                  backgroundColor: 'green', // Background color on hover
                },
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
            <Grid item>
              <Link href="/Login" variant="body2" sx={{ textDecoration: 'none', color: '#3c3c3c' }}>
                Have an account? Login In
              </Link>
            </Grid>
          </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
export default Signup