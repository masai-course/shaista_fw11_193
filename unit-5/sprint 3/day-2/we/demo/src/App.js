import {Button} from '@mui/material'
//import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography'
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
function App() {
  const [value, setValue] = useState(2);
const Input = styled('input')({
  display: 'none',
});
  return (
    <div className="App">
   
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
     <Button variant="contained">Hellow World</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
       <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Stack>
    </div>
  );
}

export default App;
