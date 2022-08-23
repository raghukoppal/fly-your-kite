import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import StartIcon from '@mui/icons-material/Start';
import FormControl from '@mui/material/FormControl';

export default function StartStopBtns() {
  const [stopMsg, setStopMsg] = useState('');

  const onStartTrading = async () => {
    try {
      const res = await fetch('http://localhost:8080/trading/start/techm');
      const data = await res.text();
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log('error on start', error);
    }
  };

  const onStopTrading = async () => {
    try {
      const res = await fetch(
        'http://localhost:8080/trading/manage/techm/stoptrading'
      );
      const data = await res.text();
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log('error on stop', error);
    }
  };

  const onStopExitTrading = async () => {
    try {
      const res = await fetch(
        'http://localhost:8080/trading/manage/techm/exit'
      );
      const data = await res.text();
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log('error on stop and exit', error);
    }
  };

  const onBuyEntry = async () => {
    try {
      const res = await fetch('http://localhost:8080/trading/manage/techm/buy');
      const data = await res.text();
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log('error on buy entry', error);
    }
  };

  const onSellEntry = async () => {
    try {
      const res = await fetch(
        'http://localhost:8080/trading/manage/techm/sell'
      );
      const data = await res.text();
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log('error on sell entry', error);
    }
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={onStartTrading}>
          Start Trading
        </Button>
        <Button variant="contained" color="error" onClick={onStopTrading}>
          Stop Trading
        </Button>
        <Button variant="contained" color="error" onClick={onStopExitTrading}>
          Stop & Exit position
        </Button>
        <Button variant="contained" color="success" onClick={onBuyEntry}>
          Buy Entry
        </Button>
        <Button variant="contained" color="error" onClick={onSellEntry}>
          Sell Entry
        </Button>
      </Stack>
      <p>{stopMsg}</p>
    </>
  );
}
