import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Define the images and their corresponding descriptions
const imageData = [
  {
    url: 'https://images.unsplash.com/photo-1639403169804-318fcb1d23ad?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Sand hues and tree in between"',
  },
  {
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2038&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Kids playing in the trees"',
  },
  {
    url: 'https://images.unsplash.com/photo-1639402479720-fb4464582470?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Shore with birds"',
  },
  {
    url: 'https://images.unsplash.com/photo-1571766230078-2cf0613d4fe2?auto=format&fit=crop&q=80&w=1933&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Ocean shore with a beautiful rainbow"',
  },
  {
    url: 'https://images.unsplash.com/photo-1500467525088-aafe28c0a95e?auto=format&fit=crop&q=80&w=1838&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Tiger resting"',
  },
];

function Poster() {
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
  };

  // Function to go to a specific image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Box sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)), url('${imageData[currentImageIndex].url}')`,
        height: "500px",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "1.5rem",
        width: "100%"
      }}>
        <Button
          size="small"
          variant="contained" 
          startIcon={<ArrowBackIosIcon />}
          onClick={prevImage}
          sx={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", bgcolor:"black",
          '&:hover': {
            color : "white",
            backgroundColor: 'green',
          },
        
        }}
        >
          Prev
        </Button>
        <Box 
          sx={{ 
            textAlign: "center", 
            top : "60%",
            position : "absolute",
            padding: "0 20px",
            fontWeight: 'bold', // Make the font bold
            fontSize: '2.5rem', // Make the font size 2rem
            fontFamily: 'Arial, sans-serif', // Change the font family to Arial
            letterSpacing: '0.05em', // Adjust letter spacing
            lineHeight: '1.2' // Adjust line height for better readability
            

          }}
        >
          {imageData[currentImageIndex].text}
        </Box>
        <Button
          size="small"
          variant="contained" 
          endIcon={<ArrowForwardIosIcon />}
          onClick={nextImage}
          sx={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", bgcolor:"black" ,
          '&:hover': {
            color : "white",
            backgroundColor: 'green',
          },
        }}
        >
          Next
        </Button>
        {/* Dots for image navigation */}
        <Box sx={{ position: "absolute", bottom: 10, display: 'flex', alignItems: 'center' }}>
          {imageData.map((image, index) => (
            <IconButton 
              key={index}
              onClick={() => goToImage(index)}
              sx={{
                color: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)'
              }}
            >
              <FiberManualRecordIcon fontSize="small" />
            </IconButton>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Poster;
