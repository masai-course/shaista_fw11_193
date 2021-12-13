import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
export default function Form() {

    const handlehandle=()=>{
        setTimeout(() => alert("Sucessfull loged in"), 3000);
    }
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh',margin:'3%',padding:'3%' }} >
         <h1>Form using MUI</h1>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Location" variant="outlined" />
        <br/>
        <br/>
        <Button variant="contained" onClick={handlehandle}>Submit</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}
