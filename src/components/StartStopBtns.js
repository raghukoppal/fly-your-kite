import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import StartIcon from '@mui/icons-material/Start';
import FormControl from '@mui/material/FormControl';
export default function StartStopBtns() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" startIcon={<StartIcon />}>
        Start Trading
      </Button>
      <Button variant="contained" color="error" endIcon={<MultipleStopIcon />}>
        Stop Trading
      </Button>
    </Stack>
  );
}
