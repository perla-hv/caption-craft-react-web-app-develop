import React from 'react'

import Icon from '../components/Icon';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import * as client from "./client";
import {useDispatch} from "react-redux";
import {setCurrUser} from "../user/userReducer";


const defaultTheme = createTheme();



function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      console.log(credentials)
      const message = await client.Login(credentials);
      dispatch(setCurrUser(message));
      if (message) {
        navigate('/UserHome');
      } else {
        setLoginError('Incorrect username or password.'); // Set error message
      }
      // navigate('/Craft');

      // const response = await login({ username, password });
      
      // Handle response data
      // console.log('User logged in successfully:', response);
      
      // Redirect to another page or update the state as necessary
    } catch (error) {
      // Handle errors such as invalid login credentials
      console.error('Login failed:', error);
    }
  };


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
            Login In
          </Typography>

          {loginError && (
            <Box sx={{ 
              color: 'red', // white text
              my: 2, // margin top and bottom
              textAlign: 'center'
            }}>
              <Typography variant="subtitle1">{loginError}</Typography>
            </Box>
          )}

          <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              value={credentials.username}
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
            <TextField
              margin="normal"
              value={credentials.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
              Login In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ textDecoration: 'none', color: '#3c3c3c' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Signup" variant="body2" sx={{ textDecoration: 'none', color: '#3c3c3c' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login
