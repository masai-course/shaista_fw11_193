import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';
export default function Form() {
      const [post, setPost] = useState([]);

    const [data, setData] = useState({
        title : "",
        body : "",
        verify : false
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData({...data, [name] : value})
      };

const handleAdd = () => {
    const init = {
        first : data.first,
        last : data.last,
        DOB : data.DOB,
        Location: data.location,
    }
    setPost([...post, init])
    setTimeout(() => alert("Sucessfully registered"), 3000);
}
    
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
       
        <Box sx={{ bgcolor: 'pink', height: '80vh',margin:'3%',padding:'3%' }} >
         <h1>Registration form using MUI</h1>
         <form>
        <TextField id="outlined-basic" label="First Name" variant="outlined" onChange = {(e) => handleChange(e)} required value={data.first}/>
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange = {(e) => handleChange(e)} value={data.last} required />
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Date of Birth" variant="outlined" onChange = {(e) => handleChange(e)} value={data.DOB} required/>
        <br/>
        <br/>
        <TextField id="outlined-basic" label="Location" variant="outlined" onChange = {(e) => handleChange(e)} value={data.Location} required />
        <br/>
        <br/>
        <Button variant="contained" onClick={ handleAdd} >Submit</Button>
        </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
