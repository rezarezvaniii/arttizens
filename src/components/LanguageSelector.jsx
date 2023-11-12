import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function LanguageSelector() {
  const dispatch = useDispatch();
  const language = useSelector(state => state.language);


  const [age, setAge] = React.useState('');




  const handleChange = (event) => {
    dispatch({ type: 'SET_LANGUAGE', payload: event.target.value });
    if (event.target.value == "en") {
      document.body.classList.add('dirr')
    }
    else {
      document.body.classList.remove('dirr')
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
       
          className='font-IRANSansX-DemiBold text-base'
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem  value="fa">فارسی</MenuItem>
          <MenuItem  value="en">English</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSelector;