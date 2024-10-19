import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function RequestItems() {
  return (
    <div style={{alignItems: "center", display:  "flex", justifyContent: "center"}}>

 <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
    </div>
   
  );
}