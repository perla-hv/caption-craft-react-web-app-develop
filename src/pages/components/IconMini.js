import React from 'react';
import Box from '@mui/material/Box';


function IconMini({sx, onClick}) {
  return (
    <Box
      sx={{
        width: theme => theme.spacing(7), // Adjust the size as needed
        height: theme => theme.spacing(7), // Adjust the size as needed
        borderRadius: '20%',
        overflow: 'hidden', // Hide overflow if the image is larger than the box
        ...sx,
      }}
    >
      <button onClick={onClick} style={{ all: 'unset', cursor: 'pointer', width: '100%', height: '100%' }}>
        <img
          src="/ccmini.jpg"
          alt="Icon"
          style={{
            width: '100%', // The image will fill the box
            height: '100%', // The image will fill the box
            objectFit: 'cover', // Cover the area of the box without stretching
          }}
        />
      </button>
    </Box>
  );
}

export default IconMini;
