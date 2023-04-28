import { useState } from 'react';
import { AppBar, Box, Button, Typography } from '@mui/material';

function App() {

  function classify() {
    console.log('Classify');
  }

  return (
    <>
      <AppBar position='static'>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, my: 1 }}>
          Blood Cell Classifier
        </Typography>
      </AppBar>
      <Box sx={{ my: 2, mx: 2 }}>

        <Button variant="outlined" component="label">
          Upload image
          <input hidden accept="image/*" type="file" />
        </Button>

        <Button variant="contained" onClick={()=>{classify()}}>Classify</Button>
      </Box>
    </>
  )
}

export default App;
