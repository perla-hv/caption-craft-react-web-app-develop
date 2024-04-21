import React, { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography, Chip, Card,CardMedia, CircularProgress} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as client from "./client";

function Generate({user}) {
  // State to hold the textarea value and selected styles
  const isUser = (user !== undefined);
  const [text, setText] = useState('');
  const [styles, setStyles] = useState([]);
  const [imageResponse, setImageResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle change in text area
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // Handle style addition
  const addStyle = (style) => {
    // Add the selected style to the styles array if it's not already included
    if (!styles.includes(style)) {
      setStyles((prevStyles) => [...prevStyles, style]);
    }
  };

  // Handle image generation
  const generateImage = async () => {
    // Implement image generation logic here
    setIsLoading(true);
    console.log('Generating image with the following text and styles:', text, styles);
    const response = await client.generateImage({'prompt': text});
    setImageResponse(response.image);
    setIsLoading(false);
    console.log(response.image);
  };

  // Example styles - replace with your actual styles
  const availableStyles = ['Art', 'Natural', 'Digital', 'Bokeh', 'moody', 'black-white', 'oil painting', 'cartoon', 'line art', 'wood carving', 'origami', 'colourful'];

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{ padding: '20px' }}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Enter your text"
          variant="outlined"
          value={text}
          onChange={handleTextChange}
        />
      </Grid>
      <Grid item xs={12} direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={generateImage} sx = {{bgcolor : "black" , margin: 2,
            '&:hover': {
                color : "white",
                backgroundColor: 'green',
              }
            }}>
            Generate
          </Button>
          {isUser ? <Button variant="contained" color="primary" onClick={generateImage} sx = {{bgcolor : "green" ,
              margin: 2,
            '&:hover': {
                color : "white",
                backgroundColor: 'black',
              }
            }}>
            Save
          </Button> : ""}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Choose styles:</Typography>
        {availableStyles.map((style) => (
          <Button key={style} variant="outlined" onClick={() => addStyle(style)} startIcon={<AddCircleOutlineIcon />}
          sx = {{color : "black",  variant : "contained",
            '&:hover': {
                color : "white",
                backgroundColor: 'green',
              }

          }}
          >
            {style}
          </Button>
        ))}
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: '10px' }}>
          <Typography variant="subtitle1">Selected Styles:</Typography>
          {styles.map((style, index) => (
            <Chip
              key={index}
              label={style}
              onDelete={() => setStyles(styles.filter((s) => s !== style))}
              style={{ margin: '5px' }}
            />
          ))}
        </Paper>
      </Grid>
      {imageResponse ? <Grid item xs={12}>
        <img src={imageResponse}></img>
      </Grid> : null}
      {
        isLoading ? 
        <CircularProgress /> : null
      }
    </Grid>
  );
}

export default Generate;
