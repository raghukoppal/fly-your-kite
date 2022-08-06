import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StocksSelector() {
  const [stock, setStock] = React.useState('');

  const handleChange = (event) => {
    setStock(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 220 }}>
      <InputLabel id="stock-select-label">Stocks</InputLabel>
      <Select
        labelId="stock-select-label"
        id="stock-select"
        value={stock}
        label="Stocks"
        onChange={handleChange}
      >
        {/* <MenuItem value="">
          <em>None</em>
        </MenuItem> */}
        <MenuItem value={'techm'}>TECHM</MenuItem>
        <MenuItem value={'infy'}>INFY</MenuItem>
        <MenuItem value={'hdfc'}>HDFC</MenuItem>
      </Select>
    </FormControl>
  );
}
