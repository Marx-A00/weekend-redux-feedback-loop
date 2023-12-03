import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";

function Understanding() {
  const history = useHistory();

  const [understanding, setUnderstanding] = useState(0);
  const dispatch = useDispatch();

  const handleUnderstandingInput = (e) => {
    setUnderstanding(e.target.value);
  };
  const handleNextSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: `SET_UNDERSTANDING`,
      payload: understanding,
    });
    history.push("/support");
  };

  return (
    <Card>
      <CardContent>
        <h1>How is your understanding?</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            helperText="enter a number 1-5"
            type="number"
            value={understanding}
            onChange={handleUnderstandingInput}
            id="standard-basic"
            label="Understanding?"
            variant="standard"
          />
        </Box>

        <Button
          disableElevation
          onClick={handleNextSubmit}
          variant="contained"
          data-testid="next"
          color="primary"
        >
          NEXT
        </Button>
      </CardContent>
    </Card>
  );
}

export default Understanding;
