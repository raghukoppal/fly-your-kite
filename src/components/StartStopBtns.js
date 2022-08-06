import React, { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import StartIcon from "@mui/icons-material/Start";
import FormControl from "@mui/material/FormControl";

export default function StartStopBtns() {
  const [stopMsg, setStopMsg] = useState("running");

  const onStopTrading = async () => {
    try {
      const res = await fetch(
        "http://localhost:8080/trading/manage/techm/stoptrading"
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // }
      );
      const data = await res.text();
      console.log(data);
      setStopMsg(data);
    } catch (error) {
      // Error handling here!
      console.log("error", error);
    }
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" startIcon={<StartIcon />}>
        Start Trading
      </Button>
      <Button
        variant="contained"
        color="error"
        endIcon={<MultipleStopIcon />}
        onClick={onStopTrading}
      >
        Stop Trading
      </Button>
      <p>{stopMsg}</p>
    </Stack>
  );
}
